import { Colours, Style } from "@styles";

export const INITIAL_PADDING = Style.adjust(32);
export const CARD_WIDTH = Style.DEVICE_WIDTH - Style.adjust(64);
export const SNAP_TO_INTERVAL = CARD_WIDTH + Style.adjust(16);

export const HERO_CARD_PADDING = Style.adjust(16);

export const DEFAULT_THEME = {
  backgroundColor: Colours.neutral.white,
  borderColor: Colours.neutral.n20,
  fontColor: Colours.neutral.n900,
  boldTextColor: Colours.primary.p600,
};

export const IMAGE_ASPECT_RATIO = 77 / 137;

export const BANNER_IMAGE_DIMENSIONS = {
  width: Style.adjust(110),
  height: Style.adjust(130),
};
