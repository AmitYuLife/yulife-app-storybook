import React from "react";
import { Animated, ViewStyle } from "react-native";
import { Colours, StyleSheet } from "@styles";

export const ColouredUnderline = ({ scaleX }: { scaleX: Animated.Value }) => {
  return <Animated.View style={[styles.colouredUnderline, { transform: [{ scaleX }] }]} />;
};

export const BaseUnderline = ({ color }: { color: string }) => (
  <Animated.View
    style={StyleSheet.flatten([styles.baseUnderline, { backgroundColor: color || Colours.neutral.n300 }])}
  />
);

const styles = StyleSheet.create({
  colouredUnderline: {
    position: "absolute",
    backgroundColor: Colours.darkHotPink,
    bottom: 0,
    width: "1%",
    height: 2,
    left: "50%",
  },
  baseUnderline: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 2,
    borderRadius: 999,
    overflow: "hidden",
  } as ViewStyle,
});
