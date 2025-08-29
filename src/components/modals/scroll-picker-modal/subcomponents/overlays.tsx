import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Colours, StyleSheet } from "@styles";
import { ITEM_HEIGHT } from "../scroll-picker.styles";

export const Overlays = memo(() => (
  <View style={styles.wrapper} pointerEvents="box-none">
    <View pointerEvents="none" style={styles.highlighter} />
    <LinearGradient
      pointerEvents="none"
      colors={["rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
      style={[styles.whiteFade, styles.top]}
    />
    <LinearGradient
      pointerEvents="none"
      colors={["rgba(255,255,255,0)", "rgba(255,255,255,1)"]}
      style={[styles.whiteFade, styles.bottom]}
    />
  </View>
));

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  whiteFade: {
    position: "absolute",
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
    flex: 1,
  } as ViewStyle,
  top: {
    top: 0,
  } as ViewStyle,
  bottom: {
    bottom: 0,
  } as ViewStyle,
  highlighter: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colours.primary.p600,
    backgroundColor: "#E30D7622",
    height: ITEM_HEIGHT,
    width: "100%",
    position: "absolute",
    top: ITEM_HEIGHT,
  } as ViewStyle,
});
