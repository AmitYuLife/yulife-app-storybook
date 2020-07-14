import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { ITEM_WIDTH } from "../horizontal-scroller.styles";
import { StyleSheet, ViewStyle } from "react-native";

export const SideGradients = () => (
  <>
    <LinearGradient
      pointerEvents="none"
      colors={["rgba(255,255,255,1)", "rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
      style={[styles.gradient, styles.left]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
    />
    <LinearGradient
      pointerEvents="none"
      colors={["rgba(255,255,255,0)", "rgba(255,255,255,1)", "rgba(255,255,255,1)"]}
      style={[styles.gradient, styles.right]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
    />
  </>
);

const styles = StyleSheet.create({
  gradient: {
    height: "100%",
    width: ITEM_WIDTH,
    position: "absolute",
  } as ViewStyle,
  left: {
    left: 0,
  } as ViewStyle,
  right: {
    right: 0,
  } as ViewStyle,
});
