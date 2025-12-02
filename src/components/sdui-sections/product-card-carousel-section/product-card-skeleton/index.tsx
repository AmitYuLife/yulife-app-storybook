import React from "react";
import { View } from "react-native";
import { Style, StyleSheet } from "@styles";
import { SkeletonLoading } from "@atoms";
import { WideCardSkeleton } from "./wide-card-skeleton";

export const ProductCardCarouselSkeleton = () => {
  return (
    <View style={styles.wrapper}>
      <SkeletonLoading style={styles.heading} />
      <View style={styles.cardList}>
        <WideCardSkeleton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Style.adjust(20),
    display: "flex",
  },
  heading: {
    marginStart: Style.adjust(12),
    width: Style.adjust(170),
    height: Style.adjust(24),
    borderRadius: Style.adjust(4),
  },
  cardList: {
    paddingVertical: Style.adjust(20),
  },
});
