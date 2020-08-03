import { StyleSheet, Platform, ViewStyle, TextStyle } from "react-native";
import { LeaderboardPodium } from "../leaderboard-podium";
import { Style } from "@styles";

export const CROP_AMOUNT = 60;

export const captionStyle = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: CROP_AMOUNT + LeaderboardPodium.HEIGHT - Platform.select({ ios: 120, android: 80 }),
  } as ViewStyle,
  heading: {
    fontSize: Style.adjust(35),
    textAlign: "center",
    color: "#333",
  } as TextStyle,
  subheading: {
    fontSize: Style.adjust(15),
    lineHeight: Style.adjust(21),
    marginHorizontal: Style.adjust(28),
    color: "#333",
    textAlign: "center",
    marginTop: Style.adjust(15),
  } as TextStyle,
  button: {
    marginTop: Style.adjust(22),
  } as ViewStyle,
});
