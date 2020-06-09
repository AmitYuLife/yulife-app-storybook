import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";
import { Colours } from "@styles/index";

export default StyleSheet.create({
  activeText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    color: Colours.darkHotPink,
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    lineHeight: Style.SCALE_UP_AND_DOWN(24),
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    marginBottom: Style.SCALE_UP_AND_DOWN(8),
  } as TextStyle,
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    lineHeight: Style.SCALE_UP_AND_DOWN(24),
    color: "#5A5A5C",
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    marginBottom: Style.SCALE_UP_AND_DOWN(8),
  } as TextStyle,
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  } as ViewStyle,
  leaderboardsWrapper: {
    padding: Style.SCALE_UP_AND_DOWN(24),
  } as ViewStyle,
});
