import { Platform, TextStyle, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";

const MARGIN_TOP = Platform.select({
  ios: 6,
  android: 0,
});

export default StyleSheet.create({
  heading: {
    fontSize: Style.adjust(16),
    marginTop: MARGIN_TOP,
    lineHeight: Style.adjust(24),
    letterSpacing: Style.adjust(0.6),
  } as TextStyle,
  wrapper: {
    paddingHorizontal: Style.adjust(24),
    color: Colours.neutral.n800,
    backgroundColor: Colours.neutral.n50,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    borderColor: Colours.neutral.n100,
    borderBottomWidth: 1,
    paddingTop: Style.adjust(16),
  } as ViewStyle,
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Style.adjust(12),
  } as ViewStyle,
  opponent: {
    flex: 1,
    justifyContent: "space-between",
  } as ViewStyle,
  middleOpponent: {
    marginHorizontal: Style.adjust(4),
  } as ViewStyle,
  name: {
    textAlign: "center",
    color: Colours.primary.p600,
    fontSize: Style.adjust(12),
    lineHeight: Style.adjust(16),
    paddingTop: Style.adjust(14),
    paddingBottom: Style.adjust(12),
  } as TextStyle,
  loadingWrapper: {
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(32),
  } as ViewStyle,
});
