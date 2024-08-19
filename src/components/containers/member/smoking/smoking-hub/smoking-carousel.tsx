import { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { MobileGameEnterpriseGoalReward } from "@redux/health-smoking/health-smoking.types";
import { BattlePassList } from "@organisms";
import { Colours, Style } from "@styles";
import { IBattlePassListItem } from "@organisms/battle-pass-list-item/battle-pass-list-item";
import { FlashList } from "@shopify/flash-list";

interface Props {
  streak: MobileGameEnterpriseGoalReward[];
  animationOffset?: number;
  maxItemsToScroll?: number;
}

export const SmokingCarousel: FC<Props> = memo(({ streak, animationOffset = 0, maxItemsToScroll = 1 }) => {
  const rewardListItems = useMemo(
    () =>
      streak.map((item) => ({
        ...item,
        backgroundColour: item.backgroundColour ?? Colours.secondary.s100S3,
        icon: {
          uri: item.icon?.uri,
          width: Style.adjust(64),
          height: Style.adjust(64),
        },
      })),
    [streak]
  );

  const listRef = useRef<FlashList<IBattlePassListItem>>(null);
  const currentClaimIndex = rewardListItems.findIndex(
    (reward) => reward.status === "completed" || reward.status === "pending"
  );

  const [hasScrolled, setHasScrolled] = useState(false);
  const [hasUserTouched, setHasUserTouched] = useState(false);

  useEffect(() => {
    if (hasScrolled || hasUserTouched) {
      return;
    }

    const focusedIndex = currentClaimIndex === -1 ? rewardListItems.length - 1 : currentClaimIndex;

    setHasScrolled(true);

    if (Number.isInteger(maxItemsToScroll)) {
      const startIndex = focusedIndex - maxItemsToScroll;

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
          index: focusedIndex,
          animated: true,
          viewOffset: Style.adjust(7) + animationOffset,
        });
      }
    }, 100); // a slight delay allows the start index to be set before scrolling to the current claim index
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentClaimIndex, listRef, hasUserTouched, animationOffset]);

  const onTouchStart = useCallback(() => setHasUserTouched(true), []);

  return (
    <View style={styles.container}>
      <BattlePassList
        contentContainerStyle={styles.contentContainer}
        items={rewardListItems}
        ref={listRef}
        onTouchStart={onTouchStart}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingTop: Style.adjust(16),
  },
  contentContainer: {
    paddingHorizontal: Style.adjust(36),
  },
});
