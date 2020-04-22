import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
  wrapper: {
    paddingTop: Style.SCALE_UP_AND_DOWN(Platform.select({ ios: 16, android: 11 })),
    paddingLeft: Style.SCALE_UP_AND_DOWN(16),
    paddingRight: Style.SCALE_UP_AND_DOWN(16),
    paddingBottom: Style.SCALE_UP_AND_DOWN(16),
    height: Style.SCALE_UP_AND_DOWN(176),
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: Style.SCALE_UP_AND_DOWN(8),
    marginBottom: Style.SCALE_UP_AND_DOWN(16),
  } as ViewStyle,
  amount: {
    marginTop: Style.SCALE_UP_AND_DOWN(Platform.select({ ios: 16, android: 11 })),
    fontSize: Style.SCALE_UP_AND_DOWN(12),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
  } as TextStyle,
  dateText: {
    marginTop: Style.SCALE_UP_AND_DOWN(Platform.select({ ios: 16, android: 11 })),
    fontSize: Style.SCALE_UP_AND_DOWN(12),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
  } as TextStyle,
  dateValue: {
    marginTop: Style.SCALE_UP_AND_DOWN(Platform.select({ ios: 8, android: 5 })),
    fontSize: Style.SCALE_UP_AND_DOWN(24),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    color: "#6E6E70",
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
  } as TextStyle,
  valueWrapper: {
    marginTop: Style.SCALE_UP_AND_DOWN(Platform.select({ ios: 8, android: 5 })),
    flexDirection: "row",
  } as ViewStyle,
  value: {
    fontSize: Style.SCALE_UP_AND_DOWN(24),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    color: "#6E6E70",
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
  } as ViewStyle,
  unit: {
    color: "#6E6E70",
    fontSize: Style.SCALE_UP_AND_DOWN(12),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    marginBottom: 0,
    position: "absolute",
    bottom: Style.SCALE_UP_AND_DOWN(4),
    left: Style.SCALE_UP_AND_DOWN(3),
  } as ViewStyle,
  title: {
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
  } as TextStyle,
});
