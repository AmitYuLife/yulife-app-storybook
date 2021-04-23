import React from "react";
import { Image, ImageStyle, StyleSheet } from "react-native";
import { Style } from "@styles";

export const Headspace = () => {
  return <Image source={require("./headspace-img.png")} style={styles.wrapper} />;
};

export default Headspace;

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(160),
    height: Style.adjust(32),
  } as ImageStyle,
});
