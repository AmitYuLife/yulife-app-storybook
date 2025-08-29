import { ImageStyle, ViewStyle } from "react-native";
import { Style, StyleSheet } from "@styles";

export default StyleSheet.create({
  background: {
    height: Style.DEVICE_HEIGHT,
    width: Style.DEVICE_WIDTH,
  } as ImageStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
});
