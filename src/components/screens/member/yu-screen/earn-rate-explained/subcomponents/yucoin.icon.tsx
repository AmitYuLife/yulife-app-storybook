import React from "react";
import { StyleSheet, Image, ImageStyle } from "react-native";
import { Style } from "@styles";

type Style = ImageStyle & { color?: string };

interface IProps {
  style?: Style;
}

function YuCoinIcon({ style }: IProps = {}) {
  const { color = "#EA9E2F", ...otherStyles } = style;

  return (
    <Image
      style={StyleSheet.flatten([styles.image, otherStyles, { tintColor: color }])}
      source={require("@assets/yuscreen/todays-yucoin.png")}
    />
  );
}

export default YuCoinIcon;

const styles = StyleSheet.create({
  image: {
    width: Style.adjust(18),
    height: Style.adjust(18),
  } as ImageStyle,
});
