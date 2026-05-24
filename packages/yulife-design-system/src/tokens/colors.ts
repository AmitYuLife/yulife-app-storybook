/**
 * Colour tokens
 *
 * Two layers:
 *  1. Palette  – raw, named colour values (brand-agnostic)
 *  2. Semantic – purpose-driven aliases that map onto the palette
 *
 * Replace values here to re-theme the entire system.
 */

// ─── Palette ─────────────────────────────────────────────────────────────────
// Source: Brand — Foundations › Primitives variable collection
// https://www.figma.com/design/Ac90Diav91cBdIGET9uCXs/Brand---Foundations

export const palette = {
  // ── Neutral ──────────────────────────────────────────────────────────────
  neutralWhite: "#FFFFFF",
  neutral50: "#FAFAFE",
  neutral100: "#FBFBFB",
  neutral200: "#F5F5F5",
  neutral300: "#E3E3E1",
  neutral400: "#D9D9D7",
  neutral500: "#A0A09B",
  neutral600: "#5C5757",
  neutral700: "#464647",
  neutralBlack: "#000000",

  // ── Pink ─────────────────────────────────────────────────────────────────
  pink100: "#FCE7F1",
  pink200: "#F9CEE4",
  pink300: "#F7B7D6",
  pink400: "#F49DC8",
  pink500: "#F186BA",
  pink600: "#F43E8E",
  pink700: "#E30D76",
  pink800: "#CC0D6E",
  pink900: "#900860",

  // ── Green ────────────────────────────────────────────────────────────────
  green100: "#E4FCF4",
  green200: "#CAF8E8",
  green300: "#B1F9E0",
  green400: "#99F8D7",
  green500: "#80F6CD",
  green600: "#00ED9D",

  // ── Blue ─────────────────────────────────────────────────────────────────
  blue100: "#E3F7FC",
  blue200: "#CAEFF9",
  blue300: "#B2ECFB",
  blue400: "#94DDF1",
  blue500: "#7EDCF5",
  blue600: "#00C0F3",

  // ── Purple ───────────────────────────────────────────────────────────────
  purple100: "#F4F0FF",
  purple200: "#EAE1FF",
  purple300: "#DFD3FF",
  purple400: "#D2C2FD",
  purple500: "#C7B4FD",
  purple600: "#956AFF",
  purple700: "#6953F3",
  purple800: "#340080",
  purple900: "#290163",

  // ── Yellow ───────────────────────────────────────────────────────────────
  yellow100: "#FFFBE5",
  yellow200: "#FFF7CC",
  yellow300: "#FFF3B2",
  yellow400: "#FFEF99",
  yellow500: "#FFEB80",
  yellow600: "#FFD600",

  // ── Pine ─────────────────────────────────────────────────────────────────
  pine100: "#D9FFF1",
  pine200: "#B3FAE1",
  pine300: "#89EAC7",
  pine400: "#68DCB2",
  pine500: "#43CD9B",
  pine600: "#38BE8F",
  pine700: "#28A87F",
  pine800: "#17926F",
  pine900: "#007357",

  // ── Indigo ───────────────────────────────────────────────────────────────
  indigo100: "#DEEFFF",
  indigo200: "#BEE0FF",
  indigo300: "#9BCFFF",
  indigo400: "#6DB9FF",
  indigo500: "#2697FF",
  indigo600: "#1675FF",
  indigo700: "#1A54FF",
  indigo800: "#2A35F5",
  indigo900: "#3112F1",

  // ── Gold ─────────────────────────────────────────────────────────────────
  gold100: "#FFFDCF",
  gold200: "#FFF7AB",
  gold300: "#FFF389",
  gold400: "#FFEF5A",
  gold500: "#FFDE2E",
  gold600: "#F1C527",
  gold700: "#E3AC1F",
  gold800: "#D49216",
  gold850: "#DB8200",
  gold900: "#BF6C0A",

  // ── Violet ───────────────────────────────────────────────────────────────
  violet100: "#F9E6FF",
  violet200: "#F3D5FF",
  violet300: "#EBBAFF",
  violet400: "#E1A3FF",
  violet500: "#D171FF",
  violet600: "#C547FF",
  violet700: "#AE13F5",
  violet800: "#9309D4",
  violet900: "#7900B2",

  // ── Orange ───────────────────────────────────────────────────────────────
  orange100: "#FFEEE5",
  orange200: "#FFDECF",
  orange300: "#FFBC9C",
  orange400: "#FF9A69",
  orange500: "#FF7836",
  orange600: "#F06B2A",
  orange700: "#E45E1D",
  orange800: "#C34E15",
  orange900: "#B53C01",

  // ── Teal ─────────────────────────────────────────────────────────────────
  teal100: "#D9FAFF",
  teal200: "#AAF5FF",
  teal300: "#6DEEFF",
  teal400: "#31E6FF",
  teal500: "#00CCEA",
  teal600: "#00B8DE",
  teal700: "#00A4D2",
  teal800: "#008FC6",
  teal900: "#007ABC",

  // ── Red ──────────────────────────────────────────────────────────────────
  red100: "#FFECED",
  red200: "#FFD0D6",
  red300: "#FFB9C4",
  red400: "#FF9DAF",
  red500: "#FF7893",
  red600: "#F65D84",
  red700: "#F14979",
  red800: "#E5346C",
  red900: "#BF1A54",

  // ── Transparent ──────────────────────────────────────────────────────────
  transBlack8: "rgba(0, 0, 0, 0.08)",
  transBlack: "rgba(0, 0, 0, 0.64)",
  transWhite: "rgba(255, 255, 255, 0.64)",

  // ── Misc ─────────────────────────────────────────────────────────────────
  miscBurgundy: "#640038",
  miscErrorLight: "#FFF2F2",
  miscErrorDark: "#FF5F5F",
  miscWarningLight: "#FFF7E6",
  miscWarningDark: "#F19E22",
  miscSuccessLight: "#ECF9EE",
  miscSuccessDark: "#66CC78",
  miscInfoLight: "#E6EDF9",
  miscInfoDark: "#5A89D8",
} as const;

