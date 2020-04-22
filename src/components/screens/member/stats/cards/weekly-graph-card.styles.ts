import { ImageStyle, Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export const MAX_GRAPH_HEIGHT = 111;
export default StyleSheet.create({
  wrapper: {
    paddingTop: Style.SCALE_UP_AND_DOWN(Platform.select({ ios: 16, android: 11 })),
    paddingLeft: Style.SCALE_UP_AND_DOWN(16),
    paddingRight: Style.SCALE_UP_AND_DOWN(16),
    paddingBottom: Style.SCALE_UP_AND_DOWN(16),
    height: Style.SCALE_UP_AND_DOWN(208),
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: Style.SCALE_UP_AND_DOWN(8),
    marginBottom: Style.SCALE_UP_AND_DOWN(16),
  } as ViewStyle,
  fullGraphWrapper: {
    flexDirection: "column",
  } as ViewStyle,
  limitValueWrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: Style.SCALE_UP_AND_DOWN(128),
    marginTop: Style.SCALE_UP_AND_DOWN(15),
  } as ViewStyle,
  graphWrapper: {
    // +2 because there should be 2 more pixels for top and bottom line
    height: Style.SCALE_UP_AND_DOWN(MAX_GRAPH_HEIGHT + 2),
    marginLeft: "auto",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: Style.SCALE_UP_AND_DOWN(23),
  } as ViewStyle,

  graphLimitValueWrapper: {
    flexDirection: "row",
  } as ViewStyle,
  dataWrapper: {
    position: "absolute",
    width: Style.SCALE_UP_AND_DOWN(148),
    height: Style.SCALE_UP_AND_DOWN(MAX_GRAPH_HEIGHT),
    flexDirection: "row",
    marginTop: Style.SCALE_UP_AND_DOWN(1),
    marginBottom: Style.SCALE_UP_AND_DOWN(1),
  } as ViewStyle,

  weekWrapper: {
    marginTop: Style.SCALE_UP_AND_DOWN(Style.isAndroid() ? 6 : 9),
    flexDirection: "row",
    justifyContent: "space-between",
    width: Style.SCALE_UP_AND_DOWN(148),
  } as ViewStyle,

  dayWrapper: {
    height: Style.SCALE_UP_AND_DOWN(16),
    width: Style.SCALE_UP_AND_DOWN(16),
    alignItems: "center",
  } as ViewStyle,

  topLineWrapper: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  topLine: {
    width: Style.SCALE_UP_AND_DOWN(148),
    height: Style.SCALE_UP_AND_DOWN(1),
  } as ImageStyle,

  middleLineWrapper: {
    flexDirection: "row",
    alignItems: "center",
  } as ImageStyle,
  middleLine: {
    width: Style.SCALE_UP_AND_DOWN(148),
    height: Style.SCALE_UP_AND_DOWN(1),
  } as ImageStyle,
  bottomLineWrapper: {
    flexDirection: "row",
    alignItems: "center",
  } as ImageStyle,
  bottomLine: {
    width: Style.SCALE_UP_AND_DOWN(148),
    height: Style.SCALE_UP_AND_DOWN(1),
    backgroundColor: "#D8D5D8",
  } as ViewStyle,
  texLineWrapper: {
    height: Style.SCALE_UP_AND_DOWN(16),
    justifyContent: "center",
  } as ViewStyle,
  textLine: {
    marginLeft: Style.SCALE_UP_AND_DOWN(8),
    letterSpacing: Style.SCALE_UP_AND_DOWN(1),
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.SCALE_UP_AND_DOWN(10),
  } as TextStyle,
  title: {
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
  } as TextStyle,
  dayValue: {
    width: Style.SCALE_UP_AND_DOWN(16),
    borderRadius: Style.SCALE_UP_AND_DOWN(6),
  } as ViewStyle,
  dayItemWrapper: {
    marginTop: "auto",
    flexDirection: "column",
    alignItems: "center",
    marginRight: Style.SCALE_UP_AND_DOWN(6),
  } as ViewStyle,
  day: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    color: "#6E6E70",
  } as TextStyle,

  averageLine: {
    height: Style.SCALE_UP_AND_DOWN(1),
    width: Style.SCALE_UP_AND_DOWN(280),
    position: "absolute",
  } as ViewStyle,

  averageValueWrapper: {
    flexDirection: "row",
    position: "absolute",
  } as ViewStyle,

  averageValue: {
    fontSize: Style.SCALE_UP_AND_DOWN(24),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    color: "#6E6E70",
  } as ViewStyle,
  unit: {
    color: "#6E6E70",
    fontSize: Style.SCALE_UP_AND_DOWN(12),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    marginBottom: 0,
    position: "absolute",
    bottom: Style.SCALE_UP_AND_DOWN(4),
    left: Style.SCALE_UP_AND_DOWN(3),
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
  } as ViewStyle,
  noDataText: {
    position: "absolute",
    marginTop: Style.SCALE_UP_AND_DOWN(40),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.SCALE_UP_AND_DOWN(24),
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    color: "#6E6E70",
  } as TextStyle,
});
