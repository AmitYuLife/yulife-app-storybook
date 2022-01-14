import media from "@styles/media";
import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style, TOP_BAR } from "../../../../styles";

export default StyleSheet.create({
  flex: {
    flex: 1,
  } as ViewStyle,
  dailyStepsOnlineWrapper: {
    alignItems: "center",
    marginTop: Style.SCALE_UP_AND_DOWN(-16),
  } as ViewStyle,
  heading: {
    fontSize: Style.SCALE_UP_AND_DOWN(35),
  } as TextStyle,
  headingOffline: {
    fontSize: Style.SCALE_UP_AND_DOWN(25),
  } as TextStyle,
  lastUpdate: {
    color: "rgb(96,96,96)",
    fontSize: Style.SCALE_UP_AND_DOWN(15),
    lineHeight: Style.SCALE_UP_AND_DOWN(22),
    marginTop: Style.SCALE_UP_AND_DOWN(15),
    textAlign: "center",
    width: Style.SCALE_UP_AND_DOWN(235),
  } as TextStyle,
  navBarWrapper: {
    bottom: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 20 : 10),
    paddingBottom: Style.SCALE_UP_AND_DOWN(15),
    position: "absolute",
  } as ViewStyle,
  permissionText: {
    color: "rgb(96,96,96)",
    lineHeight: Style.SCALE_UP_AND_DOWN(22),
    marginBottom: Style.SCALE_UP_AND_DOWN(20),
    textAlign: "center",
    width: Style.SCALE_UP_AND_DOWN(300),
  } as TextStyle,
  counterWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  zIndex: {
    zIndex: 2,
  } as ViewStyle,
  dim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000000",
    opacity: 0.2,
  } as ViewStyle,
  topBarWrapper: {
    left: 0,
    top: TOP_BAR.PADDING_TOP,
    position: "absolute",
    right: 0,
  } as ViewStyle,
});

const coinsTooltipTop = media.select(
  [
    {
      condition: Platform.OS === "ios" && Style.hasNotch,
      value: Style.adjust(92),
    },
    {
      condition: Platform.OS === "ios",
      value: 74,
    },
  ],
  54
);

export const tooltipStyles = StyleSheet.create({
  coinsTooltip: {
    top: coinsTooltipTop,
    right: Style.SCALE_UP_AND_DOWN(10),
  } as ViewStyle,
  coinsCaret: {
    left: Style.SCALE_UP_AND_DOWN(155),
  } as ViewStyle,
  dailyStepsCtaTooltip: {
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 3,
  } as ViewStyle,
  highlightWrapper: { width: "100%" } as ViewStyle,
  navTooltip: {
    bottom: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 114 : 100),
    left: 0,
    right: 0,
    alignItems: "center",
  } as ViewStyle,
  questsNavCaret: {
    right: Style.SCALE_UP_AND_DOWN(124),
  } as ViewStyle,
  streaksTooltip: {
    top: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 175 : 145),
    right: Style.SCALE_UP_AND_DOWN(18),
  } as ViewStyle,
  streaksCaret: {
    left: Style.SCALE_UP_AND_DOWN(235),
  } as ViewStyle,
  leaderboardCaret: {
    left: Style.SCALE_UP_AND_DOWN(128),
  } as ViewStyle,
  rewardsCaret: {
    left: Style.SCALE_UP_AND_DOWN(262),
  } as ViewStyle,
});
