import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@atoms";
import { Colours, Style } from "../../../../../../../styles";

interface GPTitleProps {
  title: string;
}

export default function GPTitle({ title }: GPTitleProps) {
  return (
    <View style={styles.wrapper}>
      <Text bold={true} style={StyleSheet.flatten([styles.text])}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: Style.adjust(32),
    backgroundColor: Colours.neutral.white,
  },
  text: {
    fontSize: Style.adjust(24),
    lineHeight: Style.adjust(32),
    color: Colours.neutral.n800,
  },
});
