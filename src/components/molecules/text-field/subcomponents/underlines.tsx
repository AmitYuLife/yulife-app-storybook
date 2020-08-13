import React from "react";
import { Animated, StyleSheet, ViewStyle } from "react-native";
import { Colours } from "@styles";

export const ColouredUnderline = ({ scaleX }: { scaleX: Animated.Value }) => {
  return <Animated.View style={[styles.colouredUnderline, { transform: [{ scaleX }] }]} />;
};

export const BaseUnderline = () => <Animated.View style={styles.baseUnderline} />;

const styles = StyleSheet.create({
  colouredUnderline: {
    position: "absolute",
    backgroundColor: Colours.darkHotPink,
    bottom: 0,
    width: "1%",
    height: 1,
    left: "50%",
  },
  baseUnderline: {
    position: "absolute",
    backgroundColor: "gray",
    bottom: 0,
    width: "100%",
    height: 1,
  } as ViewStyle,
});
