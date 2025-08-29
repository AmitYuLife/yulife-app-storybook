import { Colours, Style, StyleSheet } from "@styles";
import { ViewStyle } from "react-native";

export default StyleSheet.create({
  searchContainer: {
    borderTopWidth: 1,
    borderTopColor: Colours.neutral.n100,
  } as ViewStyle,
  topZone: {
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
  wrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.n50,
  } as ViewStyle,
  emptyComponentWrapper: {
    marginTop: Style.adjust(64),
  } as ViewStyle,
});
