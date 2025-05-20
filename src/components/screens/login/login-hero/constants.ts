import { Style } from "@styles";

export const CHEST_ASPECT_RATIO = 375 / 353;

export const getChestSize = (titleSectionHeight: number, ctaContainerHeight: number) => {
  const maxHeight = Style.DEVICE_HEIGHT - ctaContainerHeight - titleSectionHeight;

  const height = Math.min(Style.DEVICE_WIDTH / CHEST_ASPECT_RATIO, maxHeight);

  return {
    height,
    width: height * CHEST_ASPECT_RATIO,
  };
};
