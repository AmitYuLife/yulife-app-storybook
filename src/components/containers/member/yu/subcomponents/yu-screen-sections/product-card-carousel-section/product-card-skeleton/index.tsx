import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Colours, Style } from "@styles";
import { SkeletonLoading } from "@atoms";
import { TallCardSkeleton } from "./tall-card-skeleton";
import { SquareCardSkeleton } from "./square-card-skeleton";
import { WideCardSkeleton } from "./wide-card-skeleton";

interface IProps {
  cardCount?: number;
  showCta?: boolean;
}

export const ProductCardCarouselSkeleton = ({ cardCount = 1, showCta }: IProps) => {
  const cards = useMemo(() => {
    if (cardCount >= 3) {
      return (
        <>
          <View style={styles.cardWrapper}>
            <TallCardSkeleton />
          </View>
          <View style={styles.cardWrapper}>
            <SquareCardSkeleton />
            <SquareCardSkeleton />
          </View>
        </>
      );
    }

    if (cardCount === 2) {
      return (
        <>
          <View style={styles.cardWrapper}>
            <TallCardSkeleton />
          </View>
          <View style={styles.cardWrapper}>
            <TallCardSkeleton />
          </View>
        </>
      );
    }

    return (
      <View style={styles.cardWrapper}>
        <WideCardSkeleton />
      </View>
    );
  }, [cardCount]);

  return (
    <View style={styles.wrapper}>
      <SkeletonLoading style={styles.heading} />
      <View style={styles.cardList}>{cards}</View>
      {!showCta ? null : <SkeletonLoading style={styles.button} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Style.adjust(20),
    display: "flex",
  },
  heading: {
    marginLeft: Style.adjust(36),
    width: Style.adjust(170),
    height: Style.adjust(24),
    borderRadius: Style.adjust(4),
  },
  cardList: {
    paddingVertical: Style.adjust(12),
    paddingHorizontal: Style.adjust(16),
    flexDirection: "row",
  },
  cardWrapper: {
    display: "flex",
    gap: Style.adjust(16),
    padding: Style.adjust(8),
  },
  wideCard: {
    flexDirection: "row",
    borderRadius: Style.adjust(8),
    width: Style.DEVICE_WIDTH - Style.adjust(48),
    height: Style.adjust(170),
    borderColor: Colours.neutral.n150,
    borderWidth: 1,
  },
  button: {
    marginHorizontal: Style.adjust(24),
    marginBottom: Style.adjust(20),
    height: Style.adjust(32),
    borderRadius: Style.adjust(16),
  },
});
