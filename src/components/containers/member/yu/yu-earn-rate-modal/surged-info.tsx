import React from "react";
import { Text } from "@atoms";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style } from "@styles";

interface ISurgedInfoProps {
  earnRate: number;
}

export const SurgedInfo = (props: ISurgedInfoProps) => {
  const { earnRate } = props;

  if (earnRate < 2) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{getCopy(earnRate)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Style.adjust(30),
    marginTop: Style.adjust(16),
  } as ViewStyle,
  text: {
    fontSize: Style.adjust(16),
    letterSpacing: 1,
    lineHeight: Style.adjust(24),
  } as TextStyle,
});

function getCopy(earnRate: number) {
  return `The gear you own boosts your YuCoin Power. For every 1 YuCoin earned you now get ${earnRate}.`;
}
