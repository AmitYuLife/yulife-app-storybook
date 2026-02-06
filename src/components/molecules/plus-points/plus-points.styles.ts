import { ViewStyle } from "react-native";
import { Style } from "../../../styles";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  plusWrapper: {
    marginEnd: Style.SCALE_UP_AND_DOWN(6),
  } as ViewStyle,
  textWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    zIndex: 2,
  } as ViewStyle,
});
