import { TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  textWrapper: {
    marginBottom: Style.adjust(24),
    textAlign: "center",
  } as TextStyle,
  imageWrapper: {
    alignItems: "center",
    height: Style.SCALE_UP_AND_DOWN(267),
    justifyContent: "center",
    marginBottom: Style.SCALE_UP_AND_DOWN(36),
    overflow: "hidden",
    width: "100%",
  } as ViewStyle,
  wrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
});
