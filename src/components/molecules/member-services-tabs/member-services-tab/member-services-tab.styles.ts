import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "../../../../styles";

export default StyleSheet.create({
  active: {
    borderBottomColor: Colours.rewardsTabs.active,
    borderBottomWidth: 1,
  } as ViewStyle,
  couponWrapper: {
    marginRight: Style.SCALE_UP_AND_DOWN(12),
  } as ImageStyle,
  couponWrapperFlipped: {
    marginLeft: Style.SCALE_UP_AND_DOWN(12),
  } as ImageStyle,
  flipped: {
    flexDirection: "row-reverse",
  } as ViewStyle,
  text: {
    color: Colours.rewardsTabs.inactive,
  } as TextStyle,
  textActive: {
    color: Colours.rewardsTabs.active,
  } as TextStyle,
  wrapper: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: Style.SCALE_UP_AND_DOWN(16),
  } as ViewStyle,
});
