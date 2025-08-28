import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "../../../styles";

export default StyleSheet.create({
  arrow: {
    marginStart: "auto",
  } as ImageStyle,
  label: {
    color: Colours.darkGray,
  } as TextStyle,
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.7)",
  } as ViewStyle,
  placeholder: {
    color: Colours.lightGray,
  } as TextStyle,
  textWrapper: {
    marginStart: Style.SCALE_UP_AND_DOWN(20),
  } as ViewStyle,
  wrapper: {
    alignItems: "center",
    borderBottomColor: Colours.picker.empty,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "row",
    height: 50,
  } as ViewStyle,
  wrapperFilled: {
    borderBottomColor: Colours.picker.filled,
  } as ViewStyle,
});
