import React from "react";
import { Text } from "@atoms";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";

const _BetaText = () => {
  return (
    <View style={styles.wrapper}>
      <Text bold={true} style={styles.beta}>
        BETA
      </Text>
    </View>
  );
};

const BETA_WIDTH_BASE = 31;
const BETA_MARGIN_LEFT = 6;
const BETA_TEXT_WIDTH = BETA_WIDTH_BASE + BETA_MARGIN_LEFT;
export const BetaText = Object.assign(_BetaText, { WIDTH: BETA_TEXT_WIDTH });

const styles = StyleSheet.create({
  wrapper: {
    width: BETA_TEXT_WIDTH,
    marginLeft: BETA_MARGIN_LEFT,
  } as ViewStyle,
  beta: {
    color: "#D3D3D6",
    letterSpacing: 1,
    fontSize: 12,
  } as TextStyle,
});
