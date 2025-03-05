import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../styles";
import { TOP_BAR } from "@styles";

export default StyleSheet.create({
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
    height: TOP_BAR.HEIGHT,
    justifyContent: "center",
    width: "100%",
    marginVertical: Style.adjust(4),
  } as ViewStyle,
  middleLabel: {
    fontSize: Style.adjust(20),
  } as TextStyle,
  textWhite: {
    color: "#FFFFFF",
  },
});
