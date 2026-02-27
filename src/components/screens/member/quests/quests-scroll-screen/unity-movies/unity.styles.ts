import { Colours, Style } from "@styles/index";
import { TextStyle, ViewStyle, ImageStyle } from "react-native";

import { StyleSheet } from "@styles";
const styles = StyleSheet.create({
  heading: {
    paddingHorizontal: Style.adjust(40),
  } as ViewStyle,
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
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
  unityContainer: {
    width: Style.DEVICE_WIDTH,
    height: "100%",
    ...StyleSheet.absoluteFillObject,
    elevation: 3,
  },
  fullScreenBackground: {
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
  afterword: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    paddingHorizontal: Style.adjust(38),
  } as ViewStyle,
  backgroundImage: {
    position: "absolute",
    top: 0,
    start: 0,
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  } as ImageStyle,
  afterwordText: {
    marginTop: Style.adjust(Style.DEVICE_HEIGHT < 844 ? 78 : 108),
  } as ViewStyle,
  yugiContainer: {
    position: "absolute",
  } as ViewStyle,
  lottie: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  } as ViewStyle,
  yucoinBadgeWrapper: {
    width: Style.adjust(218),
    height: Style.adjust(218),
  } as ViewStyle,
  yucoinBadge: {
    ...StyleSheet.absoluteFillObject,
    margin: 9,
  } as ViewStyle,
});

export default styles;
