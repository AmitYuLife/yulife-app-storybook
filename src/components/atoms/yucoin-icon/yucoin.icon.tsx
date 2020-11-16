import React from "react";
import { StyleSheet, Image, ImageStyle } from "react-native";
import { Style, Colours } from "@styles";

interface IProps {
  style?: ImageStyle;
}

function YuCoinIcon({ style }: IProps) {
  return (
    <Image style={StyleSheet.flatten([styles.image, style])} source={require("@assets/yuscreen/todays-yucoin.png")} />
  );
}

export default YuCoinIcon;

const styles = StyleSheet.create({
  image: {
    width: Style.adjust(18),
    height: Style.adjust(18),
    tintColor: Colours.orange,
  } as ImageStyle,
});
