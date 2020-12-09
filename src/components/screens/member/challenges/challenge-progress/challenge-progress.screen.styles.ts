import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { Style, TOP_BAR } from "@styles";

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
    bottom: Style.adjust(Style.hasNotch ? 37 : 27),
    position: "absolute",
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  progressBarWrapper: {
    marginTop: -16,
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
    top: TOP_BAR.TOP_BAR_WITH_PAD + Style.adjust(24),
    right: Style.adjust(16),
  } as ViewStyle,
  pad: {
    height: TOP_BAR.TOP_BAR_WITH_PAD,
  } as ViewStyle,
});
