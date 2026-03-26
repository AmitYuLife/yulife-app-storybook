import { Colours, Style, StyleSheet } from "@styles";
import { TextStyle, ViewStyle } from "react-native";

export default StyleSheet.create({
  opponentCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingStart: Style.adjust(24),
    paddingEnd: Style.adjust(24),
    paddingTop: Style.adjust(8),
    paddingBottom: Style.adjust(8),
    backgroundColor: Colours.neutral.white,
    borderBottomWidth: 1,
    borderBottomColor: Colours.neutral.n100,
  } as ViewStyle,
  firstCard: {
    borderTopWidth: 1,
    borderTopColor: Colours.neutral.n100,
    marginTop: -1,
  } as ViewStyle,
  nameSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  nameText: {
    color: Colours.neutral.n800,
    fontSize: Style.adjust(16),
    marginStart: Style.adjust(2),
  } as TextStyle,
  duelImageWrapper: {
    marginTop: Style.adjust(-4),
  } as ViewStyle,
});
