import React, { memo } from "react";
import { StyleSheet, TextStyle } from "react-native";
import { Text } from "@atoms";
import { Colours, Style } from "@styles";

interface Props {
  title: string;
  style?: TextStyle;
}

export const Header = memo(({ title, style }: Props) => (
  <Text bold={true} style={[styles.label, style]}>
    {title}
  </Text>
));

const styles = StyleSheet.create({
  label: {
    fontSize: Style.adjust(12),
    lineHeight: Style.adjust(16),
    letterSpacing: 1,
    color: Colours.products.fib.n800,
  } as TextStyle,
});
