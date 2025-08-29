import { Style, StyleSheet } from "@styles";
import { ViewStyle } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: Style.DEVICE_WIDTH,
    alignSelf: "center",
  } as ViewStyle,
});
