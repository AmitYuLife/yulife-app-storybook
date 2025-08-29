import React from "react";
import { View, ViewStyle } from "react-native";
import { ITEM_HEIGHT } from "../scroll-picker.styles";

import { StyleSheet } from "@styles";
export const Placeholder = () => <View style={styles.wrapper} />;

const styles = StyleSheet.create({
  wrapper: {
    height: ITEM_HEIGHT,
  } as ViewStyle,
});
