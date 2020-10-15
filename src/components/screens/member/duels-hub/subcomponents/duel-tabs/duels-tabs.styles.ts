import { StyleSheet, ViewStyle } from "react-native";
import { Colours } from "@styles";

export default StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colours.neutral.white,
    height: 72,
  } as ViewStyle,
  tab: {
    paddingRight: 24,
  } as ViewStyle,
});
