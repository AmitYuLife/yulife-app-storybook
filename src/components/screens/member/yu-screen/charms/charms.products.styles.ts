import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style, Colours } from "@styles";

export default StyleSheet.create({
  charmWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: Style.SCALE_UP_AND_DOWN(78),
    width: "80%",
    alignItems: "center",
  } as ViewStyle,

  charmDescription: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    lineHeight: Style.SCALE_UP_AND_DOWN(22),
    color: "#838385",
    textAlign: "left",
    marginRight: Style.SCALE_UP_AND_DOWN(32),
  } as TextStyle,

  charmIcon: {
    height: Style.SCALE_UP_AND_DOWN(75),
    width: Style.SCALE_UP_AND_DOWN(63),
    marginRight: Style.SCALE_UP_AND_DOWN(16),
  } as ImageStyle,

  rateView: {
    height: 32,
    width: 32,
    backgroundColor: Colours.yuscreen.earnRateBackground,
    position: "absolute",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colours.yuscreen.white,
    bottom: 16,
    right: 2,
  } as ViewStyle,

  rateText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: 13,
    lineHeight: 24,
    letterSpacing: 0.8,
    color: Colours.yuscreen.white,
    position: "relative",
    left: 8,
    top: 2,
  } as TextStyle,

  earnRateTextBiggerThanTen: {
    left: 3,
  } as TextStyle,

  earnRateTextIsTen: {
    left: 4,
  } as TextStyle,
});
