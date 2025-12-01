import { Colours } from "@styles";
import { ViewStyle } from "react-native";
import { Style } from "../../../../styles";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  buttonWrapper: {
    marginTop: Style.adjust(44),
  } as ViewStyle,
  buttonWrapperSecondary: {
    marginTop: Style.adjust(15),
  } as ViewStyle,
  wrapper: {
    alignItems: "center",
    backgroundColor: Colours.overlay.white90,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
  subheadingWrapper: {
    marginTop: Style.adjust(16),
  } as ViewStyle,
  image: {
    marginBottom: Style.adjust(24),
  },
});
