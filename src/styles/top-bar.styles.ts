import { Platform } from "react-native";
import Style from "./style";

export const HEIGHT = Style.adjust(36);
export const PADDING_TOP = Platform.select({
  ios: Style.getSafeAreaStart() + 8,
  android: 0,
});
export const PADDING_BOTTOM = Platform.select({ ios: 0, android: 16 });
export const LOGO_PADDING_TOP = Style.adjust(12);
export const LEFT_PADDING_TOP = Style.adjust(3);
export const TOP_BAR_WITH_PAD = HEIGHT + PADDING_TOP * (Style.hasNotch ? 1.5 : 2) + PADDING_BOTTOM;

export default {
  HEIGHT,
  PADDING_TOP,
  PADDING_BOTTOM,
  LOGO_PADDING_TOP,
  LEFT_PADDING_TOP,
  TOP_BAR_WITH_PAD,
};
