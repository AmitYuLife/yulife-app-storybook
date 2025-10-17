import React, { forwardRef, memo, useCallback } from "react";
import { View } from "react-native";
import { FlatList } from "@atoms";
import { FlatList as RNFlatList } from "react-native";
import { Style, StyleSheet } from "@styles";
import { SMOKING_CAROUSEL_LIST } from "@ids";
import { VoidFunction } from "@utils";
import SmokingCarouselListItem, {
  ENTERPRISE_REWARD_ITEM_WIDTH,
  ENTERPRISE_REWARD_ITEM_HEIGHT,
  ISmokingCarouselListItem,
} from "./smoking-carousel-list-item";

export interface ISmokingCarouselList {
  items: ISmokingCarouselListItem[];
  onTouchStart?: VoidFunction;
  onScrollStart?: VoidFunction;
  onLoad?: () => void;
  initialScrollIndex?: number;
}

const SmokingCarouselList = forwardRef(
  (
    { items, onScrollStart, onTouchStart, onLoad, initialScrollIndex }: ISmokingCarouselList,
    forwardRefProp: React.MutableRefObject<RNFlatList<ISmokingCarouselListItem>>
  ) => {
    const renderItem = useCallback(({ item }: { item: ISmokingCarouselListItem }) => {
      return (
        <View style={styles.itemWrapper}>
          <SmokingCarouselListItem {...item} />
        </View>
      );
    }, []);

    return (
      <FlatList
        style={styles.wrapper}
        testID={SMOKING_CAROUSEL_LIST}
        forwardRef={forwardRefProp}
        onLayout={onLoad}
        horizontal={true}
        data={items}
        onScrollBeginDrag={onScrollStart}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        onTouchStart={onTouchStart}
        initialScrollIndex={initialScrollIndex}
        getItemLayout={getItemLayout}
        contentContainerStyle={styles.contentContainer}
      />
    );
  }
);

const getItemLayout = (_: unknown, index: number) => ({
  length: ENTERPRISE_REWARD_ITEM_WIDTH + Style.adjust(8),
  offset: (ENTERPRISE_REWARD_ITEM_WIDTH + Style.adjust(8)) * index,
  index,
});

const styles = StyleSheet.create({
  wrapper: {
    height: ENTERPRISE_REWARD_ITEM_HEIGHT,
  },
  itemWrapper: {
    marginHorizontal: Style.adjust(4),
  },
  contentContainer: {
    paddingHorizontal: Style.adjust(16),
  },
});

export default memo(SmokingCarouselList);
