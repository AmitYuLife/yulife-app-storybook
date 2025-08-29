import { TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "../../../styles";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  wrapper: {
    width: "100%",
    height: Style.adjust(265),
  },
  heading: {
    color: Colours.darkGray,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  text: {
    color: Colours.darkGray,
  } as TextStyle,
  blurbWrapper: {
    paddingHorizontal: Style.SCALE_UP_AND_DOWN(40),
  } as ViewStyle,
});
