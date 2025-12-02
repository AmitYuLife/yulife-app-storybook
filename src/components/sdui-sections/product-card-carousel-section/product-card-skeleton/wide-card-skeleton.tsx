import React from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import Svg, { Ellipse } from "react-native-svg";
import { Colours, Style, StyleSheet } from "@styles";
import { SkeletonLoading, useLoadingAnimation } from "@atoms";

export const WideCardSkeleton = () => {
  const loadingAnimation = useLoadingAnimation();

  return (
    <View style={styles.card}>
      <View style={styles.cardBody}>
        <View>
          <SkeletonLoading style={styles.banner} />
          <SkeletonLoading style={styles.productName} />
          <SkeletonLoading style={styles.title1} />
          <SkeletonLoading style={styles.title2} />
        </View>
        <SkeletonLoading style={styles.body1} />
        <SkeletonLoading style={styles.body2} />
      </View>
      <View style={styles.cardBanner}>
        <Animated.View style={[styles.illustration, loadingAnimation]}>
          <Svg width={Style.adjust(160)} height={Style.adjust(108)} viewBox="0 0 160 108" fill="none">
            <Ellipse
              cx="106.918"
              cy="30.4874"
              rx="98.1132"
              ry="57.5724"
              transform="rotate(19.9708 106.918 30.4874)"
              fill={Colours.metallic.m100}
            />
          </Svg>
        </Animated.View>
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
    flexDirection: "row",
    borderColor: Colours.neutral.n150,
    borderWidth: 1,
    borderRadius: Style.adjust(8),
    backgroundColor: Colours.neutral.white,
    width: Style.DEVICE_WIDTH - Style.adjust(48),
    height: Style.adjust(170),
  },
  cardBody: {
    paddingTop: Style.adjust(16),
    paddingStart: Style.adjust(16),
    paddingBottom: Style.adjust(12),
    flex: 1,
    flexGrow: 1,
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
  title1: {
    marginTop: Style.adjust(16),
    width: Style.adjust(160),
    height: Style.adjust(14),
    borderRadius: Style.adjust(4),
  },
  title2: {
    marginTop: Style.adjust(8),
    width: Style.adjust(80),
    height: Style.adjust(14),
    borderRadius: Style.adjust(4),
  },
  body1: {
    marginTop: "auto",
    width: Style.adjust(160),
    height: Style.adjust(12),
    borderRadius: Style.adjust(4),
  },
  body2: {
    marginTop: Style.adjust(4),
    marginBottom: Style.adjust(16),
    width: Style.adjust(60),
    height: Style.adjust(12),
    borderRadius: Style.adjust(4),
  },
  cardBanner: {
    width: Style.adjust(160),
    justifyContent: "space-between",
  },
  illustration: {
    alignSelf: "flex-end",
    borderTopRightRadius: Style.adjust(8),
    overflow: "hidden",
  },
  ctaWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: Style.adjust(16),
    gap: Style.adjust(16),
  },
  cta: {
    width: Style.adjust(70),
    height: Style.adjust(12),
    borderRadius: Style.adjust(4),
  },
  arrow: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    borderRadius: Style.adjust(4),
  },
});
