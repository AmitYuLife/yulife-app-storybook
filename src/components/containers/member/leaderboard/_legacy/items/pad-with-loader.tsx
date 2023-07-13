import React, { memo } from "react";
import { StyleSheet, ViewStyle, ActivityIndicator, Animated, TextStyle, ImageStyle } from "react-native";
import { Text } from "@atoms";
import { View } from "react-native-animatable";
import { t } from "@locale";

export interface IPadWithLoaderProps {
  height: number;
  isRefetching: boolean;
  scrollValue: Animated.Value;
}

const _PadWithLoader = ({ height, isRefetching, scrollValue }: IPadWithLoaderProps) => {
  if (isRefetching) {
    return (
      <View style={[styles.wrapper, { height }]}>
        <ActivityIndicator />
      </View>
    );
  }

  const rotate = scrollValue.interpolate({
    inputRange: [-120, 0],
    outputRange: ["180deg", "0deg"],
    extrapolate: "clamp",
  });

  return (
    <View style={[styles.wrapper, { height }]}>
      <View style={styles.row}>
        <Animated.Image
          source={require("@assets/leaderboards/arrow-down.png")}
          style={[styles.image, { transform: [{ rotate }] }]}
        />
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{t("screens.leaderboard.pad.title")}</Text>
        </View>
      </View>
    </View>
  );
};

export const PadWithLoader = memo(_PadWithLoader);

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 32,
  } as ViewStyle,
  row: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  image: {} as ImageStyle,
  textWrapper: {
    marginLeft: 16,
    marginTop: 4,
  } as ViewStyle,
  text: {
    letterSpacing: 1,
    fontSize: 12,
  } as TextStyle,
});
