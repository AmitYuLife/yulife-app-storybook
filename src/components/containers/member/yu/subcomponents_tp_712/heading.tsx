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
    <View style={headingStyles.wrapper}>
      <Text bold={true} style={headingStyles.text}>
        {text}
      </Text>
    </View>
  );
};

export const Subheading = (props: IHeadingProps) => {
  const { text } = props;

  return (
    <View style={subheadingStyles.wrapper}>
      <Text style={subheadingStyles.text}>{text}</Text>
    </View>
  );
};

const headingStyles = StyleSheet.create({
  wrapper: {
    marginHorizontal: Style.adjust(16),
    paddingRight: Style.adjust(16),
    paddingLeft: Style.adjust(12),
  } as ViewStyle,
  text: {
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(32),
    letterSpacing: 1,
    color: Colours.neutral.n700,
  } as TextStyle,
});

const subheadingStyles = StyleSheet.create({
  wrapper: {
    marginHorizontal: Style.adjust(16),
    paddingRight: Style.adjust(16),
    paddingLeft: Style.adjust(12),
    marginTop: Style.adjust(8),
  } as ViewStyle,
  text: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
    color: Colours.neutral.n700,
  } as TextStyle,
});
