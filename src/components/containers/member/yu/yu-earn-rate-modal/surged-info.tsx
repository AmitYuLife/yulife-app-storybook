import React from "react";
import { Text } from "@atoms";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style } from "@styles";

interface ISurgedInfoProps {
  earnRate: number;
}

export const SurgedInfo = (props: ISurgedInfoProps) => {
  const { earnRate } = props;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{getCopy(earnRate)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginTop: Style.adjust(32),
    paddingHorizontal: Style.adjust(30),
  } as ViewStyle,
  text: {
    fontSize: Style.adjust(16),
    letterSpacing: 0.8,
    lineHeight: Style.adjust(24),
  } as TextStyle,
});

function getCopy(earnRate: number) {
  if (earnRate === 1) {
    return "The gear you own gives you a YuCoin Power of 1.";
  }

  return `The gear you own boosts your YuCoin Power. For every 1 YuCoin earned you now get ${earnRate}.`;
}
