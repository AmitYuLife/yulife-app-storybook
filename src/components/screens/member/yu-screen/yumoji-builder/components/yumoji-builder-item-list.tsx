import React, { useCallback, memo, useRef, FC, useEffect, useMemo } from "react";
import { View, StyleSheet, ViewStyle, FlatList } from "react-native";
import { Colours, Style } from "@styles";
import { TextTemplate } from "@atoms";
import {
  GetYumojiBuilderInitialParts_getYumojiBuilderInitialParts as YumojiBuilderInitialParts,
  GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory as YumojiBuilderItemsForCategory,
} from "@graphql/_core/schema";
import { loadingItemData } from "../../avatar-builder/avatar-builder.helper";
import { ItemListItems, YumojiItem } from "./yumoji-item";
import { YumojiPartStatus } from "@graphql/_core/schema/globalTypes";
import { showGenericModal } from "@navigation/utils";

export interface IItemList extends YumojiBuilderItemsForCategory {
  items: ItemListItems[];
  loading: boolean;
}
interface IProps {
  itemList: IItemList;
  selectedCategoryId: string;
  updateUserAvatar: (parts: YumojiBuilderInitialParts[]) => void;
  emptyMessage: string;
}

const YumojiBuilderItemList: FC<IProps> = ({ itemList, updateUserAvatar, selectedCategoryId, emptyMessage }) => {
  const flatListRef = useRef<FlatList | null>(null);

  useEffect(() => {
    if (itemList.items.length > 0) {
      flatListRef?.current?.scrollToOffset({ offset: 0, animated: false });
    }
  }, [selectedCategoryId]);

  const onItemPress = useCallback(
    (item: ItemListItems) => {
      if (item.status === YumojiPartStatus.unavailable) {
        showGenericModal(
          item?.modal?.title,
          item?.modal?.message,
          item?.modal?.cta ? () => null : null,
          item?.modal?.ctaText,
          "Close"
        );
        return;
      }

      updateUserAvatar(item.parts);
    },
    [updateUserAvatar]
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
            key={"items_flat_list"}
            keyExtractor={(keyItem, index) => `${index}${keyItem.partId}`}
            ref={flatListRef}
            style={styles.bodyElementsList}
            contentContainerStyle={styles.contentContainer}
            data={itemList.loading ? loadingItemData : itemList.items}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            initialScrollIndex={0}
            renderItem={({ item }) => <YumojiItem loading={itemList.loading} item={item} onItemPress={onItemPress} />}
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
    marginLeft: Style.adjust(8),
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
