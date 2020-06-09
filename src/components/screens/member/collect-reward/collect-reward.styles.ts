import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

export default StyleSheet.create({
  centredScreen: {
    justifyContent: "center",
  } as ViewStyle,
  dateWrapper: {
    marginRight: Style.SCALE_UP_AND_DOWN(16),
    marginLeft: Style.SCALE_UP_AND_DOWN(16),
  } as ViewStyle,
});
