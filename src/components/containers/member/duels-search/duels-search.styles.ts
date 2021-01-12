import { Colours, Style, TOP_BAR } from "@styles";
import { StyleSheet, ViewStyle } from "react-native";

export default StyleSheet.create({
  topZone: {
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
  wrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.n50,
  } as ViewStyle,
  topbarFiller: {
    height: TOP_BAR.HEIGHT * (Style.hasNotch ? 2.2 : 2),
    width: "100%",
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
});
