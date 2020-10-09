import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";
import { Colours } from "@styles/index";

export default StyleSheet.create({
  paragraph: { textAlign: "left", fontSize: 20, lineHeight: 32, paddingLeft: 16 } as TextStyle,
  dropdown: {
    borderColor: Colours.neutral.n700,
    borderBottomWidth: 2,
    paddingLeft: 20,
    paddingVertical: 8,
    marginTop: 10,
  } as ViewStyle,
  dropdownArrow: {
    alignSelf: "flex-end",
    transform: [{ translateY: -32 }, { translateX: -20 }],
  } as ImageStyle,
  disabled: {
    borderColor: Colours.neutral.n500,
  } as ViewStyle,
  disabledText: {
    color: Colours.neutral.n500,
  } as TextStyle,
});
