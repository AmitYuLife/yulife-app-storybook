import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Colours } from "@styles";

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 72,
  } as ViewStyle,
  textInput: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: Colours.primary.p500,
    borderBottomWidth: 2,
    textAlign: "center",
  } as TextStyle,
  textInputOnBlur: {
    borderBottomColor: Colours.neutral.n200,
  } as TextStyle,
});
