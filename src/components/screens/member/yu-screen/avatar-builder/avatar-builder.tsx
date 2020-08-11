import { Button, Text, GenericHeading } from "@atoms/index";
import { useQuery } from "@apollo/react-hooks";
import Logger from "@services/logging/logger";
import React from "react";
import { useState, useRef, useCallback, useMemo, FC } from "react";
import { FlatList, SafeAreaView, View, ScrollView } from "react-native";
import { AvatarPartType } from "@graphql/_core/schema/globalTypes";
import { Avatar, Avatar_getAvatarColors } from "@graphql/_core/schema";
import { GQL_QUERY_AVATAR } from "@graphql/yuscreen";
import { bodyItems } from "@redux/avatar/avatar.all.data";
import { IBodyItem } from "@redux/avatar/avatar.reducer";
import { BodyAvatar } from "../svg/body";
import { loadingColorData, loadingItemData, parseBodyParts, addExtraData } from "./avatar-builder.helper";
import styles from "./avatar-builder.styles";
import BodyItem from "./body-item";
import PartItem from "./items/part-item";
import ColorItem from "./items/color-item";
import { Navigation } from "react-native-navigation";
import { MODALS } from "../../../../../navigation/constants";
import { Style } from "@styles/index";
import { IAvatar, Category, AvatarBuilderHeading } from "./avatar.types";
import { AVATAR_BUILDER_LIST, BUILDER_BODY, NO_ITEM_SELECTED, HEAD_TYPE } from "@ids";
import { IBodyItemCategory } from "../../../../../redux/avatar/avatar.all.data";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";

interface IProps {
  avatar: IAvatar;
  updateUserAvatar: (avatar: IAvatar) => void;
  onBackPressed: () => void;
  heading: AvatarBuilderHeading;
}

