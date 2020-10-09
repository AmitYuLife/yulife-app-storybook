import { StyleSheet, ViewStyle } from "react-native";
import { Colours } from "@styles";

export const DUEL_TAB_HEIGHT = 72;

export default StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colours.neutral.white,
    height: DUEL_TAB_HEIGHT,
  } as ViewStyle,
  tab: {
    paddingRight: 24,
  } as ViewStyle,
});
