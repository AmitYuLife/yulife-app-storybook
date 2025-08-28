import { StyleSheet, ViewStyle, ImageStyle } from "react-native";
import { Style } from "@styles";

export default StyleSheet.create({
  popover: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  } as ViewStyle,
  popoverTextWrapper: {
    flexShrink: 1,
    maxWidth: 148,
    width: Style.adjust(158),
    marginVertical: Style.adjust(-4),
  } as ViewStyle,
  popoverText: {
    marginTop: Style.adjust(8),
    marginEnd: Style.adjust(16),
  } as ViewStyle,
  popoverImage: {
    width: Style.adjust(87),
    height: Style.adjust(87),
  } as ImageStyle,
});

export const markdownStyles = StyleSheet.create({
  paragraph: {
    paddingVertical: Style.adjust(4),
  },
});
