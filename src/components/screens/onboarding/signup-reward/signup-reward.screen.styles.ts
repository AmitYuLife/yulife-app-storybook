import { TextStyle, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";

export default StyleSheet.create({
  wrapper: {
    width: "100%",
    height: Style.adjust(265),
  },
  heading: {
    marginTop: Style.SCALE_UP_AND_DOWN(-10),
    letterSpacing: Style.adjust(1),
    color: Colours.neutral.n800,
    fontSize: Style.adjust(32),
    lineHeight: Style.adjust(40),
  } as TextStyle,
  message: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.adjust(0.6),
    color: Colours.neutral.n800,
  } as TextStyle,
  messageWrapper: {
    paddingHorizontal: Style.adjust(32),
  } as ViewStyle,
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
  } as ViewStyle,
});
