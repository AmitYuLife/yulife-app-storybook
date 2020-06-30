import React, { memo } from "react";
import { StyleSheet, TextStyle, LayoutChangeEvent, Text } from "react-native";
import { Style } from "@styles";

interface Props {
  title: string;
  onLayout?: (event: LayoutChangeEvent) => void;
}
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const SectionTitle = memo(function ({ title, onLayout = () => {} }: Props) {
  return (
    <Text style={styles.sectionTitle} onLayout={onLayout}>
      {title}
    </Text>
  );
});

const styles = StyleSheet.create({
  sectionTitle: {
    color: "#6E6E70",
    fontSize: 15,
    lineHeight: 16,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: 1,
  } as TextStyle,
});
