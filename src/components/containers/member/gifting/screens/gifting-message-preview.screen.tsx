import { Colours } from "@styles";
import { useGiftingStickerSelectionOverlay } from "../hooks/use-gifting-sticker-selection-overlay";
import {
  GiftingAsset,
  GiftingBackgroundAsset,
  GiftingChoice,
  YuCoinDenominationChoice,
} from "../context/gifting-manager.types";
import { useCallback } from "react";
import GiftView from "@organisms/gift-view/gift-view";

type Props = {
  backgrounds: GiftingAsset[];
  stickers: GiftingAsset[];
  selectedBackground: GiftingBackgroundAsset;
  selectedSticker: GiftingAsset;
  selectBackground: (key: GiftingAsset) => void;
  selectSticker: (key: GiftingAsset) => void;
  message: GiftingChoice;
  yuCoin: YuCoinDenominationChoice;
};

export const GiftingMessagePreviewScreen = ({
  selectedBackground,
  message,
  yuCoin,
  stickers,
  selectSticker,
  selectedSticker,
}: Props) => {
  const textColor = selectedBackground?.textColor || Colours.neutral.n800;
  const showStickerSelectionOverlay = useGiftingStickerSelectionOverlay({
    stickers,
    selectSticker,
    selectedSticker,
  });

  const handlePressSticker = useCallback(() => {
    if (stickers?.length < 2) {
      return null;
    }

    return showStickerSelectionOverlay();
  }, [stickers, showStickerSelectionOverlay]);

  return (
    <GiftView
      yuCoinAmount={yuCoin?.id}
      textColor={textColor}
      background={selectedBackground}
      message={message?.label}
      stickers={stickers}
      onPressSticker={handlePressSticker}
      currentSticker={selectedSticker}
    />
  );
};
