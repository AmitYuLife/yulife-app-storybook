import { TextStyle, Platform } from "react-native";
import { Colours, Style } from "../../../styles";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  base: {
    color: Colours.darkGray,
    fontSize: Style.SCALE_UP_AND_DOWN(15),
    fontWeight: Platform.select({ ios: undefined, android: "100" }),
  } as TextStyle,
  weightBold: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  weightNormal: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
  } as TextStyle,
});
