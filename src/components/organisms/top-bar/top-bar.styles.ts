import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../styles";
import { TOP_BAR } from "@styles";

export const TOP_BAR_HEIGHT = Platform.select({
  ios: TOP_BAR.HEIGHT + 16, // Height + 8px padding top + 8px padding bottom
  android: TOP_BAR.HEIGHT + TOP_BAR.PADDING_TOP + TOP_BAR.PADDING_BOTTOM,
});

export default StyleSheet.create({
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
    height: TOP_BAR_HEIGHT,
    justifyContent: "center",
    width: "100%",
  } as ViewStyle,
  middleLabel: {
    fontSize: Style.adjust(20),
  } as TextStyle,
  textWhite: {
    color: "#FFFFFF",
  },
});
