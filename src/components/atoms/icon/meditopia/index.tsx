import React from "react";
import { Image, ImageStyle, StyleSheet } from "react-native";
import { Style } from "@styles";

export const Meditopia = () => {
  return <Image source={require("./meditopia-logo.png")} style={styles.wrapper} />;
};

export default Meditopia;

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(160),
    height: Style.adjust(32),
  } as ImageStyle,
});
