import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export const LEADERBOARD_ITEM_HEIGHT = Style.SCALE_Y_UP_AND_DOWN(48);

export default StyleSheet.create({
  nameWrapper: {
    flex: 1,
    paddingLeft: Style.SCALE_UP_AND_DOWN(10),
  } as ViewStyle,
  rankWrapper: {
    paddingLeft: Style.SCALE_UP_AND_DOWN(10),
    alignItems: "center",
    justifyContent: "center",
    width: Style.SCALE_UP_AND_DOWN(42),
  } as ViewStyle,
  rankImage: {
    height: 28,
    width: 28,
  } as ImageStyle,
  stepsWrapper: {
    paddingRight: Style.SCALE_UP_AND_DOWN(10),
    width: Style.SCALE_UP_AND_DOWN(80),
  } as ViewStyle,
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.SCALE_UP_AND_DOWN(18),
    lineHeight: Style.SCALE_UP_AND_DOWN(20),
  } as TextStyle,
  textHighlighted: {
    color: "black",
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as ViewStyle,
  textRight: {
    textAlign: "right",
  } as TextStyle,
  textSmall: {
    fontSize: Style.SCALE_UP_AND_DOWN(14),
  } as TextStyle,
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    flexDirection: "row",
    height: LEADERBOARD_ITEM_HEIGHT,
    paddingHorizontal: Style.SCALE_UP_AND_DOWN(15),
  } as ViewStyle,
  borderWrapper: {
    height: LEADERBOARD_ITEM_HEIGHT,
    marginHorizontal: Style.SCALE_UP_AND_DOWN(15),
    borderBottomColor: "rgb(244,237,140)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  } as ViewStyle,
  yucoinWrapper: {
    width: Style.SCALE_UP_AND_DOWN(50),
  } as ViewStyle,
});
