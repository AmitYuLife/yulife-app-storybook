import React from "react";
import Text from "../text/text";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style, Colours } from "@styles";

interface Props {
  label: string;
  isActive: boolean;
}

export const Label = ({ label, isActive }: Props) => (
  <View style={styles.wrapper}>
    <Text bold={true} style={StyleSheet.flatten([styles.text, isActive && styles.active])}>
      {label}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "center",
    marginTop: Style.adjust(8),
  } as ViewStyle,
  text: {
    fontSize: Style.adjust(14),
    letterSpacing: 1,
    width: "100%",
  } as TextStyle,
  active: {
    color: Colours.blue.up204,
  } as TextStyle,
});
