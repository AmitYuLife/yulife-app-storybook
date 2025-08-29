import { Style } from "@styles/index";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  wrapper: {
    backgroundColor: "rgba(255,255,255,0.9)",
    flex: 1,
    alignItems: "center",
  } as ViewStyle,
  image: {
    width: Style.adjust(Style.isShortAndroid() ? 248 : 268),
    height: Style.adjust(Style.isShortAndroid() ? 248 : 268),
  } as ImageStyle,
  headingWrapper: {
    marginTop: Style.adjust(169),
    marginBottom: Style.adjust(11),
  } as TextStyle,
  descriptionWrapper: {
    paddingHorizontal: Style.adjust(60),
  } as TextStyle,
  exitChallengeWrapper: {
    marginTop: Style.adjust(33),
  } as ViewStyle,
  buttonStyle: {
    marginBottom: Style.adjust(20),
  } as ViewStyle,
});
