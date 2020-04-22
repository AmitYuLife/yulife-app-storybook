import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export const MAX_GRAPH_WIDTH = 192;
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

  title: {
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
  } as TextStyle,

  firstElementTitle: {
    marginTop: Style.SCALE_UP_AND_DOWN(Platform.select({ ios: 16, android: 12 })),
    fontSize: Style.SCALE_UP_AND_DOWN(12),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
  } as TextStyle,

  firstElementWrapper: {
    alignItems: "center",
    marginTop: Style.SCALE_UP_AND_DOWN(Platform.select({ ios: 8, android: 5 })),
    flexDirection: "row",
  } as ViewStyle,

  valueGraph: {
    height: Style.SCALE_UP_AND_DOWN(24),
    borderRadius: Style.SCALE_UP_AND_DOWN(8),
    backgroundColor: "#6AA3DC",
  } as ViewStyle,

  valueText: {
    fontSize: Style.SCALE_UP_AND_DOWN(24),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    marginLeft: Style.SCALE_UP_AND_DOWN(6),
  } as TextStyle,
});
