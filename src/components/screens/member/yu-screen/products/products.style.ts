import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "@styles/index";

const productDetailsText = {
  fontFamily: Style.FONT_FAMILY_PRIMARY,
  fontSize: 16,
  lineHeight: Style.SCALE_UP_AND_DOWN(24),
  letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
  textAlign: "center",
};

export default StyleSheet.create({
  productWrapper: {
    flexDirection: "row",
    height: 74,
    width: 152,
    alignItems: "center",
  } as ViewStyle,
  productName: {
    color: "#838385",
    fontSize: 16,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    lineHeight: 20,
    letterSpacing: 1,
    textAlign: "left",
    marginRight: 16,
  } as TextStyle,
  tapForInfo: {
    color: "#F43E8E",
    fontSize: 16,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: 1,
    lineHeight: 16,
    textAlign: "left",
  } as TextStyle,
  textWrapperActiveProduct: {
    marginLeft: Style.SCALE_UP_AND_DOWN(16),
    marginRight: Style.SCALE_UP_AND_DOWN(32),
    height: Style.SCALE_UP_AND_DOWN(64),
    flexDirection: "column",
    marginTop: -4,
  } as ViewStyle,
  textWrapperInactiveProduct: {
    marginLeft: Style.SCALE_UP_AND_DOWN(16),
    marginRight: Style.SCALE_UP_AND_DOWN(32),
    height: Style.SCALE_UP_AND_DOWN(64),
    flexDirection: "column",
    marginTop: -4,
    justifyContent: "center",
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
  earnRateTextBiggerThanTen: {
    left: 3,
  } as TextStyle,
  earnRateTextIsTen: {
    left: 4,
  } as TextStyle,
});
