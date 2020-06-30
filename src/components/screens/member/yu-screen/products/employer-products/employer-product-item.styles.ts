import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style, Colours } from "@styles";

const defaultTextStyle = {
  fontSize: 16,
  fontFamily: Style.FONT_FAMILY_PRIMARY,
  lineHeight: 20,
  textAlign: "center",
  letterSpacing: 1,
};

export default StyleSheet.create({
  employerBenefitsItemWrapper: {
    height: Style.adjust(112),
    width: Style.adjust(130),
    alignItems: "center",
  } as ViewStyle,

  employerBenefitsItemImage: {
    height: Style.adjust(75),
    width: Style.adjust(63),
  } as ImageStyle,

  employerBenefitsItemText: {
    ...defaultTextStyle,
    color: "#5A5A5C",
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
    color: "#EA9E2F",
    position: "relative",
    left: 6,
  } as TextStyle,
});
