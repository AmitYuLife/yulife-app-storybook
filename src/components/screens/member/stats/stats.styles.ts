import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  } as ViewStyle,
  sectionList: {
    paddingLeft: Style.SCALE_UP_AND_DOWN(16),
    paddingRight: Style.SCALE_UP_AND_DOWN(16),
    paddingBottom: Style.SCALE_UP_AND_DOWN(16),
  } as ViewStyle,
  sectionListContainer: {
    paddingBottom: Style.SCALE_UP_AND_DOWN(50),
  } as ViewStyle,
  headerWrapper: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#FAFAFE",
    paddingLeft: Style.SCALE_UP_AND_DOWN(11),
    paddingRight: Style.SCALE_UP_AND_DOWN(11),
    paddingBottom: Style.SCALE_UP_AND_DOWN(12),
  } as ViewStyle,
  iconWrapper: {
    width: Style.SCALE_UP_AND_DOWN(22),
    height: Style.SCALE_UP_AND_DOWN(22),
  } as ViewStyle,
  logo: { width: Style.SCALE_UP_AND_DOWN(22), height: Style.SCALE_UP_AND_DOWN(22) } as ImageStyle,
  headerTitle: {
    marginLeft: Style.SCALE_UP_AND_DOWN(9),
    fontSize: Style.SCALE_UP_AND_DOWN(24),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
  } as TextStyle,
  activityHistoryWrapper: {
    alignItems: "center",
    width: "100%",
    height: Style.SCALE_UP_AND_DOWN(40),
  } as ViewStyle,
  activityHistory: {
    textDecorationLine: "underline",
    color: "#E30D76",
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.SCALE_UP_AND_DOWN(16),
  } as TextStyle,
});
