import { ViewStyle } from "react-native";

export interface SvgViewStyle extends Omit<ViewStyle, "width" | "height"> {
  width?: number;
  height?: number;
}
