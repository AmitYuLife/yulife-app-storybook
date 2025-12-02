import React from "react";
import { View } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import { Colours, Style, StyleSheet } from "@styles";
import { SkeletonLoading, useLoadingAnimation } from "@atoms";
import Animated from "react-native-reanimated";

export const TallCardSkeleton = () => {
  const loadingAnimation = useLoadingAnimation();

  return (
    <View style={styles.card}>
      <View style={styles.cardBanner}>
        <Animated.View style={[styles.illustration, loadingAnimation]}>
          <Svg width={CARD_WIDTH} height={ILLUSTRATION_HEIGHT} viewBox="0 0 156 108">
            <Ellipse
              cx="78.3533"
              cy="27.6464"
              rx="103.501"
              ry="57.5724"
              transform="rotate(-0.471266 78.3533 27.6464)"
              fill={Colours.metallic.m100}
            />
          </Svg>
        </Animated.View>
        <View style={styles.bannerContent}>
          <SkeletonLoading style={styles.banner} />
          <SkeletonLoading style={styles.productName} />
        </View>
      </View>
      <View style={styles.cardBody}>
        <SkeletonLoading style={styles.title1} />
        <SkeletonLoading style={styles.title2} />
        <SkeletonLoading style={styles.body1} />
        <SkeletonLoading style={styles.body2} />
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

const CARD_WIDTH = Style.DEVICE_WIDTH / 2 - Style.adjust(32);
const ILLUSTRATION_HEIGHT = (CARD_WIDTH / 156) * 108;

const styles = StyleSheet.create({
  card: {
    borderColor: Colours.neutral.n150,
    borderWidth: 1,
    borderRadius: Style.adjust(8),
    backgroundColor: Colours.neutral.white,
    width: CARD_WIDTH,
    height: Style.adjust(352),
  },
  cardBanner: {
    justifyContent: "space-between",
  },
  illustration: {
    borderTopLeftRadius: Style.adjust(8),
    borderTopEndRadius: Style.adjust(8),
    overflow: "hidden",
  },
  bannerContent: {
    paddingHorizontal: Style.adjust(16),
  },
  banner: {
    width: Style.adjust(28),
    height: Style.adjust(14),
    borderRadius: 0,
  },
  productName: {
    marginTop: Style.adjust(8),
    width: Style.adjust(80),
    height: Style.adjust(10),
    borderRadius: Style.adjust(4),
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingTop: Style.adjust(18),
    paddingHorizontal: Style.adjust(16),
  },
  title1: {
    marginTop: Style.adjust(4),
    width: Style.adjust(90),
    height: Style.adjust(14),
    borderRadius: Style.adjust(4),
  },
  title2: {
    marginTop: Style.adjust(4),
    width: Style.adjust(120),
    height: Style.adjust(14),
    borderRadius: Style.adjust(4),
  },
  body1: {
    marginTop: Style.adjust(16),
    width: Style.adjust(100),
    height: Style.adjust(12),
    borderRadius: Style.adjust(4),
  },
  body2: {
    marginTop: Style.adjust(4),
    width: Style.adjust(80),
    height: Style.adjust(12),
    borderRadius: Style.adjust(4),
  },
  footer: {
    paddingHorizontal: Style.adjust(10),
    paddingBottom: Style.adjust(2),
  },
  ctaWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Style.adjust(8),
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
