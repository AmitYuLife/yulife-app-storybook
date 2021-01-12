import { Colours, Style } from "@styles";
import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";

const WRAPPER_MARGIN_TOP = Platform.select({
  ios: 0,
  android: -20,
});

export default StyleSheet.create({
  searchWrapper: {
    marginTop: WRAPPER_MARGIN_TOP,
    paddingTop: Style.adjust(32),
    paddingBottom: Style.adjust(44),
    borderColor: Colours.neutral.n100,
    borderBottomWidth: 1,
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
  padding: {
    marginLeft: Style.adjust(24),
    marginRight: Style.adjust(24),
  } as ViewStyle,
  text: {
    color: Colours.neutral.n800,
    fontSize: Style.adjust(24),
    lineHeight: Style.adjust(32),
    letterSpacing: Style.adjust(1),
    marginBottom: Style.adjust(32),
  } as TextStyle,
  textInput: {
    height: 40,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: Colours.primary.p600,
    color: Colours.darkGray,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.adjust(16),
  } as TextStyle,
});
