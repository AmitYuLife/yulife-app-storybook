import { StyleSheet, ViewStyle, Platform } from "react-native";
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
    position: "absolute",
    right: 0,
    top: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
  } as ViewStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
});
