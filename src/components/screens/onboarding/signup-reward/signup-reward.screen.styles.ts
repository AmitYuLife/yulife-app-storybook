import { Style, StyleSheet } from "@styles";
import { ViewStyle } from "react-native";

export default StyleSheet.create({
  wrapper: {
    width: "100%",
    height: Style.adjust(265),
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
  } as ViewStyle,
});
