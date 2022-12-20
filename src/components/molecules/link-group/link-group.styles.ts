import { StyleSheet, ViewStyle } from "react-native";
import { Colours, Style } from "../../../styles";

export default StyleSheet.create({
  button: {
    marginHorizontal: Style.adjust(32),
    width: "auto",
  } as ViewStyle,
  buttonWrapper: {
    alignItems: "center",
    flexDirection: "row-reverse",
    justifyContent: "center",
  } as ViewStyle,
  divider: {
    backgroundColor: Colours.divider,
    height: Style.adjust(14),
    width: 1,
  } as ViewStyle,
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  } as ViewStyle,
});
