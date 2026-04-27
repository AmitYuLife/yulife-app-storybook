import { ViewStyle } from "react-native";
import { Style, StyleSheet } from "@styles";

export default StyleSheet.create({
  ratingWrapper: {
    alignItems: "center",
    marginTop: Style.adjust(40),
  } as ViewStyle,
  cta: {
    position: "absolute",
    bottom: Style.adjust(96),
  } as ViewStyle,
});
