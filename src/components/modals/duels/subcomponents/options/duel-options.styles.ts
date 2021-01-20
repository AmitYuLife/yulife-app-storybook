import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style, TOP_BAR } from "@styles/index";

export default StyleSheet.create({
  wrapper: {
    flex: 2,
    marginVertical: Style.adjust(15),
    paddingHorizontal: Style.adjust(14),
  } as ViewStyle,
  flexRow: {
    display: "flex",
    flexDirection: "row",
  } as ViewStyle,
  description: {
    textAlign: "left",
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    marginBottom: 24,
  } as TextStyle,
  question: { textAlign: "left", fontSize: Style.adjust(20), lineHeight: Style.adjust(24) } as TextStyle,
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
