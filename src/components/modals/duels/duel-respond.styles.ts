import { ViewStyle } from "react-native";
import { TOP_BAR, StyleSheet } from "@styles";

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: TOP_BAR.TOP_BAR_WITH_PAD,
  } as ViewStyle,
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255, 0.5)",
  } as ViewStyle,
});

export default styles;
