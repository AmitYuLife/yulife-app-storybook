import { ViewStyle } from "react-native";
import { Style } from "../../../../styles";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  centredScreen: {
    justifyContent: "center",
  } as ViewStyle,
  dateWrapper: {
    height: Style.SCALE_UP_AND_DOWN(25),
  } as ViewStyle,
});
