import { StyleSheet, ViewStyle, ImageStyle } from "react-native";
import { Style } from "@styles";
import { PADDING_TOP, TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  } as ViewStyle,
  backgroundImage: {
    width: Style.DEVICE_WIDTH,
    height: (Style.DEVICE_WIDTH * 812) / 375,
    position: "absolute",
  } as ImageStyle,
  titleWrapper: {
    position: "absolute",
    top: TOP_BAR_WITH_PAD + Style.adjust(30),
    left: 0,
    right: 0,
  } as ViewStyle,
  topBarWrapper: {
    left: 0,
    position: "absolute",
    right: 0,
    top: PADDING_TOP,
  } as ViewStyle,
});
