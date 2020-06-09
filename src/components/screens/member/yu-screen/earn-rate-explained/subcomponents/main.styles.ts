import { StyleSheet, TextStyle } from "react-native";
import { Style } from "@styles";

const mainStyles = StyleSheet.create({
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    lineHeight: 24,
    letterSpacing: 0.8,
    fontSize: 16,
    textAlign: "left",
    marginHorizontal: 16,
  } as TextStyle,
});

export default mainStyles;
