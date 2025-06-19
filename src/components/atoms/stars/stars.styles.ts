import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
  starMidWrapper: {
    marginTop: Style.SCALE_UP_AND_DOWN(-4),
  } as ViewStyle,
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
    height: Style.SCALE_UP_AND_DOWN(60),
    justifyContent: "space-around",
    marginBottom: Style.SCALE_UP_AND_DOWN(4),
    width: Style.SCALE_UP_AND_DOWN(180),
  } as ViewStyle,
});
