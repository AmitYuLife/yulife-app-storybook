import React, { memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";

export const SectionSeparator = memo(function () {
  return <View style={styles.bigSeparator} />;
});

const styles = StyleSheet.create({
  bigSeparator: {
    height: Style.SCALE_UP_AND_DOWN(16),
    width: "100%",
    backgroundColor: "#FAFAFE",
  } as ViewStyle,
});
