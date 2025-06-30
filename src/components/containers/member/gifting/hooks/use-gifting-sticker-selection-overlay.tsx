import { Navigation } from "@navigation/main";
import { ComponentProps, useCallback } from "react";
import { StickerSelectionOverlay } from "../overlays/sticker-selection.overlay";

export const useGiftingStickerSelectionOverlay = (props: ComponentProps<typeof StickerSelectionOverlay>) => {
  return useCallback(() => {
    Navigation.showOverlayWithChild({
      children: <StickerSelectionOverlay {...props} />,
      withBlurBackground: undefined,
      closeOnBlur: true,
    });
  }, [props]);
};
