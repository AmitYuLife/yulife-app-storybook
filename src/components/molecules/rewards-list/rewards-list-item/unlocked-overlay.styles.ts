import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

export default StyleSheet.create({
  costText: {
    color: "rgb(51,51,51)",
    fontSize: Style.adjust(14),
  } as TextStyle,
  unlockedContainer: {
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    height: Style.adjust(150),
    justifyContent: "flex-start",
    opacity: 0.92,
    paddingLeft: Style.adjust(15),
    paddingTop: Style.adjust(20),
    width: Style.adjust(155),
  } as ViewStyle,
  voucherText: {
    color: "rgb(51,51,51)",
    fontSize: Style.adjust(15),
    marginBottom: Style.adjust(4),
    marginTop: Style.adjust(14),
  } as TextStyle,
});
