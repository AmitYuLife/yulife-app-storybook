import { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { View } from "react-native";
import { HealthSmokingStreakCarouselItem } from "@redux/health-smoking/health-smoking.types";
import { Colours, Style, StyleSheet } from "@styles";
import { FlashList } from "@shopify/flash-list";
import SmokingCarouselList from "./carousel/smoking-carousel-list";
import { ISmokingCarouselListItem } from "@organisms/smoking-carousel/carousel/smoking-carousel-list-item";

interface Props {
  streak: HealthSmokingStreakCarouselItem[];
  animationOffset?: number;
  scrollFrom?: number;
  scrollTo: number;
  showClaimButton?: boolean;
}

export const SmokingCarousel: FC<Props> = memo(
  ({ streak, animationOffset = 0, scrollFrom, scrollTo, showClaimButton = true }) => {
    const rewardListItems = useMemo(
      () =>
        streak.map((item, idx) => ({
          ...item,
          position: idx + 1,
          backgroundColour: item.backgroundColour ?? Colours.secondary.s100S3,
          showButton: showClaimButton,
          enableModal: !!item.tips?.length,
        })),
      [showClaimButton, streak]
    );
    const listRef = useRef<FlashList<ISmokingCarouselListItem>>(null);

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
        <SmokingCarouselList
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
