import { Style } from "@styles";
import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";

type SupportedDistances = 0 | 1 | 2 | "default";
type SupportedGapDistances = 1 | "default";

export const BASE_NUMBER_STYLES = {
  fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  fontWeight: Platform.select({ ios: null, android: "normal" }) as null | "normal",
};

export const MAX_HEIGHT = Style.adjust(180);

const NUMBER_STYLES = StyleSheet.create({
  0: {
    ...BASE_NUMBER_STYLES,
    fontSize: Style.adjust(88),
    lineHeight: Style.adjust(96),
    width: Style.adjust(146),
    height: MAX_HEIGHT,
  },
  1: {
    ...BASE_NUMBER_STYLES,
    fontSize: Style.adjust(40),
    lineHeight: Style.adjust(42),
    width: Style.adjust(52),
    height: Style.adjust(64),
  },
  2: {
    ...BASE_NUMBER_STYLES,
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(32),
    width: Style.adjust(48),
    height: Style.adjust(48),
  },
  default: {
    ...BASE_NUMBER_STYLES,
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(32),
    width: Style.adjust(40),
    height: Style.adjust(40),
  },
}) as Record<SupportedDistances, TextStyle | ViewStyle>;

export const getNumberStyle = (distance: number | "default" = "default"): TextStyle =>
  NUMBER_STYLES[distance as SupportedDistances] || NUMBER_STYLES.default;

const SINGLE_DIGIT_NUMBER_GAPS: Record<SupportedGapDistances, number> = {
  1: -55,
  default: -8,
};

const NUMBER_GAPS: Record<SupportedGapDistances, number> = {
  1: -20,
  default: 0,
};

export const SCROLLING_NUMBER_GAP = 10;

export const getNumberGap = (gapForNumber: number, distance: number | "default" = "default"): number =>
  gapForNumber < 10
    ? SINGLE_DIGIT_NUMBER_GAPS[distance as SupportedGapDistances] ?? SINGLE_DIGIT_NUMBER_GAPS.default
    : NUMBER_GAPS[distance as SupportedGapDistances] ?? NUMBER_GAPS.default;
