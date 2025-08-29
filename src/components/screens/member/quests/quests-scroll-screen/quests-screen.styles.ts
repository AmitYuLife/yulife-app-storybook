import { ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style, TOP_BAR, StyleSheet } from "@styles";

export function scrollViewAdjustPosition() {
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
  scrollViewWrapper: {
    ...StyleSheet.absoluteFillObject,
    ...scrollViewAdjustPosition(),
  } as ViewStyle,
  topBarWrapper: {
    left: 0,
    position: "absolute",
    right: 0,
    top: TOP_BAR.PADDING_TOP,
  } as ViewStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
  leftIconList: {
    position: "absolute",
    left: Style.adjust(16),
    top: TOP_BAR.TOP_BAR_WITH_PAD,
    alignItems: "center",
    justifyContent: "center",
  },
  accessibilityMapWrapper: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
    position: "absolute",
  },
});
