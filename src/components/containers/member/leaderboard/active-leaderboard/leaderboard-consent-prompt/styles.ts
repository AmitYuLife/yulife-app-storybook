import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { LeaderboardPodium } from "../leaderboard-podium";
import { Style } from "@styles";

export const CROP_AMOUNT = 60;

export const captionStyle = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop:
      CROP_AMOUNT +
      LeaderboardPodium.HEIGHT -
      Style.platformSelect({
        ios: 120,
        android: 80,
        shortAndroid: 120,
        shorterAndroid: 140,
      }),
  } as ViewStyle,
  heading: {
    fontSize: Style.adjust(35),
    textAlign: "center",
    color: "#333",
  } as TextStyle,
  subheading: {
    fontSize: Style.adjust(15),
    lineHeight: Style.adjust(21),
    marginHorizontal: 20,
    color: "#333",
    textAlign: "center",
    marginTop: Style.adjust(15),
    letterSpacing: 1,
  } as TextStyle,
  button: {
    marginTop: Style.adjust(22),
  } as ViewStyle,
});
