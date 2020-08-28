import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Colours } from "@styles";

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 120,
  } as ViewStyle,
  label: {
    fontSize: 16,
    lineHeight: 24,
    color: Colours.primary.p600,
    letterSpacing: 1,
    textDecorationLine: "underline",
    textDecorationColor: Colours.primary.p600,
  } as TextStyle,
  ftWrapper: {
    flexDirection: "row",
  } as ViewStyle,
  textInput: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderRadius: 0,
    borderBottomColor: Colours.primary.p600,
    borderBottomWidth: 1,
  } as TextStyle,
  textInputOnBlur: {
    borderBottomColor: Colours.neutral.n600,
  } as TextStyle,
});
