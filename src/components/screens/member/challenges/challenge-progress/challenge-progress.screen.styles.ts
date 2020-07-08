import { ImageStyle, Platform, StyleSheet, ViewStyle } from "react-native";
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
