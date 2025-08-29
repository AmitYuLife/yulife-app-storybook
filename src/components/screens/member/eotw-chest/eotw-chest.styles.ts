import { TextStyle, ViewStyle } from "react-native";
import { Style, StyleSheet } from "@styles";

export default StyleSheet.create({
  headingWrapper: {
    top: Style.adjust(80),
    start: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: Style.DEVICE_WIDTH,
  } as TextStyle,
  subHeadingWrapper: {
    display: Style.DEVICE_HEIGHT < 700 ? "none" : "flex",
    position: Style.DEVICE_HEIGHT < 700 ? "relative" : "absolute",
    bottom: Style.adjust(120),
    start: 0,
    alignItems: "center",
    justifyContent: "center",
    width: Style.DEVICE_WIDTH,
  } as TextStyle,
  lottie: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  page: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  buttonWrapper: {
    bottom: Style.adjust(32),
    start: 0,
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
  },
  congratulatoryPage: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  congratulatoryContent: {
    position: "relative",
    alignItems: "center",
    paddingHorizontal: Style.adjust(52),
    marginTop: Style.adjust(Style.DEVICE_HEIGHT < 844 ? 124 : 154),
  } as ViewStyle,
  congratulatoryText: {
    marginTop: Style.adjust(16),
  },
  chestPage: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
  },
  chestTitleWrapper: {
    position: "absolute",
    top: Style.adjust(84),
    width: Style.DEVICE_WIDTH,
    paddingHorizontal: Style.adjust(58),
  } as ViewStyle,
  spaceTravelPage: {
    ...StyleSheet.absoluteFillObject,
    paddingHorizontal: Style.adjust(25),
    justifyContent: "flex-end",
    alignItems: "center",
  },
  spaceTravelText: {
    top: Style.adjust(84),
    position: "absolute",
  },
});
