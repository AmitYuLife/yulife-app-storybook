import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

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
    marginHorizontal: Style.adjust(15),
    marginVertical: Style.adjust(15),
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
