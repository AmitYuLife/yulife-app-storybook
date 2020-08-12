import { StyleSheet, ViewStyle, Platform, TextStyle } from "react-native";
import { Colours, Style } from "@styles";

const INPUT_WIDTH = 92;

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  } as ViewStyle,
  pressable: {
    paddingBottom: 2,
    overflow: "hidden",
    justifyContent: "center",
    maxWidth: INPUT_WIDTH,
    alignSelf: "center",
  } as ViewStyle,
  blingWrapper: {
    marginBottom: Platform.select({ ios: 6, android: 0 }),
    marginRight: -3,
  } as ViewStyle,
  bling: {
    marginBottom: Platform.OS === "ios" ? -2 : -1,
    fontSize: 24,
    paddingRight: 4,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    color: Colours.products.fib.n900,
  } as TextStyle,
  inputWrapper: {
    alignSelf: "center",
    width: INPUT_WIDTH,
  } as ViewStyle,
  inputBase: {
    opacity: 0,
  } as TextStyle,
  shadowWrapper: {
    height: 38,
    flexDirection: "row",
    marginBottom: Platform.select({ ios: -12, android: -10 }),
  } as ViewStyle,
  shadowLabel: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    color: Colours.products.fib.n900,
    fontSize: 24,
  } as ViewStyle,
  underline: {
    position: "absolute",
    bottom: 0,
    height: 2,
    width: INPUT_WIDTH,
    alignSelf: "center",
  } as ViewStyle,
  cursorWrapper: {
    marginTop: Platform.select({ ios: 0, android: 5 }),
    marginBottom: Platform.select({ ios: 4, android: 0 }),
  } as ViewStyle,
  cursor: {
    width: 1,
    height: 20,
    backgroundColor: Colours.darkHotPink,
  } as ViewStyle,
});
