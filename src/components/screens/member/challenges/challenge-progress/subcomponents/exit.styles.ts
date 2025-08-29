import { Style } from "@styles/index";
import { ViewStyle } from "react-native";

import { StyleSheet } from "@styles";
const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginHorizontal: Style.SCALE_UP_AND_DOWN(15),
  } as ViewStyle,
});

export default styles;
