import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Text } from "@atoms";
import { Style, Colours } from "@styles";

interface Props {
  title: string;
  wrapperStyle?: ViewStyle;
}

export const Heading = memo(({ title, wrapperStyle }: Props) => (
  <View style={wrapperStyle}>
    <Text bold style={styles.label}>
      {title}
    </Text>
  </View>
));

const styles = StyleSheet.create({
  label: {
    fontSize: Style.adjust(24),
    lineHeight: Style.adjust(32),
    letterSpacing: 1,
    color: Colours.products.fib.n900,
  } as TextStyle,
});
