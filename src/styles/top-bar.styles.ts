import { Platform } from "react-native";
import Style from "./style";
import { initialWindowMetrics } from "react-native-safe-area-context";

export const HEIGHT = Style.adjust(36);
const HIT_SLOP_SIZE = Style.adjust(16);
const HIT_SLOP = {
  left: HIT_SLOP_SIZE,
  right: HIT_SLOP_SIZE,
  bottom: HIT_SLOP_SIZE,
  top: HIT_SLOP_SIZE,
};

export const PADDING_TOP = initialWindowMetrics.insets.top;
export const PADDING_BOTTOM = Platform.select({ ios: 0, android: 16 });
export const LEFT_PADDING_TOP = Style.adjust(3);
export const LOGO_PADDING_TOP = Style.adjust(12);
export const TOP_BAR_WITH_PAD = HEIGHT + PADDING_TOP + PADDING_BOTTOM + Style.adjust(10);
export default {
  HEIGHT,
  PADDING_TOP,
  PADDING_BOTTOM,
  LOGO_PADDING_TOP,
  LEFT_PADDING_TOP,
  TOP_BAR_WITH_PAD,
  HIT_SLOP,
};
