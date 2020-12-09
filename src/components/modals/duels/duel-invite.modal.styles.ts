import { StyleSheet, ViewStyle } from "react-native";
import { TOP_BAR } from "@styles";

export default StyleSheet.create({
  safeAreaWrapper: {
    backgroundColor: "rgb(240,247,254)",
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    flex: 1,
    paddingTop: TOP_BAR.TOP_BAR_WITH_PAD,
  } as ViewStyle,
});
