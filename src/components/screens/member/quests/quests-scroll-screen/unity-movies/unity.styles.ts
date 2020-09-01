import { Style } from "@styles/index";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    lineHeight: 32,
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    paddingBottom: 16,
  } as TextStyle,
  subheading: {
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    maxWidth: 203,
    marginHorizontal: "auto",
  } as TextStyle,
  headingWrapper: {
    top: 80,
    left: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: Style.DEVICE_WIDTH,
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
