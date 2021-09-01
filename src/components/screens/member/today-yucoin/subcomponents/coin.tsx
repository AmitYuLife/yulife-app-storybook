import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { ChestCoin } from "@atoms";

const CONSTANT = 20;

const Coin = ({ isGrayScale = false }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.overflow}>
        <ChestCoin isGrayScale={isGrayScale} />
      </View>
    </View>
  );
};

export default Coin;

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
