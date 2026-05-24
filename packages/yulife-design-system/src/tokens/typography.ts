/** Web: single family name; font-weight selects the cut. */
export const FONT_FAMILY_PRIMARY = "Bariol";
export const FONT_FAMILY_PRIMARY_BOLD = "Bariol";
export const FONT_FAMILY_SECONDARY = "Open Sans";
export const FONT_FAMILY_SECONDARY_BOLD = "Open Sans";

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

export interface TextStyleDefinition {
  fontFamily: string;
  fontWeight: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

/** Figma-aligned text styles from design-system canon (Button, Card, templates). */
const canonTextStyles = {
  heading1: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 1,
  },
  heading2: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 28,
    lineHeight: 32,
    letterSpacing: 1,
  },
  heading3: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 1,
  },
  body1Regular: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.8,
  },
  body1Bold: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.8,
  },
  body2Regular: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.6,
  },
  body2Bold: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.6,
  },
  button: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  label1Regular: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  label1Bold: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  label2Regular: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  label2Bold: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  label3Regular: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  label3Bold: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
} as const satisfies Record<string, TextStyleDefinition>;

export const fontFamily = {
  sans: FONT_FAMILY_PRIMARY,
} as const;

export const fontSize = {
  "3xs": 10,
  "2xs": 12,
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
  "2xl": 32,
} as const;

export const fontWeight = {
  thin: "100",
  light: "300",
  regular: "400",
  bold: "700",
} as const;

export const lineHeight = {
  tight: 16,
  normal: 24,
  loose: 32,
  spacious: 40,
} as const;

export const letterSpacing = {
  xs: 0.4,
  sm: 0.6,
  md: 0.8,
  lg: 1,
} as const;

const legacyTextStyles: Record<TemplateTextType, TextStyleDefinition> = {
  h1: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 1,
  },
  h2: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 28,
    lineHeight: 32,
    letterSpacing: 1,
  },
  h3: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 1,
  },
  b1: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.8,
  },
  b1b: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.8,
  },
  b2: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.6,
  },
  b2b: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.6,
  },
  l1: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.4,
  },
  l1b: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.4,
  },
  l2: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  l2b: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  l3: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  l3b: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  l4: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontWeight: "400",
    fontSize: 8,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  l4b: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 8,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  time: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 62,
    lineHeight: 58,
    letterSpacing: 1,
  },
  bigYuCoin: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 40,
    lineHeight: 40,
    letterSpacing: 0.6,
  },
  big64: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 64,
    lineHeight: 64,
    letterSpacing: 1,
  },
  big40: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 40,
    lineHeight: 42,
    letterSpacing: 1,
  },
  big88: {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: 88,
    lineHeight: 96,
    letterSpacing: 1,
  },
};

export const textStyles = {
  ...legacyTextStyles,
  ...canonTextStyles,
} as Record<TemplateTextType, TextStyleDefinition> & typeof canonTextStyles;
