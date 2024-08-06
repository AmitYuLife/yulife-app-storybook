import React, { forwardRef, memo, useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { BattlePassListItem } from "@organisms";
import {
  ENTERPRISE_REWARD_ITEM_WIDTH,
  IBattlePassListItem,
} from "@organisms/battle-pass-list-item/battle-pass-list-item";
import { FlashList } from "@shopify/flash-list";
import { Style } from "@styles";

export interface IBattlePassList {
  items: IBattlePassListItem[];
  // the maximum number of items that should be scrolled past to reach the current claim index
  maxItemsToScroll?: number;
  // the amount of horizontal offset to apply to the scroll animation
  animationOffset?: number;
}

const BattlePassList = forwardRef(
  (
    { items, maxItemsToScroll, animationOffset = 0 }: IBattlePassList,
    forwardRefProp: React.MutableRefObject<FlashList<IBattlePassListItem>>
  ) => {
    const listRef = useRef<FlashList<IBattlePassListItem>>(null);
    const currentClaimIndex = items.findIndex((reward) => reward.status === "completed" || reward.status === "pending");

    const [hasScrolled, setHasScrolled] = useState(false);
    const [hasUserTouched, setHasUserTouched] = useState(false);

    const scrollToReward = useCallback(() => {
      // TODO: remove this logic from this component, and use the forwardRef prop to scroll from the parent component
      if (hasScrolled || hasUserTouched) {
        return;
      }

      const focusedIndex = currentClaimIndex === -1 ? items.length - 1 : currentClaimIndex;

      setHasScrolled(true);

      if (Number.isInteger(maxItemsToScroll)) {
        const startIndex = focusedIndex - maxItemsToScroll;

        if (startIndex >= 0) {
          listRef.current?.scrollToIndex({
            index: focusedIndex,
            animated: false,
            viewOffset: Style.adjust(7) + animationOffset,
          });
        }
      }

      setTimeout(() => {
        if (maxItemsToScroll !== 0) {
          listRef.current?.scrollToIndex({
            index: focusedIndex,
            animated: true,
            viewOffset: Style.adjust(7) + animationOffset,
          });
        }
      }, 100); // a slight delay allows the start index to be set before scrolling to the current claim index
    }, [currentClaimIndex, listRef, hasUserTouched, animationOffset]);

    useEffect(() => {
      if (!forwardRefProp) {
        scrollToReward();
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentClaimIndex]);

    const renderItem = useCallback(({ item }: { item: IBattlePassListItem }) => {
      return (
        <View style={styles.itemWrapper}>
          <BattlePassListItem {...item} />
        </View>
      );
    }, []);

    const handleTouchStart = useCallback(() => {
      setHasUserTouched(true);
    }, []);

    return (
      <FlashList
        ref={forwardRefProp || listRef}
        horizontal={true}
        estimatedItemSize={ENTERPRISE_REWARD_ITEM_WIDTH}
        data={items}
        renderItem={renderItem}
        onBlankArea={scrollToReward}
        showsHorizontalScrollIndicator={false}
        onTouchStart={handleTouchStart}
      />
    );
  }
);

const styles = StyleSheet.create({
  itemWrapper: {
    marginHorizontal: Style.adjust(4),
  },
});

export default memo(BattlePassList);
