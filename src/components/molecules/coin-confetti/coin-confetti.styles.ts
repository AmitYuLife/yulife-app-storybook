import { ImageStyle, ViewStyle } from "react-native";
import { Style, StyleSheet } from "@styles";

export default StyleSheet.create({
  confetti: {
    width: "100%",
  } as ImageStyle,
  coinImage: {
    position: "absolute",
    top: Style.adjust(55),
    alignItems: "center",
  } as ImageStyle,
  coinWrapper: {
    alignItems: "center",
    position: "absolute",
  } as ViewStyle,
  confettiWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
  } as ViewStyle,
  null: {} as ViewStyle,
  wrapper: {
    alignItems: "center",
    height: Style.adjust(240),
    width: "100%",
  } as ViewStyle,
});
