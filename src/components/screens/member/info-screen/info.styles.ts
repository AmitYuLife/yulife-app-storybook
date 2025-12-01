import { Colours } from "@styles";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  buttonWrapper: {
    marginTop: Style.adjust(40),
  } as ViewStyle,
  heading: {
    marginBottom: Style.adjust(32),
  } as TextStyle,
  image: {
    height: Style.adjust(40),
    width: Style.adjust(160),
    marginBottom: Style.adjust(32),
  } as ImageStyle,
  otherWearableWrapper: {
    alignSelf: "center",
    marginBottom: Style.adjust(27),
  },
  wrapper: {
    backgroundColor: Colours.overlay.white90,
    paddingHorizontal: Style.adjust(24),
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
});
