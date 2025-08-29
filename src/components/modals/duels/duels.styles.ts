import { ViewStyle, Platform, ImageStyle } from "react-native";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  wrapper: {
    alignItems: "center",
    backgroundColor: "rgb(240,247,254)",
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
  close: {
    padding: 10,
    position: "absolute",
    start: 20,
    top: Platform.OS === "ios" ? 50 : 20,
  } as ImageStyle,
  info: {
    padding: 10,
    position: "absolute",
    end: 20,
    top: Platform.OS === "ios" ? 60 : 30,
  } as ImageStyle,
  buttonWrapper: {
    position: "absolute",
    bottom: 30,
  } as ViewStyle,
  buttonWrapperSecondary: {
    marginTop: 15,
  } as ViewStyle,
});
