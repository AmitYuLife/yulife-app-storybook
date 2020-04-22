import { Platform, StyleSheet, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../../styles";

function scrollViewAdjustPosition() {
  if (isIphoneX()) {
    return {
      bottom: -10,
      top: -36,
    };
  }
  return {
    bottom: 0,
    top: 0,
  };
}

export default StyleSheet.create({
  navBarWrapper: {
    alignItems: "center",
    bottom: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 20 : 10),
    paddingBottom: Style.SCALE_UP_AND_DOWN(15),
    left: 0,
    position: "absolute",
    right: 0,
  } as ViewStyle,
  scrollViewWrapper: {
    ...StyleSheet.absoluteFillObject,
    ...scrollViewAdjustPosition(),
  } as ViewStyle,
  topBarWrapper: {
    left: 0,
    paddingBottom: Style.SCALE_UP_AND_DOWN(8),
    paddingTop: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 30 : Platform.OS === "android" ? 0 : 20),
    position: "absolute",
    right: 0,
    top: 0,
  } as ViewStyle,
  wrapper: {
    flex: 1,
    height: Style.DEVICE_HEIGHT,
  } as ViewStyle,
});
