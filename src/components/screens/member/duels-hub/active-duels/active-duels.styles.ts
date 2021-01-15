import { Style, Colours } from "@styles";
import { StyleSheet, ViewStyle } from "react-native";

export default StyleSheet.create({
  wrapper: {
    width: Style.DEVICE_WIDTH,
    backgroundColor: Colours.neutral.white,
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
  list: {
    paddingBottom: Style.adjust(78),
  } as ViewStyle,
});
