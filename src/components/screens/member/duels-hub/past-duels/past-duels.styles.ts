import { StyleSheet, ViewStyle } from "react-native";
import { Style, Colours } from "@styles";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  } as ViewStyle,
  tabWrapper: {
    marginHorizontal: Style.adjust(24),
  } as ViewStyle,
  grayWrapper: {
    marginHorizontal: Style.adjust(24),
    borderRadius: 8,
    backgroundColor: Colours.neutral.n50,
  } as ViewStyle,
  flatList: {
    paddingHorizontal: Style.adjust(24),
    marginBottom: Style.adjust(80),
  } as ViewStyle,
});
