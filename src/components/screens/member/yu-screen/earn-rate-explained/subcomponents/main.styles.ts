import { StyleSheet, TextStyle } from "react-native";
import { Style } from "@styles";

const mainStyles = StyleSheet.create({
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    lineHeight: Style.adjust(24),
    marginHorizontal: Style.adjust(16),
    letterSpacing: 0.8,
    fontSize: Style.adjust(16, { shrinkMultiplier: 0.2 }),
    textAlign: "left",
    color: "#5A5A5C",
  } as TextStyle,
});

export default mainStyles;
