import React, { memo } from "react";
import { Image, ImageStyle, StyleSheet } from "react-native";
import { Style } from "@styles";

const MeditopiaLogoIcon = () => {
  return <Image source={require("./meditopia-logo-icon.png")} style={styles.wrapper} />;
};

export default memo(MeditopiaLogoIcon);

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(16),
    height: Style.adjust(16),
  } as ImageStyle,
});
