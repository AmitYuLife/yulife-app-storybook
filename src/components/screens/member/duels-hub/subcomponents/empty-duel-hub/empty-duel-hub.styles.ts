import { Style, Colours } from "@styles";
import { StyleSheet, ViewStyle } from "react-native";

export default StyleSheet.create({
  tabWrapper: {
    marginHorizontal: Style.adjust(24),
  } as ViewStyle,
  grayWrapper: {
    backgroundColor: Colours.neutral.n50,
    borderRadius: 8,
    marginBottom: 24,
    paddingTop: 6,
    paddingHorizontal: 4,
  } as ViewStyle,
});
