import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Text } from "@atoms";
import { Style } from "@styles";

interface Props {
  name: string;
  bold: boolean;
  style?: TextStyle;
}

export function Name({ name, bold, style }: Props) {
  return (
    <View style={styles.wrapper}>
      <Text numberOfLines={2} bold={bold} style={[styles.text, style]}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingLeft: Style.adjust(10),
    justifyContent: "center",
  } as ViewStyle,
  text: {
    fontSize: Style.adjust(16),
    width: Style.DEVICE_WIDTH - 200,
  } as TextStyle,
});
