import { Style } from "@styles";
import media from "@styles/media";
import { Platform, StyleSheet } from "react-native";
import { BUTTON_SIZES, Sizes } from "./button.types";

export const DEFAULT_HEIGHT = Style.adjust(53);

const SMALL_WIDTH = media.select(
  [
    {
      condition: Platform.OS === "ios" && Style.DEVICE_WIDTH <= media.DEVICES.iPhone8.width,
      value: 160,
    },
    {
      condition: Platform.OS === "ios",
      value: 170,
    },
  ],
  Style.adjust(150)
);

export const buttonStyles = StyleSheet.create({
  wrapper: {
    alignSelf: "center",
  },
  fill: {
    width: "100%",
    height: DEFAULT_HEIGHT,
  },
  extraSmall: {
    width: Style.adjust(61),
    height: Style.adjust(32),
  },
  small: {
    width: SMALL_WIDTH,
    height: DEFAULT_HEIGHT,
  },
  medium: {
    width: Style.adjust(210),
    height: DEFAULT_HEIGHT,
  },
  large: {
    width: Style.DEVICE_WIDTH - 70,
    height: DEFAULT_HEIGHT,
  },
  narrow: {
    width: "100%",
    height: Style.adjust(40),
  },
  coin: {
    width: Style.adjust(61),
    height: Style.adjust(36),
  },
});

const BUTTON_DIMENSIONS: Record<BUTTON_SIZES, { width: number | "100%"; height: number }> = {
  [BUTTON_SIZES.FILL]: buttonStyles.fill,
  [BUTTON_SIZES.EXTRA_SMALL]: buttonStyles.extraSmall,
  [BUTTON_SIZES.SMALL]: buttonStyles.small,
  [BUTTON_SIZES.MEDIUM]: buttonStyles.medium,
  [BUTTON_SIZES.NARROW]: buttonStyles.narrow,
  [BUTTON_SIZES.COIN]: buttonStyles.coin,
  [BUTTON_SIZES.LARGE]: buttonStyles.large,
};

export function getButtonDimensions(size: Sizes) {
  return BUTTON_DIMENSIONS[size] || buttonStyles.large;
}
