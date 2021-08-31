import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";

export default StyleSheet.create({
  absolute: {
    position: "absolute",
  } as ViewStyle,
  popoverBody: {
    position: "absolute",
    left: Style.adjust(17),
    padding: Style.adjust(16),
    borderRadius: Style.adjust(10),
    borderWidth: 1,
    minWidth: Style.adjust(120),
    minHeight: Style.adjust(80),
  } as ViewStyle,
  popoverBeak: {
    position: "absolute",
    top: Style.adjust(10),
  } as ViewStyle,
  shadowProp: {
    shadowColor: "#000000",
    shadowOffset: { width: Style.adjust(8), height: Style.adjust(8) },
    shadowRadius: 0,
    elevation: 8,
  } as ViewStyle,
  closeWrapper: {
    position: "absolute",
    top: 8,
    right: 8,
  } as ViewStyle,
});
