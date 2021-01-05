import { Colours, Style } from "@styles";
import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";

export default StyleSheet.create({
  emptyStateOutsideWrapper: {
    backgroundColor: Colours.neutral.n50,
    paddingBottom: 0,
    borderRadius: 8,
    flexDirection: "row",
    margin: 12,
    alignItems: "flex-end",
  } as ViewStyle,
  emptyStateWrapper: {
    flex: 1,
    padding: 24,
    paddingLeft: 0,
    flexDirection: "row",
  } as ViewStyle,
  emptyStateText: {
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    color: Colours.neutral.n500,
    paddingLeft: 24,
    // maxWidth: 260,
  } as TextStyle,
  image: {
    paddingLeft: 24,
  } as ImageStyle,
});
