import { Style } from "@styles";
import { Platform, StyleSheet } from "react-native";
import { BUTTON_SIZES, Sizes } from "./button.types";

export const DEFAULT_HEIGHT = Style.adjust(53);

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
    width: Platform.select({
      ios: Style.adjust(170, { shrinkThreshold: Style.DEVICE_WIDTH < 400, shrinkMultiplier: 0.1 }),
      android: Style.adjust(150),
    }),
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
