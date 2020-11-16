import React from "react";
import { StyleSheet, ViewStyle, Image, View, ImageStyle } from "react-native";
import { MARGIN_EDGE_RIGHT } from "../table.styles";
import { Style } from "@styles";

interface IBackgroundProps {
  width: number;
}

export function TableBackground({ width }: IBackgroundProps) {
  return (
    <View style={StyleSheet.flatten([styles.wrapper, { width }])}>
      <Image style={styles.background} source={require("./earn-rate-column.png")} />
    </View>
  );
}

const WIDTH = Style.adjust(224);

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    position: "absolute",
    right: MARGIN_EDGE_RIGHT,
    borderRadius: 8,
    overflow: "hidden",
    width: WIDTH,
    backgroundColor: "#FFF4A1",
  } as ViewStyle,
  background: {
    height: "100%",
    width: WIDTH,
  } as ImageStyle,
});
