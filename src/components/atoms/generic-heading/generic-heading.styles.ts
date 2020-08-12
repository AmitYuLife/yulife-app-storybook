import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "../../../styles";

const styles = StyleSheet.create({
  wrapper: {
    height: 56,
    paddingVertical: 16,
    flexDirection: "row",
    alignContent: "center",
    borderBottomColor: "rgba(0,0,0,0.1)",
    marginHorizontal: 16,
    marginTop: Style.isAnyIphoneX() ? -10 : 0,
  } as ViewStyle,
  leftIconWrapper: {
    alignSelf: "center",
    width: 32,
  } as ViewStyle,
  centerWrapper: { flexDirection: "row", flex: 1, justifyContent: "center" } as ViewStyle,
  relative: { position: "relative" } as ViewStyle,
  logoBetaWrapper: { position: "absolute", left: 24 } as ViewStyle,
  headingBetaWrapper: { position: "absolute", right: -38 } as ViewStyle,
  heading: {
    color: Colours.products.fib.n900,
    letterSpacing: 1,
    lineHeight: 24,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  rightIconWrapper: { width: 32, alignSelf: "center" } as ViewStyle,
  rightIconTouchable: { alignSelf: "flex-end" },
  rightIconText: {
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    flexWrap: "nowrap",
    marginLeft: -16,
  } as TextStyle,
});

export default styles;
