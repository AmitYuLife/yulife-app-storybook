import { ViewStyle } from "react-native";
import { Style } from "../../../styles";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  button: {
    marginHorizontal: Style.adjust(32),
    width: "auto",
  } as ViewStyle,
  buttonWrapper: {
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
});
