import { ViewStyle } from "react-native";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  safeAreaWrapper: {
    backgroundColor: "rgb(240,247,254)",
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
});
