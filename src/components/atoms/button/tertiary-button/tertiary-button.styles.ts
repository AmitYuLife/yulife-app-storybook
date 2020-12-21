import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style, Colours } from "@styles";

export const styles = StyleSheet.create({
  flex: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  } as ViewStyle,
  disabled: {
    opacity: 0.3,
  } as ViewStyle,
  outer: {
    backgroundColor: Colours.neutral.n100,
    borderRadius: 8,
    overflow: "hidden",
  } as ViewStyle,
  main: {
    width: "100%",
    paddingHorizontal: Style.adjust(16),
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colours.neutral.n100,
    backgroundColor: "white",
    borderRadius: 8,
  } as ViewStyle,
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  titleWrapper: {
    marginLeft: Style.adjust(16),
  } as TextStyle,
  title: {
    fontSize: Style.adjust(16),
    color: Colours.neutral.n700,
  } as TextStyle,
  rightIcon: {
    marginLeft: "auto",
  } as ViewStyle,
});
