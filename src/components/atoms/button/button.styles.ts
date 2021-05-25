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
  },
  medium: {
    width: Style.adjust(210),
  },
  small: {
    width: SMALL_WIDTH,
  },
  large: {
    width: Style.DEVICE_WIDTH - 70,
  },
});

export function getWidth(size: Sizes) {
  switch (size) {
    case BUTTON_SIZES.FILL:
      return buttonStyles.fill;
    case BUTTON_SIZES.SMALL:
      return buttonStyles.small;
    case BUTTON_SIZES.MEDIUM:
      return buttonStyles.medium;
    case BUTTON_SIZES.LARGE:
    default:
      return buttonStyles.large;
  }
}
