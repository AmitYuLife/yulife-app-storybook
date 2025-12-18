import { Style, templateTextStyles, StyleSheet } from "@styles";
import { templateTextStylesLineHeight } from "@styles/textStyles";
import { TextStyle, ViewStyle } from "react-native";

type SupportedDistances = 0 | 1 | 2 | "default";
type SupportedGapDistances = 1 | "default";

export const MAX_HEIGHT = Style.adjust(180);

// we apply line height to the number styles to ensure the numbers are aligned correctly
const NUMBER_STYLES = StyleSheet.create({
  0: {
    ...templateTextStyles.big88,
    lineHeight: templateTextStylesLineHeight.big88,
    width: Style.adjust(146),
    height: MAX_HEIGHT,
  },
  1: {
    ...templateTextStyles.big40,
    lineHeight: templateTextStylesLineHeight.big40,
    width: Style.adjust(52),
    height: Style.adjust(64),
  },
  2: {
    ...templateTextStyles.h2,
    lineHeight: templateTextStylesLineHeight.h2,
    width: Style.adjust(48),
    height: Style.adjust(48),
  },
  default: {
    ...templateTextStyles.h2,
    lineHeight: templateTextStylesLineHeight.h2,
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
