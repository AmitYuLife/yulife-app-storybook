import { Platform, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";

export default StyleSheet.create({
  absolute: {
    position: "absolute",
  } as ViewStyle,
  fullScreen: {
    ...StyleSheet.absoluteFillObject,
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  } as ViewStyle,
  popoverBody: {
    position: "absolute",
    left: Style.adjust(17),
    padding: Style.adjust(16),
    borderRadius: Style.adjust(10),
    borderWidth: Style.adjust(1),
    minWidth: Style.adjust(120),
    minHeight: Style.adjust(80),
  } as ViewStyle,
  popoverBeak: {
    position: "absolute",
    top: Style.adjust(10),
    left: Platform.select({
      ios: -1,
      android: 0,
    }),
  } as ViewStyle,
  popoverBeakRight: {
    position: "absolute",
    top: Style.adjust(10),
    right: Platform.select({
      ios: -1,
      android: 0,
    }),
  } as ViewStyle,
  shadowProp: {
    shadowColor: Colours.neutral.black,
    shadowOffset: { width: Style.adjust(8), height: Style.adjust(8) },
    shadowRadius: 0,
    elevation: 8,
  } as ViewStyle,
  closeWrapper: {
    position: "absolute",
    top: Style.adjust(8),
    right: Style.adjust(8),
  } as ViewStyle,
});
