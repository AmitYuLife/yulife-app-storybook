import { Style, Colours } from "@styles";
import { StyleSheet, TextStyle } from "react-native";

export default StyleSheet.create({
  heading: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontStyle: "normal",
    fontSize: 22,
    lineHeight: 24,
    letterSpacing: 1,
    color: "#5A5A5C",
    paddingVertical: Style.adjust(24),
    backgroundColor: Colours.neutral.white,
  } as TextStyle,
  inactive: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontWeight: "normal",
  } as TextStyle,
});
