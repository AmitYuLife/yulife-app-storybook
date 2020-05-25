import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { ChestCoin } from "../../../../atoms";

const CONSTANT = 20;

export default function Coin() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.overflow}>
        <ChestCoin />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    overflow: "hidden",
    paddingTop: 16 + CONSTANT,
  } as ViewStyle,
  overflow: {
    marginBottom: -20,
  } as ViewStyle,
});
