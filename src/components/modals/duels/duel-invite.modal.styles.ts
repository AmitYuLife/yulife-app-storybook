import { Colours } from "@styles";
import { ViewStyle } from "react-native";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  safeAreaWrapper: {
    backgroundColor: Colours.challenge.background.lightBlue,
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
});
