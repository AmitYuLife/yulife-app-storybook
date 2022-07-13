import React from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import { YUSCREEN } from "@ids";
import { TextTemplate } from "@atoms";

export const YuScreen = () => {
  return (
    <View style={styles.wrapper} testID={YUSCREEN}>
      <TextTemplate type="h1">YuScreenV4</TextTemplate>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  list: {
    flex: 1,
  } as ViewStyle,
});
