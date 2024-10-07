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
  scrollFrom?: number;
  scrollTo: number;
  showClaimButton?: boolean;
}

export const SmokingCarousel: FC<Props> = memo(
  ({ streak, animationOffset = 0, scrollFrom, scrollTo, showClaimButton = true }) => {
    const rewardListItems = useMemo(
      () =>
        streak.map((item) => ({
          ...item,
          backgroundColour: item.backgroundColour ?? Colours.secondary.s100S3,
          showButton: showClaimButton,
          enableModal: false,
        })),
      [streak]
    );

    const listRef = useRef<FlashList<IBattlePassListItem>>(null);

    const [hasScrolled, setHasScrolled] = useState(false);
    const [hasUserTouched, setHasUserTouched] = useState(false);

    useEffect(() => {
      if (hasScrolled || hasUserTouched) {
        return;
      }

      setHasScrolled(true);

      setTimeout(() => {
        listRef.current?.scrollToIndex({
          index: scrollFrom ?? scrollTo,
          animated: false,
          viewOffset: Style.adjust(7) + animationOffset,
        });
        // it wont scroll without a slight delay first
      }, 100);

      if (Number.isInteger(scrollFrom)) {
        setTimeout(() => {
          listRef.current?.scrollToIndex({
            index: scrollTo,
            animated: true,
            viewOffset: Style.adjust(7) + animationOffset,
          });
          // a slight delay allows the start index to be set before scrolling to the current claim index
        }, 200);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listRef, hasUserTouched, scrollFrom, scrollTo]);

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
  }
);

const styles = StyleSheet.create({
  container: {
    paddingTop: Style.adjust(16),
  },
  contentContainer: {
    paddingHorizontal: Style.adjust(36),
  },
});
