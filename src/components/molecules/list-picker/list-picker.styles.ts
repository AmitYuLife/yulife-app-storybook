import { TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../styles";

import { StyleSheet } from "@styles";
const width = Style.SCALE_UP_AND_DOWN(355);
const height = Style.SCALE_UP_AND_DOWN(57);

export default StyleSheet.create({
  cancel: {
    color: "#007aff",
    fontFamily: "System",
    fontSize: Style.SCALE_UP_AND_DOWN(20),
  } as TextStyle,
  cancelWrapper: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: Style.SCALE_UP_AND_DOWN(12),
    height,
    justifyContent: "center",
    marginTop: Style.SCALE_UP_AND_DOWN(12),
    width,
  } as ViewStyle,
  instruction: {
    color: "#888",
    fontFamily: "System",
    fontSize: Style.SCALE_UP_AND_DOWN(13),
  } as TextStyle,
  instructionWrapper: {
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: Style.SCALE_UP_AND_DOWN(10),
    borderTopRightRadius: Style.SCALE_UP_AND_DOWN(10),
    height: Style.SCALE_UP_AND_DOWN(45),
    justifyContent: "center",
    width,
  } as ViewStyle,
  item: {
    color: "#007aff",
    fontFamily: "System",
    fontSize: Style.SCALE_UP_AND_DOWN(20),
  } as TextStyle,
  itemWrapper: {
    alignItems: "center",
    backgroundColor: "white",
    borderTopColor: "#cdcdcd",
    borderTopWidth: StyleSheet.hairlineWidth,
    height,
    justifyContent: "center",
    width,
  } as ViewStyle,
  itemWrapperLast: {
    borderBottomLeftRadius: Style.SCALE_UP_AND_DOWN(12),
    borderBottomRightRadius: Style.SCALE_UP_AND_DOWN(12),
  } as ViewStyle,
  wrapper: {
    alignItems: "center",
    borderColor: "transparent",
    borderWidth: 1,
    bottom: Style.adjust(25),
    justifyContent: "center",
    start: 0,
    position: "absolute",
    end: 0,
  } as ViewStyle,
});
