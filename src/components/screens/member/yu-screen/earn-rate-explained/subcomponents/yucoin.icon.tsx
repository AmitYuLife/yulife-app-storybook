import React from "react";
import { StyleSheet, Image, ImageStyle } from "react-native";

type Style = ImageStyle & { color?: string };

interface IProps {
  style?: Style;
}

function YuCoinIcon({ style }: IProps = {}) {
  const { color = "#686868", ...otherStyles } = style;

  return (
    <Image
      style={StyleSheet.flatten([styles.image, otherStyles, { tintColor: color }])}
      source={require("../../../../../../../assets/stats/yucoin.png")}
    />
  );
}

export default YuCoinIcon;

const styles = StyleSheet.create({
  image: {
    width: 18,
    height: 18,
  } as ImageStyle,
});
