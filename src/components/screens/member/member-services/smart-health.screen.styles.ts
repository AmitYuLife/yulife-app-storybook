import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "../../../../styles";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  } as ViewStyle,
  tabsWrapper: {
    alignItems: "center",
    marginTop: Style.SCALE_UP_AND_DOWN(17),
  } as ViewStyle,
  smartHeathWrapper: {
    flexDirection: "column",
    paddingLeft: Style.SCALE_UP_AND_DOWN(16),
    paddingRight: Style.SCALE_UP_AND_DOWN(16),
    paddingBottom: Style.SCALE_UP_AND_DOWN(30),
  } as ViewStyle,
  smartHealth: {
    color: "#333333",
    marginTop: Style.SCALE_UP_AND_DOWN(25),
    marginBottom: Style.SCALE_UP_AND_DOWN(8),
    fontSize: Style.SCALE_UP_AND_DOWN(24),
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  content: {
    color: "#5A5A5C",
    marginTop: Style.SCALE_UP_AND_DOWN(16),
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
  expertise: {
    color: "#333333",
    marginTop: Style.SCALE_UP_AND_DOWN(24),
    marginLeft: Style.SCALE_UP_AND_DOWN(24),
    marginBottom: Style.SCALE_UP_AND_DOWN(16),
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    lineHeight: Style.SCALE_UP_AND_DOWN(24),
  } as TextStyle,
  globalHyperLink: {
    color: Colours.darkHotPink,
    textDecorationLine: "underline",
    marginTop: Style.SCALE_UP_AND_DOWN(16),
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    fontFamily: Style.FONT_FAMILY_PRIMARY,
  } as TextStyle,
  globalHyperLinkNoMargin: {
    color: Colours.darkHotPink,
    textDecorationLine: "underline",
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    fontFamily: Style.FONT_FAMILY_PRIMARY,
  } as TextStyle,
  storeImage: {
    marginTop: Style.SCALE_UP_AND_DOWN(14),
    height: Style.SCALE_UP_AND_DOWN(39),
    width: Style.SCALE_UP_AND_DOWN(131),
  } as ImageStyle,
  hyperlinkWrapper: {
    flexDirection: "row",
    alignContent: "flex-start",
    alignItems: "center",
  } as ViewStyle,
});
