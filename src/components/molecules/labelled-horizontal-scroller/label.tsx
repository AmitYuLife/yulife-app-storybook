import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import Markdown from "../markdown/markdown";

interface Props {
  label: string;
}

export const Label = memo(({ label }: Props) => {
  return (
    <View style={styles.wrapper}>
      <Markdown text={label} markdownStyles={markdownStyles} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignSelf: "center",
  } as ViewStyle,
});

const markdownStyles = {
  text: {
    color: Colours.neutral.n800,
    fontSize: Style.adjust(14),
    lineHeight: Style.adjust(16),
  },
};
