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
    borderRadius: 0,
    borderBottomColor: Colours.darkHotPink,
    borderBottomWidth: 2,
  } as TextStyle,
});
