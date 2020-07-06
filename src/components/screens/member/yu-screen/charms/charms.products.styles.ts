import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "@styles";

export default StyleSheet.create({
  charmWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  } as ViewStyle,

  charmDescription: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    color: "#5A5A5C",
    letterSpacing: 1,
    textAlign: "left",
    overflow: "visible",
    marginRight: Style.adjust(32),
  } as TextStyle,
});
