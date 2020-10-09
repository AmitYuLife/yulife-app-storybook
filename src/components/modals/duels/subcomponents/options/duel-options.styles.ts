import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style, Colours } from "@styles/index";

export default StyleSheet.create({
  wrapper: {
    flex: 2,
    marginTop: Style.SCALE_UP_AND_DOWN(30),
    marginBottom: Style.SCALE_UP_AND_DOWN(15),
    paddingHorizontal: Style.SCALE_UP_AND_DOWN(14),
  } as ViewStyle,
  flexRow: {
    display: "flex",
    flexDirection: "row",
  } as ViewStyle,
  description: { textAlign: "left", fontSize: 20, lineHeight: 32, marginBottom: 24 } as TextStyle,
  question: { textAlign: "left", fontSize: 20, lineHeight: 32 } as TextStyle,
  dropdownWrapper: {
    marginBottom: 24,
  } as ViewStyle,
  buttonWrapper: {
    marginTop: 20,
    marginBottom: 30,
    justifyContent: "flex-end",
  } as ViewStyle,
  loadingOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(255,255,255, 0.5)" } as ViewStyle,
  coinsWrapper: {
    top: 0,
    bottom: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  disabled: {
    borderColor: Colours.neutral.n500,
  } as ViewStyle,
  disabledText: {
    color: Colours.neutral.n500,
  } as TextStyle,
});
