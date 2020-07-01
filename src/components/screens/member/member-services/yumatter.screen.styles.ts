import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "../../../../styles";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  } as ViewStyle,
  yumatterWrapper: {
    flexDirection: "column",
    paddingLeft: Style.SCALE_UP_AND_DOWN(16),
    paddingRight: Style.SCALE_UP_AND_DOWN(16),
    paddingBottom: Style.SCALE_UP_AND_DOWN(30),
  } as ViewStyle,
  yumatter: {
    color: "#333333",
    marginTop: Style.SCALE_UP_AND_DOWN(25),
    marginBottom: Style.SCALE_UP_AND_DOWN(24),
    fontSize: Style.SCALE_UP_AND_DOWN(24),
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  content: {
    color: "#5A5A5C",
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    lineHeight: Style.SCALE_UP_AND_DOWN(24),
  } as TextStyle,
  contentHelpCenter: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    alignItems: "center",
  } as ViewStyle,
  header: {
    color: "#333333",
    marginTop: Style.SCALE_UP_AND_DOWN(24),
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    lineHeight: Style.SCALE_UP_AND_DOWN(24),
  } as TextStyle,
  loginHeader: {
    color: "#333333",
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    lineHeight: Style.SCALE_UP_AND_DOWN(24),
    marginBottom: Style.SCALE_UP_AND_DOWN(16),
  } as TextStyle,
  globalHyperLink: {
    color: Colours.darkHotPink,
    textDecorationLine: "underline",
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    fontFamily: Style.FONT_FAMILY_PRIMARY,
  } as TextStyle,
  hyperlinkWrapper: {
    flexDirection: "row",
    alignContent: "flex-start",
    alignItems: "center",
  } as ViewStyle,
  loginDetailsWrapper: {
    flexDirection: "column",
    backgroundColor: "#F2F6FA",
    borderRadius: Style.SCALE_UP_AND_DOWN(8),
    padding: Style.SCALE_UP_AND_DOWN(16),
    marginTop: Style.SCALE_UP_AND_DOWN(32),
    marginBottom: Style.SCALE_UP_AND_DOWN(32),
  } as ViewStyle,
});
