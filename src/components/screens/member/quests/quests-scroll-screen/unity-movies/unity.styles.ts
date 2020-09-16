import { Style } from "@styles/index";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    lineHeight: 32,
    letterSpacing: 1,
    paddingBottom: 16,
    paddingHorizontal: 30,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  subheading: {
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: 1,
    paddingHorizontal: 30,
    marginHorizontal: "auto",
    fontFamily: Style.FONT_FAMILY_PRIMARY,
  } as TextStyle,
  headingWrapper: {
    top: 80,
    left: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: Style.DEVICE_WIDTH,
  } as TextStyle,
  infoText: {
    flex: 6,
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  infoHeading: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 24,
    width: Style.DEVICE_WIDTH,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  infoBody: {
    fontSize: 15,
    lineHeight: 30,
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    width: Style.DEVICE_WIDTH,
    paddingHorizontal: 30,
    paddingBottom: 24,
    marginHorizontal: "auto",
  } as TextStyle,
  coinWrapper: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    width: Style.DEVICE_WIDTH,
    paddingTop: 60,
  } as ViewStyle,
  coinScale: {
    transform: [{ scale: 1.5 }],
  } as ViewStyle,
  buttonWrapper: {
    bottom: 40,
    left: 0,
    position: "absolute",
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
  fullScreenLottie: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
});

export default styles;
