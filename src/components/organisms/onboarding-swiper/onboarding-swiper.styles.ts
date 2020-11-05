import { StyleSheet, TextStyle, ViewStyle, Platform } from "react-native";
import { Style } from "@styles";

export default StyleSheet.create({
  actionButton: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: 16,
    letterSpacing: 0.8,
    color: "#E30D76",
  } as TextStyle,
  skipButton: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    letterSpacing: 0.8,
    color: "#E30D76",
  } as TextStyle,
  navigationViewWrapper: {
    position: "absolute",
    bottom: Style.adjust(54),
    alignSelf: "center",
    flexDirection: "row",
    width: "100%",
    paddingRight: 34,
    paddingLeft: 34,
    justifyContent: "space-between",
    alignItems: "center",
  } as ViewStyle,
  pageIndicatorWrapper: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    right: 0,
    left: 0,
  } as ViewStyle,
  absoluteTop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
  } as ViewStyle,
});
