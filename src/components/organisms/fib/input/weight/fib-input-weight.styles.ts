import { Style } from "@styles";
import { StyleSheet, ViewStyle } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: Style.adjust(24),
    marginBottom: Style.adjust(32),
  } as ViewStyle,
});
