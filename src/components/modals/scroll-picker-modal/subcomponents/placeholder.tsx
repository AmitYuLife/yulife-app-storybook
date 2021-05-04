import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ITEM_HEIGHT } from "../scroll-picker.styles";

export const Placeholder = () => <View style={styles.wrapper} />;

const styles = StyleSheet.create({
  wrapper: {
    height: ITEM_HEIGHT,
  } as ViewStyle,
});
