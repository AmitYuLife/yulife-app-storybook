import { Style } from "@styles/index";
import { Platform, StyleSheet } from "react-native";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type NamedStyles = StyleSheet.NamedStyles<any>;

export type TemplateTextType =
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
  | "time"
  | "bigYuCoin"
  | "big64"
  | "big40"
  | "big88";

const defaultStyles = {
  fontFamily: Style.FONT_FAMILY_PRIMARY,
  fontWeight: Platform.select({ ios: null, android: "normal" }),
};

export const styleDefinitions = {
  h1: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(32),
    lineHeight: Style.adjust(40),
    letterSpacing: Style.getLetterSpacing(Style.adjust(1)),
  },
  h2: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(32),
    letterSpacing: Style.getLetterSpacing(Style.adjust(1)),
  },
  h3: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(24),
    lineHeight: Style.adjust(32),
    letterSpacing: Style.getLetterSpacing(Style.adjust(1)),
  },
  b1: {
    ...defaultStyles,
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.8)),
  },
  b1b: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.8)),
  },
  b2: {
    ...defaultStyles,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.6)),
  },
  b2b: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.6)),
  },
  l1: {
    ...defaultStyles,
    fontSize: Style.adjust(14),
    lineHeight: Style.adjust(18),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.4)),
  },
  l1b: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(14),
    lineHeight: Style.adjust(18),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.4)),
  },
  l2: {
    ...defaultStyles,
    fontSize: Style.adjust(12),
    lineHeight: Style.adjust(16),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.4)),
  },
  l2b: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(12),
    lineHeight: Style.adjust(16),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.4)),
  },
  l3: {
    ...defaultStyles,
    fontSize: Style.adjust(10),
    lineHeight: Style.adjust(16),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.4)),
  },
  l3b: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(10),
    lineHeight: Style.adjust(16),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.4)),
  },
  l4: {
    ...defaultStyles,
    fontSize: Style.adjust(8),
    lineHeight: Style.adjust(16),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.4)),
  },
  l4b: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(8),
    lineHeight: Style.adjust(16),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.4)),
  },
  time: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(62),
    lineHeight: Style.adjust(58),
    letterSpacing: Style.getLetterSpacing(Style.adjust(1)),
  },
  bigYuCoin: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(40),
    lineHeight: Style.adjust(40),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.6)),
  },
  big64: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(64),
    lineHeight: Style.adjust(64),
    letterSpacing: Style.getLetterSpacing(Style.adjust(1)),
  },
  big40: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(40),
    lineHeight: Style.adjust(42),
    letterSpacing: Style.getLetterSpacing(Style.adjust(1)),
  },
  big88: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(88),
    lineHeight: Style.adjust(96),
    letterSpacing: Style.getLetterSpacing(Style.adjust(1)),
  },
} as Record<TemplateTextType, NamedStyles>;

export const templateTextStyles: Record<TemplateTextType, NamedStyles> = StyleSheet.create(styleDefinitions);
