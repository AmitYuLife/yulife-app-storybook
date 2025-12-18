import { Style } from "@styles/index";
import { Platform } from "react-native";
import { NamedStyles, StyleSheet } from "./style-sheet";

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
  // automatically changes to right for RTL
  textAlign: "left",
};

export const styleDefinitions = {
  h1: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(32),
    letterSpacing: Style.getLetterSpacing(Style.adjust(1)),
  },
  h2: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(28),
    letterSpacing: Style.getLetterSpacing(Style.adjust(1)),
  },
  h3: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(24),
    letterSpacing: Style.getLetterSpacing(Style.adjust(1)),
  },
  b1: {
    ...defaultStyles,
    fontSize: Style.adjust(20),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.8)),
  },
  b1b: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(20),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.8)),
  },
  b2: {
    ...defaultStyles,
    fontSize: Style.adjust(16),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.6)),
  },
  b2b: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(16),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.6)),
  },
  l1: {
    ...defaultStyles,
    fontSize: Style.adjust(14),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.4)),
  },
  l1b: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(14),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.4)),
  },
  l2: {
    ...defaultStyles,
    fontSize: Style.adjust(12),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.4)),
  },
  l2b: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(12),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.4)),
  },
  l3: {
    ...defaultStyles,
    fontSize: Style.adjust(10),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.4)),
  },
  l3b: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(10),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.4)),
  },
  l4: {
    ...defaultStyles,
    fontSize: Style.adjust(8),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.4)),
  },
  l4b: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(8),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.4)),
  },
  time: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(62),
    letterSpacing: Style.getLetterSpacing(Style.adjust(1)),
  },
  bigYuCoin: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(40),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.6)),
  },
  big64: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(64),
    letterSpacing: Style.getLetterSpacing(Style.adjust(1)),
  },
  big40: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(40),
    letterSpacing: Style.getLetterSpacing(Style.adjust(1)),
  },
  big88: {
    ...defaultStyles,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(88),
    letterSpacing: Style.getLetterSpacing(Style.adjust(1)),
  },
} as Record<TemplateTextType, NamedStyles<any>>;

export const templateTextStyles: Record<TemplateTextType, NamedStyles<any>> = StyleSheet.create(styleDefinitions);

// use this to apply specific line height to text styles within the Markdown component
// we shouldn't apply line height to the text styles themselves, as it breaks Arabic text
export const templateTextStylesLineHeight: Record<TemplateTextType, number> = {
  h1: Style.adjust(40),
  h2: Style.adjust(32),
  h3: Style.adjust(32),
  b1: Style.adjust(24),
  b1b: Style.adjust(24),
  b2: Style.adjust(24),
  b2b: Style.adjust(24),
  l1: Style.adjust(18),
  l1b: Style.adjust(18),
  l2: Style.adjust(16),
  l2b: Style.adjust(16),
  l3: Style.adjust(16),
  l3b: Style.adjust(16),
  l4: Style.adjust(16),
  l4b: Style.adjust(16),
  time: Style.adjust(58),
  bigYuCoin: Style.adjust(40),
  big64: Style.adjust(64),
  big40: Style.adjust(42),
  big88: Style.adjust(96),
};

// Markdown-specific text styles that include lineHeight (for use in Markdown component markdownStyles)
const markdownStyleDefinitions = Object.keys(styleDefinitions).reduce((acc, key) => {
  const textType = key as TemplateTextType;
  acc[textType] = {
    ...styleDefinitions[textType],
    lineHeight: templateTextStylesLineHeight[textType],
  };
  return acc;
}, {} as Record<TemplateTextType, NamedStyles<unknown>>);

export const templateTextMarkdownStyles: Record<TemplateTextType, NamedStyles<unknown>> = StyleSheet.create(
  markdownStyleDefinitions
);
