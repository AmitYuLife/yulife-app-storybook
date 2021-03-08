import React from "react";
import { View, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Text } from "@atoms";
import { Colours, Style } from "@styles";

export function CoinLabel({ yuCoinPower }: { yuCoinPower: number }) {
  if (!yuCoinPower) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <Text bold={true} style={styles.coin}>
        {yuCoinPower}
      </Text>
      <Text bold={true} style={styles.label}>
        YuCoin Power
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: Style.adjust(16),
  } as ViewStyle,
  coin: {
    color: Colours.orange,
    fontSize: Style.adjust(28),
  } as TextStyle,
  label: {
    marginLeft: Style.adjust(8),
    color: "rgb(241,184,46)",
    fontSize: Style.adjust(20),
  } as TextStyle,
});
