import { ImageStyle, Platform, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "../../../styles";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  iconWrapper: {
    marginEnd: Style.adjust(16),
  } as ViewStyle,
  iconWrapperCard: {
    marginBottom: Style.SCALE_UP_AND_DOWN(-4),
  } as ViewStyle,
  image: {
    marginEnd: Style.SCALE_UP_AND_DOWN(20),
    width: Style.SCALE_UP_AND_DOWN(25),
  } as ImageStyle,
  input: {
    color: Colours.darkGray,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    marginBottom: Platform.OS === "ios" ? 0 : Style.SCALE_UP_AND_DOWN(-4),
    padding: 0,
    width: "100%",
  } as TextStyle,
  inputRtl: {
    writingDirection: "rtl",
    textAlign: "right",
  } as TextStyle,
  inputWrapper: {
    flex: 1,
  } as ViewStyle,
  inputCard: {
    marginStart: 2,
  } as ViewStyle,
  outerWrapper: {
    paddingHorizontal: Style.SCALE_UP_AND_DOWN(44),
    width: "100%",
  } as ViewStyle,
  text: {
    color: Colours.lightRed,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.SCALE_UP_AND_DOWN(12),
    textAlign: "right",
  } as TextStyle,
  textWrapper: {
    marginTop: Style.SCALE_UP_AND_DOWN(11),
  } as ViewStyle,
  wrapper: {
    alignItems: "flex-end",
    borderBottomColor: Colours.textInput.inactive,
    borderBottomWidth: 1,
    flexDirection: "row",
    height: Style.SCALE_UP_AND_DOWN(50),
    paddingBottom: Style.SCALE_UP_AND_DOWN(16),
    width: "100%",
  } as ViewStyle,
  wrapperError: {
    borderBottomColor: Colours.lightRed,
  } as ViewStyle,
  wrapperFilled: {
    borderBottomColor: Colours.textInput.filled,
  } as ViewStyle,
  wrapperFocused: {
    borderBottomColor: Colours.textInput.focus,
    borderBottomWidth: Style.SCALE_UP_AND_DOWN(2),
  } as ViewStyle,
});
