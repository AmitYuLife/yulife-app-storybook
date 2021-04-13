import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

export default StyleSheet.create({
  lockedContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    opacity: 0.92,
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  lockedWhiteSpace: {
    backgroundColor: "#bebebe",
    height: Style.adjust(150),
    opacity: 0.92,
    padding: Style.adjust(20),
    width: Style.adjust(155),
  } as ViewStyle,
  voucherText: {
    color: "white",
    fontSize: Style.adjust(15),
    marginTop: Style.adjust(14),
  } as TextStyle,
});
