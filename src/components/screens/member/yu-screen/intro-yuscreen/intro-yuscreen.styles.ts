import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
  imageWrapper: {
    height: 320,
    width: 320,
    marginTop: Style.DEVICE_HEIGHT * (Style.isAndroid() ? 0.05 : 0.1),
    alignSelf: "center",
  } as ViewStyle,
  image: {
    height: 320,
    width: 320,
  } as ImageStyle,
  title: {
    alignSelf: "center",
    marginTop: Style.adjust(Style.isShortToMediumAndroid() ? 17 : 34),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: 24,
    letterSpacing: 0.8,
    color: "#000000",
  } as TextStyle,
  subTitle: {
    alignSelf: "center",
    alignContent: "center",
    textAlign: "center",
    marginTop: 18,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    width: 280,
    letterSpacing: 0.8,
    color: "#5A5A5C",
  } as TextStyle,
  actionButton: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: 16,
    letterSpacing: 0.8,
    color: "#E30D76",
  } as TextStyle,
  skipButton: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    letterSpacing: 0.8,
    color: "#E30D76",
  } as TextStyle,
  navigationViewWrapper: {
    position: "absolute",
    bottom: Style.SCALE_UP_AND_DOWN(54),
    alignSelf: "center",
    flexDirection: "row",
    width: "100%",
    paddingRight: 34,
    paddingLeft: 34,
    justifyContent: "space-between",
    alignItems: "center",
  } as ViewStyle,
  pageIndicatorWrapper: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    right: 0,
    left: 0,
  } as ViewStyle,
});
