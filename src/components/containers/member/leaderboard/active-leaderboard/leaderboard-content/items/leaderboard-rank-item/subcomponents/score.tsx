import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Text } from "@atoms";
import { Style } from "@styles";
import { numberWithCommas } from "@services/utils";

interface Props {
  score: number;
  bold: boolean;
  style?: TextStyle;
}

export function Score({ score, bold, style }: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.text, style]} bold={bold}>
        {numberWithCommas(score)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingRight: Style.adjust(18),
    width: Style.adjust(80),
    marginLeft: "auto",
  } as ViewStyle,
  text: {
    textAlign: "right",
  } as TextStyle,
});
