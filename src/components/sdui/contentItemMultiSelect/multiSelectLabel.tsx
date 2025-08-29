import React from "react";
import { View, ViewStyle, TextStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Style, Colours, StyleSheet } from "@styles";

interface Props {
  label: string;
  isActive: boolean;
}

export const MultiSelectLabel = ({ label, isActive }: Props) => {
  const color = isActive ? Colours.ocean.up204 : Colours.neutral.n700;
  return (
    <View style={styles.wrapper}>
      <TextTemplate type="l1b" color={color}>
        {label}
      </TextTemplate>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "center",
    marginTop: Style.adjust(8),
    marginBottom: Style.adjust(8),
  } as ViewStyle,
  text: {
    fontSize: Style.adjust(14),
    letterSpacing: 1,
    width: "100%",
  } as TextStyle,
});
