import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
  plusWrapper: {
    marginEnd: Style.SCALE_UP_AND_DOWN(6),
  } as ViewStyle,
  textWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginEnd: Style.SCALE_UP_AND_DOWN(24),
    paddingEnd: Style.SCALE_UP_AND_DOWN(8),
    position: "absolute",
    top: 0,
    zIndex: 2,
  } as ViewStyle,
});
