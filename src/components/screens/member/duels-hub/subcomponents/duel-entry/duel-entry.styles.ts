import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours } from "@styles";

export const DUEL_ENTRY_HEIGHT = 48;

export default StyleSheet.create({
  activeWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
    marginBottom: 8,
    paddingHorizontal: 8,
    backgroundColor: Colours.blue.b100,
    height: DUEL_ENTRY_HEIGHT,
    overflow: "hidden",
  } as ViewStyle,
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    backgroundColor: Colours.neutral.n50,
    height: DUEL_ENTRY_HEIGHT,
    overflow: "hidden",
  } as ViewStyle,
  lastMargin: {
    marginBottom: 24,
  } as ViewStyle,
  yumojiSection: {
    flex: 2,
    flexDirection: "row",
    marginRight: 8,
  } as ViewStyle,
  text: {
    fontSize: 18,
    lineHeight: 24,
  } as TextStyle,
  victory: {
    color: "#5DB489",
  } as TextStyle,
  defeat: {
    color: "#F86F63",
  } as TextStyle,
  date: {
    fontSize: 12,
  } as TextStyle,
  centered: {
    justifyContent: "center",
    alignItems: "stretch",
  } as ViewStyle,
  duelStatusWrapper: { flex: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" } as ViewStyle,
  firstItem: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  } as ViewStyle,
  lastItem: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  } as ViewStyle,
  pastDuelTextWrapper: {
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
});
