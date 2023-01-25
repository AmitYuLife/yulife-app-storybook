import { Colours, Style, TOP_BAR } from "@styles";
import media from "@styles/media";
import { StyleSheet, ViewStyle } from "react-native";

const HEIGHT_ADJUSTMENT = media.select(
  [
    {
      condition: [media.DEVICES.iPhone12.height, media.DEVICES.iPhone12ProMax.height].includes(Style.DEVICE_HEIGHT),
      value: 20,
    },
    {
      condition: Style.hasDynamicIsland(),
      value: 30,
    },
    { condition: Style.isAndroid(), value: -20 },
  ],
  0
);

export default StyleSheet.create({
  searchContainer: {
    borderTopWidth: 1,
    borderTopColor: Colours.neutral.n100,
  } as ViewStyle,
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
  } as ViewStyle,
});
