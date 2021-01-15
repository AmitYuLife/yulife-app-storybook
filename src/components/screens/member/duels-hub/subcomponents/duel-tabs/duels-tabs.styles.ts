import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Colours, Style } from "@styles";

export default StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colours.neutral.white,
    marginLeft: Style.adjust(24),
  } as ViewStyle,
  heading: {
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.8,
    color: Colours.neutral.n400,
    paddingVertical: Style.adjust(8),
    backgroundColor: Colours.neutral.white,
  } as TextStyle,
  pinkText: {
    color: Colours.primary.p600,
  } as TextStyle,
  tab: {
    paddingRight: 24,
  } as ViewStyle,
});
