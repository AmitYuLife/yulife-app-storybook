import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: Style.adjust(48),
  } as ViewStyle,
});
