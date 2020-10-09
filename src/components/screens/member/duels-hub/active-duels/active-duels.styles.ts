import { Style } from "@styles";
import { StyleSheet, ViewStyle, TextStyle } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  } as ViewStyle,
  sectionList: {
    paddingHorizontal: Style.adjust(24),
    marginBottom: Style.adjust(80),
  } as ViewStyle,
  tabWrapper: {
    marginHorizontal: Style.adjust(24),
  } as ViewStyle,
  keyText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontStyle: "normal",
    fontSize: 18,
    lineHeight: 24,
    color: "#5A5A5C",
    textAlign: "right",
    paddingVertical: 4,
  } as TextStyle,
});
