import { Style } from "@styles";
import { StyleSheet, ViewStyle, Platform } from "react-native";
import deviceInfoModule from "react-native-device-info";

export const LEADERBOARD_ITEM_HEIGHT = Style.adjust(48);

export const baseStyles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: LEADERBOARD_ITEM_HEIGHT,
  } as ViewStyle,
  borderWrapper: {
    height: LEADERBOARD_ITEM_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingBottom: 2,
  } as ViewStyle,
});

export const floatingItemStyles = StyleSheet.create({
  wrapper: {
    height: LEADERBOARD_ITEM_HEIGHT,
    position: "absolute",
    bottom: getBottomPosition(),
    left: 0,
    right: 0,
    borderRadius: Style.adjust(8),
    alignItems: "center",
    overflow: "hidden",
  } as ViewStyle,
  background: {
    position: "absolute",
    left: 8,
    right: 8,
    top: 0,
    bottom: 0,
    backgroundColor: "#6FA4DF",
    borderRadius: 8,
  } as ViewStyle,
  button: {
    height: "100%",
    width: "100%",
  } as ViewStyle,
  borderWrapper: {
    alignItems: "center",
    marginTop: Platform.select({ ios: 4, android: 0 }),
  } as ViewStyle,
  text: {
    color: "white",
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as ViewStyle,
});

function getBottomPosition() {
  if (Platform.OS === "android") {
    return 0;
  }

  if (deviceInfoModule.hasNotch()) {
    return 16;
  }

  return 4;
}
