import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
  textWrapper: {
    width: Style.SCALE_UP_AND_DOWN(25),
  } as TextStyle,
  wrapper: {
    flex: 1,
    flexDirection: "row",
    marginTop: Style.SCALE_UP_AND_DOWN(4),
    width: Style.SCALE_UP_AND_DOWN(300),
  } as ViewStyle,
});
