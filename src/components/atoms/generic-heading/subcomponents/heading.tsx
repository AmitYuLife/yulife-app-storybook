import React, { memo } from "react";
import { Text } from "@atoms";
import { StyleSheet, TextStyle } from "react-native";

interface Props {
  heading: string;
}

const _Heading = ({ heading }: Props) => {
  if (!heading) {
    return null;
  }

  return (
    <Text numberOfLines={1} bold={true} style={styles.heading}>
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
