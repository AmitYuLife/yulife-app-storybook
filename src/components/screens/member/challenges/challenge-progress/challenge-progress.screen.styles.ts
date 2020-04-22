import { ImageStyle, Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
  backgroundImage: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    width: "100%",
  } as ImageStyle,
  instructionWrapper: {
    flexBasis: Style.SCALE_UP_AND_DOWN(40),
    marginLeft: Style.SCALE_UP_AND_DOWN(16),
    marginTop: Style.SCALE_UP_AND_DOWN(-30),
  } as ViewStyle,
  instructionHeading: {
    fontSize: Style.SCALE_UP_AND_DOWN(25),
    color: "#333333",
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  instructionText: {
    fontSize: Style.SCALE_UP_AND_DOWN(15),
    lineHeight: Style.SCALE_UP_AND_DOWN(20),
    width: Style.SCALE_UP_AND_DOWN(190),
    textAlignVertical: "bottom",
    color: "#333333",
    fontFamily: Style.FONT_FAMILY_PRIMARY,
  } as TextStyle,
  navBarWrapper: {
    alignItems: "center",
    bottom: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 37 : 27),
    position: "absolute",
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  progressBarWrapper: {
    marginTop: Style.SCALE_UP_AND_DOWN(6),
  } as ViewStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
  logo: {
    height: Style.SCALE_UP_AND_DOWN(60),
    width: Style.SCALE_UP_AND_DOWN(60),
  } as ImageStyle,
  headspaceBorder: {
    borderWidth: 1,
    borderColor: "rgba(230, 230, 230, 0.6)",
    borderRadius: Style.SCALE_UP_AND_DOWN(16),
    marginRight: Style.SCALE_UP_AND_DOWN(10),
  } as ImageStyle,
  logoWrapper: {
    flexDirection: "row",
    marginLeft: Style.SCALE_UP_AND_DOWN(16),
    marginTop: Style.SCALE_UP_AND_DOWN(100),
  } as ViewStyle,
  meditationInstructionsWrapper: {
    width: Style.SCALE_UP_AND_DOWN(Style.DEVICE_WIDTH + 60),
    marginTop: Style.SCALE_UP_AND_DOWN(-40),
    flexDirection: "column",
  } as ViewStyle,
  exitChallengeWrapper: {
    position: "absolute",
    top: Style.SCALE_UP_AND_DOWN(
      Platform.select({
        ios: 120,
        android: 100,
      })
    ),
    right: Style.SCALE_UP_AND_DOWN(16),
  } as ViewStyle,
});
