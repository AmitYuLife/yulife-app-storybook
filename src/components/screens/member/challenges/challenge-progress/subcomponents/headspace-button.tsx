import React from "react";
import { TouchableOpacity, StyleSheet, Image, Platform, ImageStyle } from "react-native";
import assets from "../assets";
import { openHeadspace } from "@services/app-link";
import { Style } from "@styles";

export function HeadspaceButton() {
  if (Platform.OS === "android") {
    return null;
  }

  return (
    <TouchableOpacity onPress={openHeadspace}>
      <Image style={styles.image} source={assets.headspace} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    height: Style.adjust(60),
    width: Style.adjust(60),
    borderWidth: 1,
    borderColor: "rgba(230, 230, 230, 0.6)",
    borderRadius: Style.adjust(16),
    marginRight: Style.adjust(10),
  } as ImageStyle,
});
