import React, { memo } from "react";
import { Text } from "@atoms";
import { StyleSheet, TextStyle } from "react-native";

interface Props {
  heading: string;
  style?: TextStyle;
}

const _Heading = ({ heading, style }: Props) => {
  if (!heading) {
    return null;
  }

  return (
    <Text numberOfLines={1} bold={true} style={StyleSheet.flatten([styles.heading, style])}>
      {heading}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
  } as TextStyle,
});

export const Heading = memo(_Heading);
