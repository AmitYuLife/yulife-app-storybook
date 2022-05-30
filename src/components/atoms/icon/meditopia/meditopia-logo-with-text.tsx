import React from "react";
import { Image, ImageStyle, StyleSheet } from "react-native";
import { Style } from "@styles";

const MeditopiaLogoWithText = () => {
  return <Image source={require("./meditopia-logo-with-text.png")} style={styles.wrapper} />;
};

export default MeditopiaLogoWithText;

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(160),
    height: Style.adjust(32),
  } as ImageStyle,
});
