import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
  plusWrapper: {
    marginRight: Style.SCALE_UP_AND_DOWN(6),
  } as ViewStyle,
  textWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginRight: Style.SCALE_UP_AND_DOWN(24),
    paddingRight: Style.SCALE_UP_AND_DOWN(8),
    position: "absolute",
    top: 0,
    zIndex: 2,
  } as ViewStyle,
});
