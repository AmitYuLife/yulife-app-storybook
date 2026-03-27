import { ImageStyle, ViewStyle } from "react-native";
import { Style, TOP_BAR, StyleSheet } from "@styles";

export default StyleSheet.create({
  imageWrapper: {
    bottom: 0,
    start: 0,
    position: "absolute",
    end: 0,
    width: "100%",
  } as ViewStyle,
  wrapper: {
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    flexDirection: "column",
    paddingTop: TOP_BAR.PADDING_TOP,
    height: "100%",
  } as ViewStyle,
  lottie: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  } as ImageStyle,
});
