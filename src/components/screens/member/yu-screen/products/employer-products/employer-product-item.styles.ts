import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style, Colours } from "@styles";

const defaultTextStyle = {
  fontSize: Style.SCALE_UP_AND_DOWN(16),
  fontFamily: Style.FONT_FAMILY_PRIMARY,
  lineHeight: Style.SCALE_UP_AND_DOWN(17),
  textAlign: "center",
};

export default StyleSheet.create({
  employerBenefitsItemWrapper: {
    flexDirection: "column",
    height: Style.SCALE_UP_AND_DOWN(112),
    width: Style.SCALE_UP_AND_DOWN(96),
    alignItems: "center",
  } as ViewStyle,

  employerBenefitsItemImage: {
    height: Style.SCALE_UP_AND_DOWN(75),
    width: Style.SCALE_UP_AND_DOWN(63),
  } as ImageStyle,

  employerBenefitsItemText: {
    ...defaultTextStyle,
    color: "#526980",
  } as TextStyle,

  employerBenefitsItemTextPassive: {
    ...defaultTextStyle,
    color: "#838385",
  } as TextStyle,

  rateView: {
    height: 28,
    width: 28,
    backgroundColor: Colours.yuscreen.earnRateBackground,
    position: "absolute",
    borderRadius: 14,
    borderWidth: 2,
    borderColor: Colours.yuscreen.white,
    bottom: 16,
    right: -3,
  } as ViewStyle,

  rateText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: 12,
    lineHeight: 24,
    letterSpacing: 0.8,
    color: Colours.yuscreen.white,
    position: "relative",
    left: 6,
  } as TextStyle,
});
