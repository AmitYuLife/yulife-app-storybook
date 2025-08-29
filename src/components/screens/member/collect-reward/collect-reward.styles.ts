import { ViewStyle } from "react-native";
import { Style } from "../../../../styles";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  wrapper: {
    justifyContent: "center",
  } as ViewStyle,
  dateWrapper: {
    marginEnd: Style.SCALE_UP_AND_DOWN(16),
    marginStart: Style.SCALE_UP_AND_DOWN(16),
  } as ViewStyle,
});
