import { Colours, Style, TOP_BAR } from "@styles";
import { Platform, StyleSheet, ViewStyle } from "react-native";

const HEIGHT_ADJUSTMENT = Platform.select({
  ios: 0,
  android: -20,
});

export default StyleSheet.create({
  topZone: {
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
  wrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.n50,
  } as ViewStyle,
  topbarFiller: {
    height: TOP_BAR.HEIGHT * (Style.hasNotch ? 2.2 : 2) + HEIGHT_ADJUSTMENT,
    width: "100%",
    backgroundColor: Colours.neutral.white,
    borderColor: Colours.neutral.n100,
  } as ViewStyle,
});
