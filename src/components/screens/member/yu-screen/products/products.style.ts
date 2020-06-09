import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";
import { Style, Colours } from "@styles/index";

const productDetailsText = {
  fontFamily: Style.FONT_FAMILY_PRIMARY,
  fontSize: Style.SCALE_UP_AND_DOWN(16),
  lineHeight: Style.SCALE_UP_AND_DOWN(24),
  letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
  textAlign: "center",
};

export default StyleSheet.create({
  productWrapper: {
    flexDirection: "row",
    height: Style.SCALE_UP_AND_DOWN(74),
    width: Style.SCALE_UP_AND_DOWN(152),
    alignItems: "center",
  } as ViewStyle,

  inactiveProducts: {
    color: "#838385",
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    lineHeight: Style.SCALE_UP_AND_DOWN(17),
    textAlign: "left",
  } as TextStyle,

  tapForInfo: {
    color: "#F43E8E",
    fontSize: Style.SCALE_UP_AND_DOWN(14),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    lineHeight: Style.SCALE_UP_AND_DOWN(15),
    textAlign: "left",
  } as TextStyle,

  textWrapper: {
    marginLeft: Style.SCALE_UP_AND_DOWN(16),
    marginRight: Style.SCALE_UP_AND_DOWN(64),
    height: Style.SCALE_UP_AND_DOWN(64),
    flexDirection: "column",
  } as ViewStyle,

  productDetailsWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: Style.SCALE_UP_AND_DOWN(32),
  } as ViewStyle,

  productDetailsHeader: {
    alignSelf: "center",
  } as ViewStyle,

  productDetailsImage: {
    height: Style.SCALE_UP_AND_DOWN(114),
    width: Style.SCALE_UP_AND_DOWN(96),
    alignSelf: "center",
  } as ImageStyle,

  productDetailsPolicy: {
    marginTop: Style.SCALE_UP_AND_DOWN(16),
  } as ViewStyle,

  productDetailsPolicyHeader: {
    ...productDetailsText,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,

  productDetailsPolicyValue: {
    ...productDetailsText,
  } as TextStyle,

  productDetailsContent: {
    marginTop: Style.SCALE_UP_AND_DOWN(16),
    marginHorizontal: Style.SCALE_UP_AND_DOWN(8),
  } as ViewStyle,

  productDetailsDescription: {
    ...productDetailsText,
    textAlign: "left",
    paddingTop: Style.SCALE_UP_AND_DOWN(16),
    marginLeft: Style.SCALE_UP_AND_DOWN(16),
    marginRight: Style.SCALE_UP_AND_DOWN(16),
  } as TextStyle,

  productsDetailsRateView: {
    height: 32,
    width: 32,
    backgroundColor: Colours.yuscreen.earnRateBackground,
    position: "absolute",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colours.yuscreen.white,
    bottom: 24,
    right: 4,
  } as ViewStyle,

  productsDetailsRateText: {
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
