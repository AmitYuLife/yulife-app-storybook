import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export const LEADERBOARD_ITEM_HEIGHT = Style.adjust(48);

const AVATAR_WIDTH = Style.adjust(40);

export default StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    flexDirection: "row",
    height: LEADERBOARD_ITEM_HEIGHT,
    marginHorizontal: 10,
  } as ViewStyle,
  nameWrapper: {
    flex: 1,
    paddingLeft: Style.adjust(10),
  } as ViewStyle,
  rankWrapper: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: Style.adjust(42),
  } as ViewStyle,
  rankImage: {
    height: Style.adjust(33),
    width: Style.adjust(25),
  } as ImageStyle,
  stepsWrapper: {
    paddingRight: Style.adjust(10),
    width: Style.adjust(80),
  } as ViewStyle,
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.adjust(18),
  } as TextStyle,
  textHighlighted: {
    color: "black",
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as ViewStyle,
  lockedCellWrapper: {
    backgroundColor: "#6FA4DF",
    paddingTop: Style.adjust(16),
    paddingBottom: Style.adjust(8),
    borderRadius: Style.adjust(8),
    alignItems: "center",
    overflow: "hidden",
  } as ViewStyle,
  lockedCellAvatarWrapper: {
    marginTop: Style.adjust(-4),
  } as ViewStyle,
  lockedCellBorderWrapper: {
    marginTop: Style.adjust(-4),
  } as ViewStyle,
  lockedCellTextStyle: {
    color: "white",
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as ViewStyle,
  emptyAvatarHeadWrapper: {
    height: "100%",
    width: AVATAR_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  avatarHeadWrapper: {
    height: "100%",
    width: AVATAR_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  textRight: {
    textAlign: "right",
  } as TextStyle,
  textSmall: {
    fontSize: Style.adjust(14),
  } as TextStyle,
  borderWrapper: {
    height: LEADERBOARD_ITEM_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingBottom: 2,
  } as ViewStyle,
  yucoinWrapper: {} as ViewStyle,
});
