import { Platform } from "react-native";
import Style from "./style";
import media from "./media";

export const HEIGHT = Style.adjust(36);
const HIT_SLOP_SIZE = Style.adjust(16);
const HIT_SLOP = {
  left: HIT_SLOP_SIZE,
  right: HIT_SLOP_SIZE,
  bottom: HIT_SLOP_SIZE,
  top: HIT_SLOP_SIZE,
};

const IOS_PADDING_TOP = media.select(
  [
    {
      condition: [media.DEVICES.iPhone12.height, media.DEVICES.iPhone12ProMax.height].includes(Style.DEVICE_HEIGHT),
      value: Style.getSafeAreaStart() + 16,
    },
    {
      condition: Style.hasDynamicIsland(),
      value: Style.getSafeAreaStart() + 26,
    },
  ],
  Style.getSafeAreaStart()
);
export const PADDING_TOP = Platform.select({
  ios: IOS_PADDING_TOP,
  android: 0,
});
export const PADDING_BOTTOM = Platform.select({ ios: 0, android: 16 });
export const LOGO_PADDING_TOP = Style.adjust(12);
export const LEFT_PADDING_TOP = Style.adjust(3);
export const TOP_BAR_WITH_PAD =
  HEIGHT + PADDING_TOP * (Style.hasNotch ? 1.5 : 2) + PADDING_BOTTOM - (Style.hasDynamicIsland() ? 10 : 0);

export default {
  HEIGHT,
  PADDING_TOP,
  PADDING_BOTTOM,
  LOGO_PADDING_TOP,
  LEFT_PADDING_TOP,
  TOP_BAR_WITH_PAD,
  HIT_SLOP,
};
