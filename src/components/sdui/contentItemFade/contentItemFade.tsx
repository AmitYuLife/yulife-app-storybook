import React, { memo, useMemo } from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { Colours, StyleSheet } from "@styles";
export const ContentItemFade = memo(() => {
  const { start, end, colors } = useMemo(() => {
    return {
      start: { x: 0, y: 0 },
      end: { x: 0, y: 1 },
      colors: [Colours.overlay.whiteTransparent, Colours.overlay.whiteSolid, Colours.overlay.whiteSolid],
    };
  }, []);

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <LinearGradient style={StyleSheet.absoluteFill} start={start} end={end} colors={colors} />
    </View>
  );
});
