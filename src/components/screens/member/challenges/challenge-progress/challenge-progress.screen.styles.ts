import { ImageStyle, ViewStyle } from "react-native";
import { Style, NAV_BAR, StyleSheet } from "@styles";
import { initialWindowMetrics } from "react-native-safe-area-context";

export default StyleSheet.create({
  backgroundImage: {
    bottom: 0,
    start: 0,
    position: "absolute",
    end: 0,
    width: "100%",
  } as ImageStyle,
  meditationButtonWrapper: {
    position: "absolute",
    start: 0,
    end: 0,
    bottom: NAV_BAR.getPositionBottom() + Style.adjust(84),
  } as ViewStyle,
  navBarWrapper: {
    alignItems: "center",
    bottom: Style.adjust(27) + initialWindowMetrics.insets.bottom,
    position: "absolute",
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
  itemsWrapper: {
    marginTop: Style.adjust(5),
  } as ViewStyle,
  logoWrapper: {
    flexDirection: "row",
    marginStart: Style.SCALE_UP_AND_DOWN(16),
    marginTop: Style.SCALE_UP_AND_DOWN(100),
  } as ViewStyle,
  meditationInstructionsWrapper: {
    width: Style.SCALE_UP_AND_DOWN(Style.DEVICE_WIDTH + 60),
    marginTop: Style.SCALE_UP_AND_DOWN(-40),
    flexDirection: "column",
  } as ViewStyle,
  exitChallengeWrapper: {
    position: "absolute",
    top: Style.adjust(68),
    right: Style.adjust(16),
  } as ViewStyle,
  faqUrl: {
    alignItems: "flex-end",
    marginEnd: Style.adjust(35),
    bottom: Style.adjust(20),
  } as ViewStyle,
  buttonLogo: {
    marginBottom: 3,
  } as ViewStyle,
});
