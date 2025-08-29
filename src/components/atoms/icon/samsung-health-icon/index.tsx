import React, { memo } from "react";
import { Image, ImageStyle } from "react-native";
import { Style, StyleSheet } from "@styles";

export const SamsungHealthIcon = memo(() => (
  <Image source={require("./samsung-health-icon.png")} style={styles.wrapper} />
));

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(40),
    height: Style.adjust(40),
  } as ImageStyle,
});
