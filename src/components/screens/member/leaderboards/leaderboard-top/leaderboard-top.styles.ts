import { StyleSheet, ViewStyle, Platform } from "react-native";
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
    marginTop: Style.SCALE_UP_AND_DOWN(Platform.select({ android: Style.isShortAndroid() ? 75 : 77, ios: 78 })),
    marginLeft: Style.SCALE_UP_AND_DOWN(84),
  } as ViewStyle,
  avatarEmpty2: {
    marginTop: Style.SCALE_UP_AND_DOWN(Platform.select({ android: Style.isShortAndroid() ? 73 : 76, ios: 76 })),
    marginLeft: Style.SCALE_UP_AND_DOWN(85),
  } as ViewStyle,
  avatar1: {
    marginTop: Style.SCALE_UP_AND_DOWN(Platform.select({ android: Style.isShortAndroid() ? 50 : 53, ios: 52 })),
    marginLeft: Style.SCALE_UP_AND_DOWN(162),
  } as ViewStyle,
  avatarEmpty1: {
    marginTop: Style.SCALE_UP_AND_DOWN(Platform.select({ android: Style.isShortAndroid() ? 48 : 51.5, ios: 50 })),
    marginLeft: Style.SCALE_UP_AND_DOWN(170),
  } as ViewStyle,
  avatar3: {
    marginTop: Style.SCALE_UP_AND_DOWN(Platform.select({ android: Style.isShortAndroid() ? 86 : 89, ios: 88 })),
    marginLeft: Style.SCALE_UP_AND_DOWN(236),
  } as ViewStyle,
  avatarEmpty3: {
    marginTop: Style.SCALE_UP_AND_DOWN(Platform.select({ android: Style.isShortAndroid() ? 84 : 87, ios: 86 })),
    marginLeft: Style.SCALE_UP_AND_DOWN(247),
  } as ViewStyle,
});
