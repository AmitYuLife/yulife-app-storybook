import React from "react";
import { TouchableOpacity, Image, StyleSheet, ImageStyle } from "react-native";
import assets from "../assets";
import { openCalm } from "@services/app-link";
import { Style } from "@styles";

export function CalmButton() {
  return (
    <TouchableOpacity onPress={openCalm}>
      <Image style={styles.image} source={assets.calm} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    height: Style.adjust(60),
    width: Style.adjust(60),
  } as ImageStyle,
});
