import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Text } from "@atoms";
import { PAGE_SIZE } from "../active-leaderboard/active-leaderboard.container";
import { Style } from "@styles";

export const FrontPageLabel = () => {
  return (
    <View style={styles.wrapper}>
      <Text bold={true} style={styles.text}>
        Top {PAGE_SIZE - 1}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: Style.DEVICE_WIDTH,
    marginLeft: 16,
  } as ViewStyle,
  text: {
    letterSpacing: 1,
    fontSize: 12,
  } as TextStyle,
});
