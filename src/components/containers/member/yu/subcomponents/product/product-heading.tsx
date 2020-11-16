import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style, Colours } from "@styles";
import { Text } from "@atoms";

interface Props {
  text: string;
}

export const ProductHeading = (props: Props) => {
  const { text } = props;

  return (
    <View style={styles.wrapper}>
      <Text bold={true} style={styles.text}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(168),
    flexDirection: "row",
  } as ViewStyle,
  text: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(20),
    letterSpacing: 1,
    color: Colours.neutral.n700,
  } as TextStyle,
});
