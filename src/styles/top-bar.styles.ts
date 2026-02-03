import { initialWindowMetrics } from "react-native-safe-area-context";
import { deviceName } from "expo-device";
import Style from "./style";

// TODO: Update this for the rest of time
const NOTCHED_IPHONES = [
  "iPhone X",
  "iPhone XR",
  "iPhone XS",
  "iPhone XS Max",
  "iPhone 11",
  "iPhone 11 Pro",
  "iPhone 11 Pro Max",
  "iPhone 12",
  "iPhone 12 mini",
  "iPhone 12 Pro",
  "iPhone 12 Pro Max",
  "iPhone 13",
  "iPhone 13 mini",
  "iPhone 13 Pro",
  "iPhone 13 Pro Max",
  "iPhone 14",
  "iPhone 14 Plus",
  "iPhone 14 Pro",
  "iPhone 14 Pro Max",
  "iPhone 15",
  "iPhone 15 Plus",
  "iPhone 15 Pro",
  "iPhone 15 Pro Max",
  "iPhone 16",
  "iPhone 16 Plus",
  "iPhone 16 Pro",
  "iPhone 16 Pro Max",
  "iPhone 17",
  "iPhone 17 Plus",
  "iPhone 17 Pro",
  "iPhone 17 Pro Max",
];

const hasNotch = NOTCHED_IPHONES.includes(deviceName ?? "");

export const HEIGHT = Style.adjust(36);
const HIT_SLOP_SIZE = Style.adjust(16);
const HIT_SLOP = {
  left: HIT_SLOP_SIZE,
  right: HIT_SLOP_SIZE,
  bottom: HIT_SLOP_SIZE,
  top: HIT_SLOP_SIZE,
};

export const PADDING_TOP = initialWindowMetrics.insets.top + (hasNotch ? Style.adjust(-10) : 0);
export const PADDING_BOTTOM = Style.adjust(5);
export const LEFT_PADDING_TOP = Style.adjust(3);
export const LOGO_PADDING_TOP = Style.adjust(12);
export const TOP_BAR_WITH_PAD = HEIGHT + PADDING_TOP + PADDING_BOTTOM;
export default {
  HEIGHT,
  PADDING_TOP,
  PADDING_BOTTOM,
  LOGO_PADDING_TOP,
  LEFT_PADDING_TOP,
  TOP_BAR_WITH_PAD,
  HIT_SLOP,
};
