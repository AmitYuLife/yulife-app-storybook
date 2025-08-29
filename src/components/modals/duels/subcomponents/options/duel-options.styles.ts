import { TextStyle, ViewStyle } from "react-native";
import { Style, TOP_BAR } from "@styles/index";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  blurStyle: {
    marginBottom: -2,
  } as ViewStyle,
  wrapper: {
    flex: 2,
    marginVertical: Style.adjust(16),
    paddingHorizontal: Style.adjust(16),
  } as ViewStyle,
  flexRow: {
    display: "flex",
    flexDirection: "row",
  } as ViewStyle,
  description: {
    marginBottom: Style.adjust(24),
  } as TextStyle,
  buttonWrapper: {
    marginTop: 20,
    marginBottom: 30,
    justifyContent: "flex-end",
  } as ViewStyle,
  loadingOverlay: { backgroundColor: "rgba(255,255,255, 0.5)" } as ViewStyle,
  safeAreaView: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: TOP_BAR.TOP_BAR_WITH_PAD,
  } as ViewStyle,
});
