import React, { memo } from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import { Style, Colours } from "@styles";

export type ITextTemplateType = "h1" | "h2" | "h3" | "b1" | "b1b" | "b2" | "b2b" | "l1" | "l1b" | "l2" | "l2b";

interface IProps extends TextProps {
  testID?: string;
  children: string;
  type: ITextTemplateType;
  color?: string;
  textAlign?: TextStyle["textAlign"];
}

export const TextTemplate = memo(
  ({ children, testID, type, color = Colours.neutral.n800, textAlign = "left" }: IProps) => {
    const alignment = { textAlign };
    const fontColor = { color };

    return (
      <Text
        style={StyleSheet.flatten([styles.default, styles[type], alignment, fontColor])}
        allowFontScaling={false}
        testID={testID}
      >
        {children}
      </Text>
    );
  }
);

const styles = StyleSheet.create({
  default: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
  },
  h1: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(32),
    lineHeight: Style.adjust(40),
    letterSpacing: 1,
  },
  h2: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(32),
    letterSpacing: 1,
  },
  h3: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(24),
    lineHeight: Style.adjust(32),
    letterSpacing: 1,
  },
  b1: {
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.8,
  },
  b1b: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.8,
  },
  b2: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
  },
  b2b: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
  },
  l1: {
    fontSize: Style.adjust(14),
    lineHeight: Style.adjust(16),
    letterSpacing: 0.4,
  },
  l1b: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(14),
    lineHeight: Style.adjust(16),
    letterSpacing: 0.4,
  },
  l2: {
    fontSize: Style.adjust(12),
    lineHeight: Style.adjust(16),
    letterSpacing: 0.4,
  },
  l2b: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(12),
    lineHeight: Style.adjust(16),
    letterSpacing: 0.4,
  },
});
