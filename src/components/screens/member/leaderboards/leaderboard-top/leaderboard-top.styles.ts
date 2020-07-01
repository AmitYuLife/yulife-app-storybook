import { StyleSheet, ViewStyle, Platform } from "react-native";
import { hasNotch } from "react-native-device-info";
import { Style } from "../../../../../styles";
import { LIST_PAD_HEIGHT } from "../leaderboards.screen.styles";

export const avatarStyles: Record<string, ViewStyle> = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: Style.DEVICE_WIDTH,
    height: LIST_PAD_HEIGHT,
  } as ViewStyle,
  avatarBase: {
    position: "absolute",
    top: 28,
  } as ViewStyle,
  avatar2: {
    marginTop: Style.SCALE_UP_AND_DOWN(
      Platform.select({ android: Style.isShortAndroid() ? 73 : 75, ios: hasNotch() ? 73 : 75 })
    ),
    marginLeft: Style.SCALE_UP_AND_DOWN(71),
  } as ViewStyle,
  avatarEmpty2: {
    marginTop: Style.SCALE_UP_AND_DOWN(
      Platform.select({ android: Style.isShortAndroid() ? 72 : 74, ios: hasNotch() ? 71 : 73 })
    ),
    marginLeft: Style.SCALE_UP_AND_DOWN(80),
  } as ViewStyle,
  avatar1: {
    marginTop: Style.SCALE_UP_AND_DOWN(
      Platform.select({ android: Style.isShortAndroid() ? 49.5 : 51, ios: hasNotch() ? 49 : 51 })
    ),
    marginLeft: Style.SCALE_UP_AND_DOWN(159),
  } as ViewStyle,
  avatarEmpty1: {
    marginTop: Style.SCALE_UP_AND_DOWN(
      Platform.select({ android: Style.isShortAndroid() ? 47.5 : 49, ios: hasNotch() ? 47 : 49 })
    ),
    marginLeft: Style.SCALE_UP_AND_DOWN(167),
  } as ViewStyle,
  avatar3: {
    marginTop: Style.SCALE_UP_AND_DOWN(
      Platform.select({ android: Style.isShortAndroid() ? 84 : 86, ios: hasNotch() ? 84.5 : 86 })
    ),
    marginLeft: Style.SCALE_UP_AND_DOWN(244),
  } as ViewStyle,
  avatarEmpty3: {
    marginTop: Style.SCALE_UP_AND_DOWN(
      Platform.select({ android: Style.isShortAndroid() ? 83.5 : 85, ios: hasNotch() ? 83 : 85 })
    ),
    marginLeft: Style.SCALE_UP_AND_DOWN(252),
  } as ViewStyle,
});
