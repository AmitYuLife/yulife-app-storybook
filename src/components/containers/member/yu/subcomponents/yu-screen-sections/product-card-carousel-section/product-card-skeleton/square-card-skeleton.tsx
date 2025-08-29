import React from "react";
import { View } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { SkeletonLoading, useLoadingAnimation } from "@atoms";
import Svg, { Ellipse } from "react-native-svg";
import Animated from "react-native-reanimated";

export const SquareCardSkeleton = () => {
  const loadingAnimation = useLoadingAnimation();

  return (
    <View style={styles.card}>
      <View style={styles.cardBanner}>
        <Animated.View style={[styles.illustration, loadingAnimation]}>
          <Svg width={Style.adjust(64)} height={Style.adjust(72)} viewBox="0 0 64 72" fill="none">
            <Ellipse
              cx="21.274"
              cy="21.3075"
              rx="38.9692"
              ry="42.4793"
              transform="rotate(17.1725 21.274 21.3075)"
              fill={Colours.metallic.m100}
            />
          </Svg>
        </Animated.View>
        <View style={styles.bannerContent}>
          <SkeletonLoading style={styles.banner} />
          <SkeletonLoading style={styles.productName1} />
          <SkeletonLoading style={styles.productName2} />
        </View>
      </View>
      <View style={styles.cardBody}>
        <SkeletonLoading style={styles.title1} />
        <SkeletonLoading style={styles.title2} />
      </View>
      <View style={styles.footer}>
        <View style={styles.ctaWrapper}>
          <SkeletonLoading style={styles.cta} />
          <SkeletonLoading style={styles.arrow} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: Colours.neutral.n150,
    borderWidth: 1,
    borderRadius: Style.adjust(8),
    backgroundColor: Colours.neutral.white,
    width: Style.DEVICE_WIDTH / 2 - Style.adjust(32),
    height: Style.adjust(168),
  },
  cardBanner: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  illustration: {
    borderTopLeftRadius: Style.adjust(8),
    overflow: "hidden",
  },
  bannerContent: {
    flex: 1,
    paddingTop: Style.adjust(16),
    paddingHorizontal: Style.adjust(16),
  },
  banner: {
    width: Style.adjust(28),
    height: Style.adjust(14),
    borderRadius: 0,
  },
  productName1: {
    marginTop: Style.adjust(5),
    width: Style.adjust(32),
    height: Style.adjust(10),
    borderRadius: Style.adjust(4),
  },
  productName2: {
    marginTop: Style.adjust(5),
    width: Style.adjust(46),
    height: Style.adjust(10),
    borderRadius: Style.adjust(4),
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: Style.adjust(16),
  },
  title1: {
    marginTop: Style.adjust(4),
    width: Style.adjust(100),
    height: Style.adjust(12),
    borderRadius: Style.adjust(4),
  },
  title2: {
    marginTop: Style.adjust(4),
    width: Style.adjust(60),
    height: Style.adjust(12),
    borderRadius: Style.adjust(4),
  },
  footer: {
    paddingHorizontal: Style.adjust(10),
    paddingBottom: Style.adjust(6),
  },
  ctaWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Style.adjust(6),
    paddingBottom: Style.adjust(14),
  },
  cta: {
    width: Style.adjust(60),
    height: Style.adjust(12),
    borderRadius: Style.adjust(4),
  },
  arrow: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    borderRadius: Style.adjust(4),
  },
});
