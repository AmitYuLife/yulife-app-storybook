import React, { forwardRef, memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { ContentStyle, FlashList } from "@shopify/flash-list";
import { Style } from "@styles";
import { SMOKING_CAROUSEL_LIST } from "@ids";
import { VoidFunction } from "@utils";
import SmokingCarouselListItem, {
  ENTERPRISE_REWARD_ITEM_WIDTH,
  ISmokingCarouselListItem,
} from "./smoking-carousel-list-item";

export interface ISmokingCarouselList {
  items: ISmokingCarouselListItem[];
  contentContainerStyle?: ContentStyle;
  onBlankArea?: VoidFunction;
  onTouchStart?: VoidFunction;
  onScrollStart?: VoidFunction;
  onLoad?: () => void;
  initialScrollIndex?: number;
}

const SmokingCarouselList = forwardRef(
  (
    {
      items,
      contentContainerStyle,
      onScrollStart,
      onBlankArea,
      onTouchStart,
      onLoad,
      initialScrollIndex,
    }: ISmokingCarouselList,
    forwardRefProp: React.MutableRefObject<FlashList<ISmokingCarouselListItem>>
  ) => {
    const renderItem = useCallback(({ item }: { item: ISmokingCarouselListItem }) => {
      return (
        <View style={styles.itemWrapper}>
          <SmokingCarouselListItem {...item} />
        </View>
      );
    }, []);

    return (
      <FlashList
        testID={SMOKING_CAROUSEL_LIST}
        ref={forwardRefProp}
        horizontal={true}
        estimatedItemSize={ENTERPRISE_REWARD_ITEM_WIDTH}
        data={items}
        onScrollBeginDrag={onScrollStart}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        onBlankArea={onBlankArea}
        onTouchStart={onTouchStart}
        contentContainerStyle={contentContainerStyle}
        onLoad={onLoad}
        initialScrollIndex={initialScrollIndex}
      />
    );
  }
);

const styles = StyleSheet.create({
  itemWrapper: {
    marginHorizontal: Style.adjust(4),
  },
});

export default memo(SmokingCarouselList);
