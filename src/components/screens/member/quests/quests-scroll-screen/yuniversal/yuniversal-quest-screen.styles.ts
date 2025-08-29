import { ViewStyle, ImageStyle } from "react-native";
import { Style, Media, TOP_BAR, StyleSheet } from "@styles";
import { PADDING_TOP } from "@styles/top-bar.styles";

export const LEVELS_WRAPPER_HEIGHT = (Style.DEVICE_WIDTH * 812) / 375;
export const LEVELS_WRAPPER_WIDTH = Style.DEVICE_WIDTH;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  } as ViewStyle,
  backgroundLottie: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
    position: "absolute",
  } as ImageStyle,
  topBarWrapper: {
    start: 0,
    position: "absolute",
    end: 0,
    top: PADDING_TOP,
  } as ViewStyle,
  levelsWrapper: {
    position: "absolute",
    bottom: Style.DEVICE_HEIGHT > Media.DEVICES.iPhone8.height ? 0 : Style.adjust(-40),
    width: Style.DEVICE_WIDTH,
    height: (Style.DEVICE_WIDTH * 812) / 375,
  } as ViewStyle,
  leftIconList: {
    position: "absolute",
    start: Style.adjust(16),
    top: TOP_BAR.TOP_BAR_WITH_PAD,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
});
