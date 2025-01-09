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
  backgrounds: GiftingBackgroundAsset[];
  stickers: GiftingAsset[];
  selectedBackground: GiftingBackgroundAsset;
  selectedSticker: GiftingAsset;
  selectBackground: (key: GiftingBackgroundAsset) => void;
  selectSticker: (key: GiftingAsset) => void;
  message: GiftingChoice;
  yuCoin: YuCoinDenominationChoice;
};

export const GiftingMessagePreviewScreen = ({
  backgrounds,
  selectBackground,
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
    if (stickers?.length === 0) {
      return null;
    }

    return showStickerSelectionOverlay();
  }, [stickers, showStickerSelectionOverlay]);

  return (
    <GiftView
      yuCoinAmount={yuCoin?.id}
      textColor={textColor}
      backgrounds={backgrounds}
      selectBackground={selectBackground}
      background={selectedBackground}
      message={message?.label}
      stickers={stickers}
      onPressSticker={handlePressSticker}
      currentSticker={selectedSticker}
    />
  );
};
