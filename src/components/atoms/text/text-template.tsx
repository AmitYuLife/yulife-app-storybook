import React, { memo } from "react";
import { ColorValue, StyleSheet, Text, TextStyle, Platform } from "react-native";
import { Style, Colours } from "@styles";

export type ITextTemplateType =
  | "h1"
  | "h2"
  | "h3"
  | "b1"
  | "b1b"
  | "b2"
  | "b2b"
  | "l1"
  | "l1b"
  | "l2"
  | "l2b"
  | "l3"
  | "l3b";

interface IProps {
  testID?: string;
  children: React.ReactNode;
  type: ITextTemplateType;
  color?: ColorValue | string;
  textAlign?: TextStyle["textAlign"];
  decoration?: "underline" | "strikeThrough";
  numberOfLines?: number;
}

export const TextTemplate = memo(
  ({ children, testID, type, color = Colours.neutral.n800, textAlign = "left", decoration, numberOfLines }: IProps) => {
    const alignment = { textAlign };
    const fontColor = { color };
    const decorationStyle = !decoration ? null : styles[decoration];

    return (
      <Text
        style={StyleSheet.flatten([styles.default, styles[type], alignment, fontColor, decorationStyle])}
        allowFontScaling={false}
        testID={testID}
        numberOfLines={numberOfLines}
      >
        {children}
      </Text>
    );
  }
);

const getLetterSpacing = (spacing: number) =>
  Platform.select({ ios: spacing, android: Number((spacing - 0.1).toFixed(1)) });

export const styles = StyleSheet.create({
  default: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
  },
  h1: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(32),
    lineHeight: Style.adjust(40),
    letterSpacing: getLetterSpacing(Style.adjust(0.9)),
  },
  h2: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(32),
    letterSpacing: getLetterSpacing(Style.adjust(0.9)),
  },
  h3: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(24),
    lineHeight: Style.adjust(32),
    letterSpacing: getLetterSpacing(Style.adjust(0.9)),
  },
  b1: {
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    letterSpacing: getLetterSpacing(Style.adjust(0.7)),
  },
  b1b: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    letterSpacing: getLetterSpacing(Style.adjust(0.7)),
  },
  b2: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: getLetterSpacing(Style.adjust(0.6)),
  },
  b2b: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: getLetterSpacing(Style.adjust(0.5)),
  },
  l1: {
    fontSize: Style.adjust(14),
    lineHeight: Style.adjust(18),
    letterSpacing: getLetterSpacing(Style.adjust(0.3)),
  },
  l1b: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(14),
    lineHeight: Style.adjust(18),
    letterSpacing: getLetterSpacing(Style.adjust(0.3)),
  },
  l2: {
    fontSize: Style.adjust(12),
    lineHeight: Style.adjust(16),
    letterSpacing: getLetterSpacing(Style.adjust(0.3)),
  },
  l2b: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(12),
    lineHeight: Style.adjust(16),
    letterSpacing: getLetterSpacing(Style.adjust(0.3)),
  },
  l3: {
    fontSize: Style.adjust(10),
    lineHeight: Style.adjust(16),
    letterSpacing: getLetterSpacing(Style.adjust(0.3)),
  },
  l3b: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(10),
    lineHeight: Style.adjust(16),
    letterSpacing: getLetterSpacing(Style.adjust(0.3)),
  },
  underline: {
    textDecorationLine: "underline",
  } as TextStyle,
  strikeThrough: {
    textDecorationLine: "line-through",
  } as TextStyle,
});
