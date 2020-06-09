import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "../avatar-builder.styles";
import { BodyItemSVG } from "../../svg/body";
import { NoneBodyItem } from "../../svg/body-items";
import { IBodyItem } from "@redux/avatar/avatar.reducer";
import { IAvatar, Category } from "../avatar.types";
import { AvatarPartType } from "@graphql/_core/schema/globalTypes";

interface Props {
  item: any;
  index: number;
  setAvatar: (key: keyof IAvatar, category: Category, item: IBodyItem) => void;
  avatar: IAvatar;
  setSelectedItemId: (id: string) => void;
  selectedItemId: string;
  bodyItemType: AvatarPartType;
}

function PartItem(props: Props) {
  const { item, index, setAvatar, avatar, bodyItemType, setSelectedItemId, selectedItemId } = props;
  const { hair, facialHair, glasses } = avatar;

  const isSelectedItem = item.partId === selectedItemId || (item.partId === "emptyElement" && !selectedItemId);

  function handlePress() {
    setSelectedItemId(item.partId);

    switch (bodyItemType) {
      case "hair":
        return setAvatar("hair", "items", {
          bodyElements: item.bodyElements,
          partId: item.partId,
          colors: hair.colors,
        });
      case "facialHair":
        return setAvatar("facialHair", "items", {
          bodyElements: item.bodyElements,
          partId: item.partId,
          colors: facialHair.colors?.colorSchemeId ? facialHair.colors : item.colors?.default,
        });
      case "glasses":
        return setAvatar("glasses", "items", {
          bodyElements: item.bodyElements,
          partId: item.partId,
          colors: glasses.colors,
        });
      default:
        return;
    }
  }

  // FIXME: Workaround to align elements to the left
  if (item.extra) {
    return (
      <View style={styles.itemColorWrapper}>
        <View style={styles.itemColor} />
      </View>
    );
  }

  return (
    <TouchableOpacity key={index} onPress={handlePress}>
      <View style={isSelectedItem ? styles.itemSelectedColorWrapper : styles.itemColorWrapper}>
        {item.bodyElements ? (
          item.bodyElements.length > 0 ? (
            <BodyItemSVG
              item={{
                previewViewBox: item.previewViewBox ? item.previewViewBox : null,
                bodyElements: item.bodyElements,
                colors: item.colors ? item.colors[0] : {},
                height: item.height,
                width: item.width,
                partId: item.partId,
                defaultColor: item.colors?.default?.colorScheme,
              }}
            />
          ) : (
            <NoneBodyItem selected={isSelectedItem} />
          )
        ) : (
          <View style={styles.emptyItemState} />
        )}
      </View>
    </TouchableOpacity>
  );
}

export default PartItem;