const AvatarBuilder: FC<IProps> = ({ avatar: defaultAvatar, onBackPressed, updateUserAvatar, heading }) => {
  const [bodyItemType, setBodyItemType] = useState(AvatarPartType.body);
  const [category, setCategory] = useState<Category>("colors");
  const [avatarPreview, setAvatarPreview] = useState("0 0 265 544");
  const [selectedItemId, setSelectedItemId] = useState("hair1");
  const [itemsTitle, setItemsTitle] = useState("Skin Tone");
  const [isSavingItem, setIsSavingItem] = useState(false);
  const [avatar, setAvatar] = useState<Record<keyof IAvatar, IBodyItem>>(defaultAvatar);
  const [selectedColor, setSelectedColor] = useState(avatar.body.colors.colorScheme.main);
  const [isBackButtonPressed, setBackPressed] = useState(false);
  const [isDoneModalShown, setDoneModalShown] = useState(false);
  const flatListRef = useRef<FlatList | null>(null);
  const flatListColorRef = useRef<FlatList | null>(null);
  const scrollViewRef = useRef<ScrollView | null>(null);

  const backButtonHandler = useCallback(() => {
    if (!isBackButtonPressed) {
      if (!isDoneModalShown) {
        setBackPressed(true);
        onBackPressed();
        return true;
      }

      setDoneModalShown(false);
    }

    setBackPressed(false);
    return false;
  }, [setBackPressed, setDoneModalShown, isBackButtonPressed, isDoneModalShown, onBackPressed]);

  useBackHandler(backButtonHandler);

  const queryingAvatarItems = useMemo(() => category === "items", [category]);

  const { loading, data } = useQuery<Avatar>(GQL_QUERY_AVATAR, {
    variables: { bodyType: "neutral", partType: bodyItemType, colorSchemeIds: [] },
    fetchPolicy: "cache-and-network",
  });

  let avatarPartItems = [] as IBodyItem[];
  let avatarPartcolors = [] as Avatar_getAvatarColors[];

  // this should be refactored as it's bad practice to have side effects in a render
  if (loading) {
    avatarPartItems = [];
    avatarPartcolors = [];
  } else if (queryingAvatarItems) {
    if (data && data.listAvatarParts) {
      avatarPartItems = parseBodyParts(data.listAvatarParts);
      avatarPartItems.unshift({ bodyElements: [], partId: "emptyElement" });
      addExtraData(avatarPartItems);
    } else {
      avatarPartItems = [];
    }
  } else {
    if (data && data.getAvatarColors) {
      avatarPartcolors = data.getAvatarColors;
      addExtraData(avatarPartcolors);
    } else {
      avatarPartcolors = [];
    }
  }

  function setAvatarState(key: keyof IAvatar, category: Category, value: IBodyItem) {
    Logger.logMixpanelEvent("avatar_edit", {
      type: key,
      category,
      section: false,
      partId: value.partId,
      colorSchemeId: value?.colors?.colorSchemeId,
    });

    return setAvatar((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        ...value,
      },
    }));
  }

  const handleOnItemPress = async (
    newBodyItemType: AvatarPartType,
    newCategory: Category,
    bodyItem: IBodyItemCategory,
    newItemsTitle: string
  ) => {
    Logger.logMixpanelEvent("avatar_edit", {
      type: newBodyItemType,
      category: newCategory,
      section: true,
    });

    setBodyItemType(newBodyItemType);
    setCategory(newCategory);
    setItemsTitle(newItemsTitle);
    setIsSavingItem(newBodyItemType === null);

    switch (newBodyItemType) {
      case AvatarPartType.hair:
        setSelectedItemId(avatar.hair.partId);
        break;
      case AvatarPartType.facialHair:
        setSelectedItemId(avatar.facialHair.partId);
        break;
      case AvatarPartType.glasses:
        setSelectedItemId(avatar.glasses.partId);
        break;
    }

    if (newCategory === "colors") {
      switch (newBodyItemType) {
        case AvatarPartType.hair:
          setSelectedColor(avatar.hair?.colors?.colorScheme.main);
          break;
        case AvatarPartType.facialHair:
          setSelectedColor(avatar.facialHair?.colors?.colorScheme.main);
          break;
        case AvatarPartType.body:
          setSelectedColor(avatar.body.colors.colorScheme.main);
          break;
        case AvatarPartType.eyes:
          setSelectedColor(avatar.eyes.colors.colorScheme.main);
          break;
      }

      flatListColorRef?.current?.scrollToIndex({ index: 0, animated: false });
    } else {
      flatListRef?.current?.scrollToIndex({ index: 0, animated: false });
    }

    if (newBodyItemType === AvatarPartType.body) {
      setAvatarPreview("0 0 265 544");
    } else {
      setAvatarPreview("0 0 248 248");
    }

    if (!bodyItem.enableMiddleBarScrolling) {
      await scrollViewRef?.current?.scrollTo({ x: 0, animated: true });
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <GenericHeading
        leftIcon="BACK"
        heading={heading}
        onLeftIconPress={() => {
          setBackPressed(true);
          onBackPressed();
        }}
        onRightIconPress={() => {
          showDoneModal(() => updateUserAvatar(avatar), setBackPressed, setDoneModalShown);
          setDoneModalShown(true);
        }}
        rightIcon="Done"
        hideBorder={false}
      />
      <View style={styles.elementWrapper} testID={HEAD_TYPE(avatar.head.partId)}>
        <View
          style={bodyItemType === AvatarPartType.body ? styles.fullAvatarWrapper : styles.halfAvatarWrapper}
          testID={BUILDER_BODY([
            avatar.eyes.partId,
            avatar.hair.partId,
            avatar.facialHair.partId,
            avatar.glasses.partId,
          ])}
        >
          <BodyAvatar
            avatar={avatar}
            viewBox={avatarPreview}
            height={Style.SCALE_UP_AND_DOWN(221)}
            width={Style.SCALE_UP_AND_DOWN(248)}
          />
        </View>
        <View style={styles.separator} />
        <View style={styles.bodyElementsListWrapper}>
          <ScrollView
            contentContainerStyle={styles.contentBodyElementsList}
            style={styles.bodyElementsList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ref={scrollViewRef}
          >
            {bodyItems.map((bodyItem, i) => (
              <View key={bodyItem.id + i} style={{ borderWidth: 0, flex: 1 }}>
                <BodyItem
                  selected={bodyItemType === bodyItem.id || (!bodyItemType && bodyItem.isSavingItem)}
                  bodyItemType={bodyItem.id}
                  onlyColor={bodyItem.bodyItems.length === 1}
                  bodyCategory={bodyItem}
                  onItemPress={handleOnItemPress}
                />
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.separator} />
        <Text style={styles.itemsTitle}>{itemsTitle}</Text>

        <View style={{ flex: 1, justifyContent: "center" }}>
          {category === "colors" ? (
            <>
              {(bodyItemType === AvatarPartType.facialHair &&
                (!avatar.facialHair.partId || avatar.facialHair.partId === "emptyElement")) ||
              (bodyItemType === AvatarPartType.hair &&
                (!avatar.hair.partId || avatar.hair.partId === "emptyElement")) ? (
                <Text style={styles.noItemSelected} testID={NO_ITEM_SELECTED}>
                  No need to pick a {bodyItemType === AvatarPartType.facialHair ? "facial hair" : "hair"}
                  {"\n"}colour if you haven’t picked{"\n"}any{" "}
                  {bodyItemType === AvatarPartType.facialHair ? "facial hair" : "hair"}.
                </Text>
              ) : (
                <FlatList
                  key={"colour_flat_list"}
                  keyExtractor={(keyItem: any, index) =>
                    keyItem.partId ? `${index}${keyItem.partId}` : `${index}${keyItem.main}`
                  }
                  ref={flatListColorRef}
                  style={styles.flatListStyle}
                  contentContainerStyle={styles.flatListContainerStyle}
                  data={loading ? loadingColorData : avatarPartcolors}
                  numColumns={3}
                  renderItem={({ item }) => (
                    <ColorItem
                      bodyItemType={bodyItemType}
                      item={item}
                      setAvatar={setAvatarState}
                      avatar={avatar}
                      selectedColor={selectedColor}
                      setSelectedColor={setSelectedColor}
                    />
                  )}
                  columnWrapperStyle={styles.row}
                  showsVerticalScrollIndicator={false}
                  initialScrollIndex={0}
                />
              )}
            </>
          ) : category === "items" && !isSavingItem ? (
            <FlatList
              key={"items_flat_list"}
              keyExtractor={(keyItem, index) => `${index}${keyItem.partId}`}
              ref={flatListRef}
              style={styles.flatListStyle}
              contentContainerStyle={styles.flatListContainerStyle}
              data={loading ? loadingItemData : avatarPartItems}
              numColumns={3}
              renderItem={({ item, index }) => (
                <PartItem
                  selectedItemId={selectedItemId}
                  setSelectedItemId={setSelectedItemId}
                  bodyItemType={bodyItemType}
                  avatar={avatar}
                  item={item}
                  index={index}
                  setAvatar={setAvatarState}
                />
              )}
              columnWrapperStyle={styles.row}
              showsVerticalScrollIndicator={false}
              testID={AVATAR_BUILDER_LIST}
            />
          ) : (
            <View style={styles.buttonsSavingWrapper}>
              <Button
                type="Primary"
                onPress={() => {
                  showDoneModal(() => updateUserAvatar(avatar), setBackPressed, setDoneModalShown);
                  setDoneModalShown(true);
                }}
                label="Save Yumoji"
              />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

function showDoneModal(
  updateUserAvatar: () => void,
  setBackPressed: (value: boolean) => void,
  setDonePressed: (value: boolean) => void
) {
  Navigation.showModal({
    component: {
      id: MODALS.generic,
      name: MODALS.generic,
      passProps: {
        onPress: () => {
          Logger.logMixpanelEvent("avatar_save", { type: "saved" });
          updateUserAvatar();
        },
        isPrimaryOnePressOnly: true,
        heading: "All Set!",
        subheading: "Are you happy with your Yumoji? You can change your appearance later.",
        ctaLabel: "Yes",
        ctaLabelSecondary: "Keep Editing",
        onPressSecondary: () => {
          setBackPressed(false);
          setDonePressed(false);
          Navigation.dismissModal(MODALS.generic);
        },
      },
    },
  });
}

export default AvatarBuilder;
