import React, { memo, useMemo } from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { StyleSheet } from "@styles";
export const ContentItemFade = memo(() => {
  const { start, end, colors } = useMemo(() => {
    return {
      start: { x: 0, y: 0 },
      end: { x: 0, y: 1 },
      colors: ["rgba(255,255,255,0)", "rgba(255,255,255,1)", "rgba(255,255,255,1)"],
    };
  }, []);

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <LinearGradient style={StyleSheet.absoluteFill} start={start} end={end} colors={colors} />
    </View>
  );
});
