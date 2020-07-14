import React, { memo } from "react";
import { View, StyleSheet, TextStyle, ViewStyle, Platform } from "react-native";
import {
  HIGHLIGHT_RADIUS,
  HALF_SCREEN,
  HIGHLIGHT_CIRCUMFERENCE,
  PUSH_LEFT_TO_CENTER,
} from "../horizontal-scroller.styles";
import { Text } from "@atoms";
import { Style } from "@styles";

interface Props {
  label: string;
}

export const Highlight = memo(() => <View pointerEvents="none" style={styles.highlight} />);

export const HighlightLabel = memo(({ label = "" }: Props) => (
  <View pointerEvents="none" style={styles.highlightLabelWrapper}>
    <Text style={styles.highlightLabel}>{label}</Text>
  </View>
));

const styles = StyleSheet.create({
  highlight: {
    position: "absolute",
    top: Style.adjust(Platform.select({ ios: -10, android: -5 })),
    left: HALF_SCREEN - HIGHLIGHT_RADIUS - PUSH_LEFT_TO_CENTER / 2,
    width: HIGHLIGHT_CIRCUMFERENCE,
    height: HIGHLIGHT_CIRCUMFERENCE,
    borderRadius: 20,
    backgroundColor: "#FFF7CC",
    opacity: 0.4,
    justifyContent: "center",
  } as ViewStyle,
  highlightLabelWrapper: {
    position: "absolute",
    top: Style.adjust(8),
    left: HALF_SCREEN - HIGHLIGHT_RADIUS - PUSH_LEFT_TO_CENTER / 2,
    width: HIGHLIGHT_CIRCUMFERENCE,
    height: HIGHLIGHT_CIRCUMFERENCE,
    justifyContent: "center",
    alignItems: "center",
  } as TextStyle,
  highlightLabel: {
    fontSize: Style.adjust(14),
    color: "#8E4D13",
  } as TextStyle,
});
