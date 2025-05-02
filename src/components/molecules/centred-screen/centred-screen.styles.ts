import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { Style, TOP_BAR } from "@styles";

export default StyleSheet.create({
  imageWrapper: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    width: "100%",
  } as ViewStyle,
  wrapper: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    paddingTop: TOP_BAR.PADDING_TOP,
  } as ViewStyle,
  lottie: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  } as ImageStyle,
});
