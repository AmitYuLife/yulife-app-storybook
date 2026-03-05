import React, { memo, useMemo } from "react";
import { View, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "@modules/themes/hooks/useTheme";
import { Colours, StyleSheet } from "@styles";
import { ITEM_HEIGHT } from "../scroll-picker.styles";

export const Overlays = memo(() => {
  const { theme } = useTheme();

  const highlighterStyle = useMemo(
    () => ({
      ...styles.highlighter,
      borderColor: theme.colors.primary.p600,
      backgroundColor: `${theme.colors.primary.p600}22`,
    }),
    [theme]
  );

  return (
    <View style={styles.wrapper} pointerEvents="box-none">
      <View pointerEvents="none" style={highlighterStyle} />
      <LinearGradient
        pointerEvents="none"
        colors={[Colours.overlay.whiteSolid, Colours.overlay.whiteTransparent]}
        style={[styles.whiteFade, styles.top]}
      />
      <LinearGradient
        pointerEvents="none"
        colors={[Colours.overlay.whiteTransparent, Colours.overlay.whiteSolid]}
        style={[styles.whiteFade, styles.bottom]}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  whiteFade: {
    position: "absolute",
    start: 0,
    end: 0,
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
    height: ITEM_HEIGHT,
    width: "100%",
    position: "absolute",
    top: ITEM_HEIGHT,
  } as ViewStyle,
});
