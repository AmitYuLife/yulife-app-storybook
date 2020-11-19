import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Text } from "@atoms";
import { Style, Colours } from "@styles";

export interface IHeadingProps {
  text: string;
}

export const Heading = (props: IHeadingProps) => {
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
    marginHorizontal: Style.adjust(16),
    paddingRight: Style.adjust(16),
    paddingLeft: Style.adjust(12),
  } as ViewStyle,
  text: {
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(34),
    letterSpacing: 1,
    color: Colours.neutral.n700,
  } as TextStyle,
});
