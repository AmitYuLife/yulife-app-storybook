import { StyleSheet, ViewStyle } from "react-native";

export default StyleSheet.create({
  safeAreaWrapper: {
    backgroundColor: "rgb(240,247,254)",
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
});
