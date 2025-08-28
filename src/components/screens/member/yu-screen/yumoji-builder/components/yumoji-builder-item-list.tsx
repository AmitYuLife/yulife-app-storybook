import React, { useCallback, memo, useRef, FC, useEffect, useMemo } from "react";
import { View, StyleSheet, ViewStyle, FlatList } from "react-native";
import { Navigation } from "@navigation/main";
import { Colours, Style } from "@styles";
import { TextTemplate } from "@atoms";
import { itemHeight, ItemListItems, YumojiItem } from "./yumoji-item";
import { AVATAR_BUILDER_LIST } from "@ids";
import { GetYumojiBuilderItemsForCategoryQuery, YumojiPartStatus } from "@graphql/__generated";
import { LockedModal } from "./locked-modal";

type YumojiBuilderItemsForCategory = GetYumojiBuilderItemsForCategoryQuery["getYumojiBuilderItemsForCategory"];
type YumojiBuilderParts = YumojiBuilderItemsForCategory["items"][number]["parts"][number];

export type IItemList = YumojiBuilderItemsForCategory & {
  items: ItemListItems[];
  loading: boolean;
};

interface IProps {
  itemList: IItemList;
  selectedCategoryId: string;
  updateUserAvatar: (payload: YumojiBuilderParts[]) => void;
  emptyMessage: string;
}

const keyExtractor = (keyItem: ItemListItems, index: number) => {
  const { partId, colorSchemeId } = keyItem?.parts?.[0] ?? {};
  if (!partId && !colorSchemeId) {
    return index.toString();
  }

  return `${partId}_${colorSchemeId}`;
};

const NUM_COLUMNS = 3;

const getItemLayout = (_: unknown, index: number) => ({
  length: itemHeight,
  offset: itemHeight * Math.floor(index / NUM_COLUMNS),
  index,
});

const loadingItemData = Array(12)
  .fill(0)
  .map((_, index) => ({ bodyElements: null, parts: [{ partId: `loading_item_${index}` }] }));

const YumojiBuilderItemList: FC<IProps> = ({ itemList, updateUserAvatar, selectedCategoryId, emptyMessage }) => {
  const flatListRef = useRef<FlatList | null>(null);

  useEffect(() => {
    if (itemList.items.length > 0) {
      flatListRef?.current?.scrollToOffset({ offset: 0, animated: false });
    }
  }, [selectedCategoryId]);

  const onItemPress = useCallback(
    (item: ItemListItems) => {
      if (item.status === YumojiPartStatus.Available) {
        updateUserAvatar(item.parts);
      }

      if (item?.modal) {
        return Navigation.showOverlayWithChild({ children: <LockedModal item={item} /> });
      }
    },
    [updateUserAvatar]
  );

  const renderItem = useCallback(
    ({ item }: { item: ItemListItems }) => (
      <YumojiItem loading={itemList.loading} item={item} onItemPress={onItemPress} />
    ),
    [itemList.loading, onItemPress]
  );

  const listHeaderComponent = useMemo(
    () => (
      <View style={styles.title}>
        {!itemList.title ? null : <TextTemplate type="b1b">{itemList?.title}</TextTemplate>}
      </View>
    ),
    [itemList]
  );

  return (
    <View style={styles.wrapper}>
      {emptyMessage ? (
        <View style={styles.emptyMessage}>
          <TextTemplate type="b2" textAlign="center">
            {emptyMessage}
          </TextTemplate>
        </View>
      ) : (
        <View style={styles.itemList}>
          <FlatList
            ListHeaderComponent={listHeaderComponent}
            key={`items_flat_list_${selectedCategoryId}`}
            keyExtractor={keyExtractor}
            ref={flatListRef}
            style={styles.bodyElementsList}
            contentContainerStyle={styles.contentContainer}
            data={itemList.loading ? loadingItemData : itemList.items}
            numColumns={NUM_COLUMNS}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={true}
            initialNumToRender={9}
            windowSize={15}
            initialScrollIndex={0}
            getItemLayout={getItemLayout}
            renderItem={renderItem}
            testID={AVATAR_BUILDER_LIST}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    backgroundColor: Colours.neutral.n50,
    flexGrow: 1,
    flex: 1,
  } as ViewStyle,
  bodyElementsList: {
    width: "100%",
    padding: Style.adjust(8),
  } as ViewStyle,
  title: {
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(8),
    marginStart: Style.adjust(8),
    minHeight: Style.adjust(24),
  },
  itemList: {
    flex: 1,
  } as ViewStyle,
  contentContainer: {
    paddingBottom: Style.adjust(30),
  },
  emptyMessage: {
    alignItems: "center",
    flex: 1,
    marginTop: Style.adjust(40),
    padding: Style.adjust(40),
  } as ViewStyle,
});

export default memo(YumojiBuilderItemList);
