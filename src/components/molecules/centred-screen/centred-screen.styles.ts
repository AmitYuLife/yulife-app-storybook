import { ImageStyle, ViewStyle } from "react-native";
import { Style, StyleSheet, TOP_BAR } from "@styles";

export default StyleSheet.create({
  imageWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  } as ViewStyle,
  wrapper: {
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    flex: 1,
    flexDirection: "column",
    paddingTop: TOP_BAR.PADDING_TOP,
    height: "100%",
  } as ViewStyle,
  lottie: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  } as ImageStyle,
  webBackground: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
  } as ViewStyle,
  webBackgroundFullScreen: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  } as ViewStyle,
});
