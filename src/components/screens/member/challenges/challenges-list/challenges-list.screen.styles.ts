import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";
import { TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";

export default StyleSheet.create({
  background: {
    height: Style.DEVICE_HEIGHT,
    width: Style.DEVICE_WIDTH,
  } as ImageStyle,
  challengeSetWrapper: {
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    paddingHorizontal: Style.adjust(16),
    paddingBottom: Style.adjust(80),
    position: "absolute",
    right: 0,
    bottom: 0,
    top: TOP_BAR_WITH_PAD,
  } as ViewStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
});
