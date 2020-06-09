import { ImageStyle, StyleSheet, ViewStyle, TextStyle, Platform } from "react-native";
import { Style } from "../../../../../styles";
import { LIST_PAD_HEIGHT } from "../leaderboards.screen.styles";

export default StyleSheet.create({
  leaderboardNameAbsolute: {
    position: "absolute",
    top: Style.adjust(16),
    left: Style.SCALE_UP_AND_DOWN(32),
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  row: {
    flexDirection: "row",
  } as ViewStyle,
  leaderboardNameWrapper: {
    alignSelf: "center",
    alignItems: "center",
  } as ViewStyle,
  leaderboardInfo: {
    height: Style.adjust(32),
    width: Style.adjust(32),
    right: Style.adjust(2),
    top: Style.adjust(10),
    position: "absolute",
  } as ViewStyle,
  leaderboardName: {
    color: "#333333",
    fontSize: Style.adjust(18),
    width: Style.DEVICE_WIDTH / 3,
    textAlign: "center",
    lineHeight: Style.adjust(16),
    fontFamily: Style.FONT_FAMILY_PRIMARY,
  } as TextStyle,
  leaderboardSteps: {
    color: "#000000",
    fontSize: Style.adjust(18),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  changeLeaderboardArrow: {
    marginTop: Style.adjust(4),
    marginLeft: Style.adjust(16),
    height: Style.adjust(32),
    width: Style.adjust(32),
  } as ImageStyle,
});

export const avatarStyles: Record<string, ViewStyle> = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: Style.DEVICE_WIDTH,
    height: LIST_PAD_HEIGHT,
  } as ViewStyle,
  avatarBase: { position: "absolute" } as ViewStyle,
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
