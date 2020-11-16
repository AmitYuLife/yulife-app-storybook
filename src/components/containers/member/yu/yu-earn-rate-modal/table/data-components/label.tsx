import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Text } from "@atoms/index";
import { Style, Colours } from "@styles";

interface IProps {
  label: string;
}

export function Label({ label = "" }: IProps) {
  return (
    <View style={styles.wrapper}>
      <Text bold={true} style={styles.label}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(180),
    justifyContent: "center",
    paddingLeft: Style.adjust(8),
  } as ViewStyle,
  label: {
    letterSpacing: 1,
    color: Colours.neutral.n700,
  } as TextStyle,
});
