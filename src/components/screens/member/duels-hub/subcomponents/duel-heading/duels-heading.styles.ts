import { Style, Colours } from "@styles";
import { StyleSheet, TextStyle } from "react-native";

export default StyleSheet.create({
  heading: {
    fontSize: 22,
    lineHeight: 24,
    letterSpacing: 1,
    color: "#5A5A5C",
    paddingVertical: Style.adjust(24),
    backgroundColor: Colours.neutral.white,
  } as TextStyle,
});
