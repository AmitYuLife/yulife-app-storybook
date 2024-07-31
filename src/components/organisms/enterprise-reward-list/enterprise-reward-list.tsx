import React, { forwardRef, memo, useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { EnterpriseRewardItem } from "@organisms";
import {
  ENTERPRISE_REWARD_ITEM_WIDTH,
  IEnterpriseRewardItem,
} from "@organisms/enterprise-reward-item/enterprise-reward-item";
import { FlashList } from "@shopify/flash-list";
import { Style } from "@styles";

export interface IEnterpriseRewardList {
  items: IEnterpriseRewardItem[];

  // the maximum number of items that should be scrolled past to reach the current claim index
  maxItemsToScroll?: number;

  // the amount of horizontal offset to apply to the scroll animation
  animationOffset?: number;
}

const EnterpriseRewardList = forwardRef(
  (
    { items, maxItemsToScroll, animationOffset = 0 }: IEnterpriseRewardList,
    forwardRefProp: React.MutableRefObject<FlashList<IEnterpriseRewardItem>>
  ) => {
    const listRef = useRef<FlashList<IEnterpriseRewardItem>>(null);
    const currentClaimIndex = items.findIndex((reward) => reward.status === "completed" || reward.status === "pending");

    const [hasScrolled, setHasScrolled] = useState(false);
    const [hasUserTouched, setHasUserTouched] = useState(false);

    const scrollToReward = useCallback(() => {
      if (hasScrolled || hasUserTouched || currentClaimIndex === -1) {
        return;
      }

      setHasScrolled(true);

      if (Number.isInteger(maxItemsToScroll)) {
        const startIndex = currentClaimIndex - maxItemsToScroll;

        if (startIndex >= 0) {
          listRef.current?.scrollToIndex({
            index: startIndex,
            animated: false,
            viewOffset: Style.adjust(7) + animationOffset,
          });
        }
      }

      setTimeout(() => {
        if (maxItemsToScroll !== 0) {
          listRef.current?.scrollToIndex({
            index: currentClaimIndex,
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

    const renderItem = useCallback(({ item }: { item: IEnterpriseRewardItem }) => {
      return (
        <View style={styles.itemWrapper}>
          <EnterpriseRewardItem {...item} />
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
        contentContainerStyle={styles.wrapper}
        onTouchStart={handleTouchStart}
      />
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Style.adjust(8),
  },
  itemWrapper: {
    marginHorizontal: Style.adjust(4),
  },
});

export default memo(EnterpriseRewardList);