// ─── Semantic tokens ──────────────────────────────────────────────────────────

export const colors = {
  // Text
  textPrimary: palette.neutral700,
  textSecondary: palette.neutral500,
  textDisabled: palette.neutral400,
  textInverse: palette.neutralWhite,
  textLink: palette.indigo600,
  textDanger: palette.red700,

  // Backgrounds
  bgBase: palette.neutralWhite,
  bgSurface: palette.neutral50,
  bgElevated: palette.neutralWhite,
  bgOverlay: palette.transBlack,
  bgDisabled: palette.neutral100,

  // Borders
  borderDefault: palette.neutral200,
  borderFocused: palette.indigo500,
  borderDanger: palette.red500,

  // Interactive
  actionPrimary: palette.pink600,
  actionPrimaryHover: palette.pink700,
  actionPrimaryPressed: palette.pink800,
  actionPrimaryText: palette.neutralWhite,

  actionSecondary: palette.neutralWhite,
  actionSecondaryBorder: palette.neutral200,
  actionSecondaryText: palette.neutral700,

  actionDestructive: palette.red700,
  actionDestructiveText: palette.neutralWhite,

  // Feedback
  feedbackSuccess: palette.miscSuccessDark,
  feedbackWarning: palette.miscWarningDark,
  feedbackDanger: palette.miscErrorDark,
  feedbackInfo: palette.miscInfoDark,

  // Status surfaces
  successSurface: palette.miscSuccessLight,
  warningSurface: palette.miscWarningLight,
  dangerSurface: palette.miscErrorLight,
  infoSurface: palette.miscInfoLight,
} as const;

export type PaletteKey = keyof typeof palette;
export type SemanticKey = keyof typeof colors;
