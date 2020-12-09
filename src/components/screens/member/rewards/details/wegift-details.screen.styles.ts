import { StyleSheet, ViewStyle } from "react-native";
import { Style, TOP_BAR } from "../../../../../styles";

export default StyleSheet.create({
  rewardTabsWrapper: {
    alignItems: "center",
  } as ViewStyle,
  scrollViewContentWrapper: {
    paddingHorizontal: Style.SCALE_UP_AND_DOWN(15),
  } as ViewStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
  pad: {
    height: TOP_BAR.TOP_BAR_WITH_PAD,
  } as ViewStyle,
});
