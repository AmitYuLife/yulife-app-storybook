import { StyleSheet, TextStyle, ViewStyle, Platform } from "react-native";
import { Colours, Style } from "@styles";

export const GENERIC_HEADING_HEIGHT = Style.adjust(56);

const styles = StyleSheet.create({
  wrapper: {
    height: GENERIC_HEADING_HEIGHT,
    paddingVertical: Style.adjust(16),
    flexDirection: "row",
    alignContent: "center",
    borderBottomColor: "rgba(0,0,0,0.1)",
    paddingHorizontal: Style.adjust(16),
    marginTop: Platform.OS === "ios" && Style.hasNotch ? -10 : 0,
  } as ViewStyle,
  leftIconWrapper: {
    alignSelf: "center",
    width: Style.adjust(32),
  } as ViewStyle,
  centerWrapper: { flexDirection: "row", flex: 1, justifyContent: "center" } as ViewStyle,
  relative: { position: "relative" } as ViewStyle,
  logoBetaWrapper: { position: "absolute", left: 24 } as ViewStyle,
  headingBetaWrapper: { position: "absolute", right: -38 } as ViewStyle,
  heading: {
    color: Colours.products.fib.n900,
    letterSpacing: 1,
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  rightIconWrapper: { width: 32, alignSelf: "center" } as ViewStyle,
  rightIconTouchable: { alignSelf: "flex-end" },
  rightIconText: {
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(22),
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    flexWrap: "nowrap",
    marginLeft: -16,
  } as TextStyle,
});

export default styles;
