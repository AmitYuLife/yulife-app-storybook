import { StyleSheet, ViewStyle, Platform } from "react-native";
import { Style } from "../../../../../styles";
import { LIST_PAD_HEIGHT } from "../leaderboards.screen.styles";

const MULTIPLIER = 1.1;

export const BODY_AVATAR_HEIGHT = Style.SCALE_UP_AND_DOWN(128.5 * MULTIPLIER);
export const BODY_AVATAR_WIDTH = Style.SCALE_UP_AND_DOWN(53 * MULTIPLIER);
export const SVG_HEIGHT = Style.SCALE_UP_AND_DOWN(150 * MULTIPLIER);

const getIOSValue = (value: number, additionalNotchValue = 2) => {
  return Style.hasNotch ? value + additionalNotchValue : value;
};

const getAndroidValue = (value: number, additionalValue = 4) => {
  if (Style.isShortAndLowScaledPixelAndroid()) {
    return value + additionalValue;
  }

  if (Style.isTallAndLowScaledPixelAndroid()) {
    return value - additionalValue;
  }

  return value;
};

export const avatarStyles: Record<string, ViewStyle> = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: Style.DEVICE_WIDTH,
    height: LIST_PAD_HEIGHT,
  } as ViewStyle,
  avatarBase: {
    position: "absolute",
    top: 28,
  },
  avatarWrapper: {
    overflow: "hidden",
    justifyContent: "flex-start",
    height: BODY_AVATAR_HEIGHT,
    width: BODY_AVATAR_WIDTH,
    alignItems: "center",
  } as ViewStyle,
  avatar2: {
    marginTop: Style.adjust(Platform.select({ android: getAndroidValue(56), ios: getIOSValue(53, 4) })),
    marginLeft: Style.SCALE_UP_AND_DOWN(71),
  } as ViewStyle,
  avatarEmpty2: {
    marginTop: Style.adjust(Platform.select({ android: Style.isShortAndroid() ? 72 : 74, ios: getIOSValue(62, 4) })),
    marginLeft: Style.SCALE_UP_AND_DOWN(80),
  } as ViewStyle,
  avatar1: {
    marginTop: Style.adjust(Platform.select({ android: getAndroidValue(30), ios: getIOSValue(29) })),
    marginLeft: Style.SCALE_UP_AND_DOWN(159),
  } as ViewStyle,
  avatarEmpty1: {
    marginTop: Style.adjust(Platform.select({ android: Style.isShortAndroid() ? 47.5 : 49, ios: getIOSValue(37) })),
    marginLeft: Style.SCALE_UP_AND_DOWN(167),
  } as ViewStyle,
  avatar3: {
    marginTop: Style.adjust(Platform.select({ android: getAndroidValue(68), ios: getIOSValue(64, 5) })),
    marginLeft: Style.SCALE_UP_AND_DOWN(244),
  } as ViewStyle,
  avatarEmpty3: {
    marginTop: Style.adjust(Platform.select({ android: Style.isShortAndroid() ? 83.5 : 85, ios: getIOSValue(73, 5) })),
    marginLeft: Style.SCALE_UP_AND_DOWN(252),
  } as ViewStyle,
});
