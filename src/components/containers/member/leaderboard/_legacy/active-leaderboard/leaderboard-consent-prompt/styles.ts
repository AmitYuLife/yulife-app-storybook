import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { LeaderboardPodium } from "../leaderboard-podium";
import { Style } from "@styles";

export const CROP_AMOUNT = 60;
export const SUBHEADING_COLOR = "#333";
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
    marginHorizontal: 20,
    marginTop: Style.adjust(15),
  } as ViewStyle,
  button: {
    marginTop: Style.adjust(22),
  } as ViewStyle,
});
