import { Colours, Style } from "@styles";
import { useGiftingStickerSelectionOverlay } from "../hooks/use-gifting-sticker-selection-overlay";
import {
  GiftingAsset,
  GiftingBackgroundAsset,
  GiftingChoice,
  GiftSendingStates,
  YuCoinDenominationChoice,
} from "../context/gifting-manager.types";
import { useCallback } from "react";
import GiftView from "@organisms/gift-view/gift-view";
import { Box } from "@atoms";
import Animated from "react-native-reanimated";
import { Pressable } from "react-native";
import { VoidFunction } from "@utils";
import { GiftViewLoading } from "@organisms";
import { useGiftPreviewLoadingAnimation } from "../hooks/use-gift-preview-loading-animation";

type Props = {
  backgrounds: GiftingBackgroundAsset[];
  stickers: GiftingAsset[];
  selectedBackground: GiftingBackgroundAsset;
  selectedSticker: GiftingAsset;
  selectBackground: (key: GiftingBackgroundAsset) => void;
  selectSticker: (key: GiftingAsset) => void;
  message: GiftingChoice;
  yuCoin: YuCoinDenominationChoice;
  sendingState: GiftSendingStates;
  setShowButton: React.Dispatch<React.SetStateAction<boolean>>;
  navigateToNextPage: VoidFunction;
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
  sendingState,
  setShowButton,
  navigateToNextPage,
}: Props) => {
  const { showAnimation, giftLoadingStyle, setFinishedAnimation, onLoadingPress } = useGiftPreviewLoadingAnimation({
    sendingState,
    setShowButton,
    navigateToNextPage,
  });

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
    <Box flex={1} width={Style.DEVICE_WIDTH} bg="red">
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
      <Animated.View style={giftLoadingStyle}>
        <Pressable onPress={onLoadingPress}>
          <GiftViewLoading showAnimation={showAnimation} setFinishedAnimation={setFinishedAnimation} />
        </Pressable>
      </Animated.View>
    </Box>
  );
};
