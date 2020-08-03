import { Style } from "@styles";
import { StyleSheet, Platform, ViewStyle } from "react-native";

export const BODY_AVATAR_HEIGHT = Style.SCALE_UP_AND_DOWN(128.5);
export const BODY_AVATAR_WIDTH = Style.SCALE_UP_AND_DOWN(53);

const getIOSValue = (value: number, additionalNotchValue = 2) => {
  return Style.hasNotch ? value + additionalNotchValue : value;
};

const getAndroidValue = (value: number, additionalValueUp = 4, additionalValueDown = 4) => {
  if (Style.isShortAndLowScaledPixelAndroid()) {
    return value + additionalValueUp;
  }

  if (Style.isTallAndLowScaledPixelAndroid()) {
    return value - additionalValueDown;
  }

  return value;
};

export const LEADERBOARD_PODIUM_HEIGHT = Platform.select({ ios: Style.SCALE_UP_AND_DOWN(320), android: 328 });

const styles = StyleSheet.create({
  wrapper: {
    height: LEADERBOARD_PODIUM_HEIGHT,
  } as ViewStyle,
  avatarBase: {
    position: "absolute",
    top: 28,
  },
});

export const dynamicStyles = StyleSheet.create({
  avatar1: {
    marginTop: Style.adjust(Platform.select({ android: getAndroidValue(45, 6), ios: getIOSValue(42) })),
    marginLeft: Style.SCALE_UP_AND_DOWN(162),
  },
  avatarEmpty1: {
    marginTop: Style.adjust(Platform.select({ android: Style.isShortAndroid() ? 47.5 : 49, ios: getIOSValue(37) })),
    marginLeft: Style.SCALE_UP_AND_DOWN(167),
  },
  avatar2: {
    marginTop: Style.adjust(Platform.select({ android: getAndroidValue(72, 10, 7), ios: getIOSValue(68, 4) })),
    marginLeft: Style.SCALE_UP_AND_DOWN(76),
  },
  avatarEmpty2: {
    marginTop: Style.adjust(Platform.select({ android: Style.isShortAndroid() ? 72 : 74, ios: getIOSValue(62, 4) })),
    marginLeft: Style.SCALE_UP_AND_DOWN(80),
  },
  avatar3: {
    marginTop: Style.adjust(Platform.select({ android: getAndroidValue(85, 8, 10), ios: getIOSValue(78, 5) })),
    marginLeft: Style.SCALE_UP_AND_DOWN(247),
  },
  avatarEmpty3: {
    marginTop: Style.adjust(Platform.select({ android: Style.isShortAndroid() ? 83.5 : 85, ios: getIOSValue(73, 5) })),
    marginLeft: Style.SCALE_UP_AND_DOWN(252),
  },
}) as any;

export default styles;
