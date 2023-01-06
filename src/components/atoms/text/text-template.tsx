import React, { memo } from "react";
import { ColorValue, StyleSheet, Text, TextStyle, Platform, AccessibilityRole } from "react-native";
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
  | "l3b"
  | "l4"
  | "l4b"
  | "time";

interface IProps {
  testID?: string;
  children: React.ReactNode;
  type: ITextTemplateType;
  color?: ColorValue | string;
  textAlign?: TextStyle["textAlign"];
  decoration?: "underline" | "strikeThrough";
  numberOfLines?: number;
  accessibilityLabel?: string;
  accessibilityRole?: AccessibilityRole;
  accessible?: boolean;
}

export const TextTemplate = memo(
  ({
    children,
    testID,
    type,
    color,
    textAlign = "left",
    decoration,
    numberOfLines,
    accessibilityLabel,
    accessibilityRole,
    accessible = true,
  }: IProps) => {
    const alignment = { textAlign };
    const fontColor = { color: color || Colours.neutral.n800 };
    const decorationStyle = !decoration ? null : styles[decoration];

    return (
      <Text
        style={StyleSheet.flatten([styles.default, styles[type], alignment, fontColor, decorationStyle])}
        allowFontScaling={false}
        testID={testID}
        numberOfLines={numberOfLines}
        accessible={accessible}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole={accessibilityRole}
        importantForAccessibility={accessible ? "auto" : "no-hide-descendants"}
      >
        {children}
      </Text>
    );
  }
);

const getLetterSpacing = (spacing: number) => {
  const calculatedSpacing = Style.isIphone8() ? Number((spacing - 0.3).toFixed(1)) : spacing;
  return Platform.select({ ios: calculatedSpacing, android: 0, web: 0 });
};

export const styles = StyleSheet.create({
  default: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontWeight: Platform.select({ ios: null, android: "normal" }),
  },
  h1: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(32),
    lineHeight: Style.adjust(40),
    letterSpacing: getLetterSpacing(Style.adjust(1)),
  },
  h2: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(32),
    letterSpacing: getLetterSpacing(Style.adjust(1)),
  },
  h3: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(24),
    lineHeight: Style.adjust(32),
    letterSpacing: getLetterSpacing(Style.adjust(1)),
  },
  b1: {
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    letterSpacing: getLetterSpacing(Style.adjust(0.8)),
  },
  b1b: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    letterSpacing: getLetterSpacing(Style.adjust(0.8)),
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
    letterSpacing: getLetterSpacing(Style.adjust(0.6)),
  },
  l1: {
    fontSize: Style.adjust(14),
    lineHeight: Style.adjust(18),
    letterSpacing: getLetterSpacing(Style.adjust(0.4)),
  },
  l1b: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(14),
    lineHeight: Style.adjust(18),
    letterSpacing: getLetterSpacing(Style.adjust(0.4)),
  },
  l2: {
    fontSize: Style.adjust(12),
    lineHeight: Style.adjust(16),
    letterSpacing: getLetterSpacing(Style.adjust(0.4)),
  },
  l2b: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(12),
    lineHeight: Style.adjust(16),
    letterSpacing: getLetterSpacing(Style.adjust(0.4)),
  },
  l3: {
    fontSize: Style.adjust(10),
    lineHeight: Style.adjust(16),
    letterSpacing: getLetterSpacing(Style.adjust(0.4)),
  },
  l3b: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(10),
    lineHeight: Style.adjust(16),
    letterSpacing: getLetterSpacing(Style.adjust(0.4)),
  },
  l4: {
    fontSize: Style.adjust(8),
    lineHeight: Style.adjust(16),
    letterSpacing: getLetterSpacing(Style.adjust(0.4)),
  },
  l4b: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(8),
    lineHeight: Style.adjust(16),
    letterSpacing: getLetterSpacing(Style.adjust(0.4)),
  },
  time: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(62),
    lineHeight: Style.adjust(58),
    letterSpacing: getLetterSpacing(Style.adjust(1)),
  },
  underline: {
    textDecorationLine: "underline",
  } as TextStyle,
  strikeThrough: {
    textDecorationLine: "line-through",
  } as TextStyle,
});
