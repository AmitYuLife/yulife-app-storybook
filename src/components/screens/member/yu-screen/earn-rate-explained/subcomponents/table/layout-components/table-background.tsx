import React from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import { MARGIN_EDGE_RIGHT } from "../table.styles";

interface IBackgroundProps {
  width: number;
}

export function TableBackground({ width }: IBackgroundProps) {
  return <View style={StyleSheet.flatten([styles.wrapper, { width }])} />;
}

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    position: "absolute",
    right: MARGIN_EDGE_RIGHT,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#FFF4A1",
  } as ViewStyle,
});
