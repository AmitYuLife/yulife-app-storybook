import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(40),
    height: Style.adjust(84),
  } as ViewStyle,
  hiddenDatePickerWrapper: {
    position: "absolute",
    left: 32,
    right: 32,
    top: 0,
    bottom: 0,
  } as ViewStyle,
  hiddenDatePicker: {
    height: "100%",
    width: "100%",
  } as ViewStyle,
});
