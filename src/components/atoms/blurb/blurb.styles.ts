import { TextStyle, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";

export default StyleSheet.create({
  base: {
    color: Colours.gray,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.SCALE_UP_AND_DOWN(15),
    lineHeight: Style.SCALE_UP_AND_DOWN(22),
    textAlign: "center",
  } as TextStyle,
  wrapper: {
    paddingHorizontal: Style.SCALE_UP_AND_DOWN(40),
  } as ViewStyle,
});
