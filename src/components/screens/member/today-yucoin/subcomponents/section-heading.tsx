import React from "react";
import { View, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Text } from "@atoms/index";

interface IProps {
  labelLeft: string;
  labelRight: string;
}

export default function SectionHeading({ labelLeft, labelRight }: IProps) {
  return (
    <View style={styles.headingWrapper}>
      <Text bold={true} style={styles.heading}>
        {labelLeft}
      </Text>
      <Text bold={true} style={styles.headingRight}>
        {labelRight}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: "rgb(216, 139, 37)",
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
});
