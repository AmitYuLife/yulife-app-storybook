import React from "react";
import { View, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Text } from "@atoms/index";

interface IProps {
  hasRoundedTop?: boolean;
  isGrayScale?: boolean;
  labelLeft: string;
  labelRight: string;
}

export default function SectionHeading({ hasRoundedTop, isGrayScale, labelLeft, labelRight }: IProps) {
  return (
    <View
      style={[
        styles.headingWrapper,
        hasRoundedTop ? styles.topBorderRadius : null,
        isGrayScale ? styles.headingWrapperGrayScale : null,
      ]}
    >
      <Text style={[styles.heading, isGrayScale ? styles.headingGrayScale : null]}>{labelLeft}</Text>
      <Text style={[styles.headingRight, isGrayScale ? styles.headingGrayScale : null]}>{labelRight}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: "rgb(216, 139, 37)",
  } as TextStyle,
  headingGrayScale: {
    color: "#FFF",
  } as TextStyle,
  headingRight: {
    color: "rgb(216, 139, 37)",
    marginLeft: "auto",
  } as TextStyle,
  headingWrapper: {
    alignItems: "center",
    backgroundColor: "rgb(255, 242, 121)",
    flexDirection: "row",
    height: 34,
    paddingHorizontal: 15,
    width: "100%",
  } as ViewStyle,
  topBorderRadius: {
    borderTopEndRadius: 8,
    borderTopLeftRadius: 8,
  } as ViewStyle,
  headingWrapperGrayScale: {
    backgroundColor: "#999999",
  } as ViewStyle,
});
