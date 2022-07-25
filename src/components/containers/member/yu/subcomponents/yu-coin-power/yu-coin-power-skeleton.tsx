import React, { memo } from "react";
import { ImageStyle, StyleSheet, View, ViewStyle } from "react-native";
import { SkeletonLoading } from "@atoms";
import { Style } from "@styles";

export const YuCoinPowerSkeleton = memo(() => {
  return (
    <View style={styles.ycWrapperOuter}>
      <SkeletonLoading style={styles.ycPowerBg} />
    </View>
  );
});

const styles = StyleSheet.create({
  ycWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: Style.adjust(10),
    right: Style.adjust(72),
  } as ViewStyle,
  ycWrapperOuter: {
    alignItems: "flex-end",
  } as ViewStyle,
  ycPowerBg: {
    width: Style.adjust(182),
    height: Style.adjust(66),
  } as ImageStyle,
});
