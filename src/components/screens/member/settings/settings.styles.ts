import { ViewStyle } from "react-native";
import { Style } from "../../../../styles";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  leaderboardItemsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: Style.adjust(15),
    paddingHorizontal: Style.adjust(40),
  } as ViewStyle,
  notificationsItemsWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: Style.adjust(24),
    marginTop: Style.adjust(24),
  } as ViewStyle,
  fitnessTrackersItemWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: Style.adjust(24),
    marginTop: Style.adjust(24),
  } as ViewStyle,
  scrollContentContainer: {
    paddingBottom: Style.adjust(30),
  } as ViewStyle,
  scrollView: {
    flex: 1,
  } as ViewStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
});
