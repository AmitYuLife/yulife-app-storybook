import { Colours, Style, StyleSheet } from "@styles";
import { TextStyle, ViewStyle } from "react-native";

export default StyleSheet.create({
  searchWrapper: {
    paddingTop: Style.adjust(32),
    paddingBottom: Style.adjust(44),
    borderColor: Colours.neutral.n100,
    borderBottomWidth: 1,
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
  padding: {
    marginHorizontal: Style.adjust(32),
  } as ViewStyle,
  text: {
    marginBottom: Style.adjust(32),
  } as TextStyle,
  textInput: {
    height: 40,
    paddingVertical: 0,
    borderWidth: 0,
    borderBottomWidth: 2,
    color: Colours.darkGray,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.adjust(16),
  } as TextStyle,
});
