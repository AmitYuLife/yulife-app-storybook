import { Platform } from "react-native";
import Style from "./style";

export const HEIGHT = Style.adjust(36);
export const PADDING_TOP = Platform.select({ ios: Style.getSafeAreaStart(), android: 0 });
export const PADDING_BOTTOM = 12;
export const HEIGHT_WITH_PADDING = HEIGHT + PADDING_TOP + PADDING_BOTTOM;

export default {
  HEIGHT,
  HEIGHT_WITH_PADDING,
  PADDING_TOP,
  PADDING_BOTTOM,
};
