import { Box, Image, TextTemplate, YuCoinMiniSvg } from "@atoms";
import { Pressable } from "@components/molecules";
import { t } from "@locale";
import { Colours, Style } from "@styles";
import { ScrollView, StyleSheet } from "react-native";
import { useGiftingStickerSelectionOverlay } from "../hooks/use-gifting-sticker-selection-overlay";
import { GiftingAsset, GiftingChoice, YuCoinDenominationChoice } from "../context/gifting-manager.types";
import { useCallback } from "react";
import { AddIcon } from "@atoms/icon/add-icon";

type Props = {
  backgrounds: GiftingAsset[];
  stickers: GiftingAsset[];
  selectedBackground: GiftingAsset;
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
    <Box w={Style.DEVICE_WIDTH} justifyContent="center" alignItems="center">
      {!selectedBackground?.image ? null : (
        <Box position="absolute" top={0} right={0} left={0} bottom={0}>
          <Image
            width={Style.DEVICE_WIDTH}
            height={Style.DEVICE_HEIGHT}
            suppressLoadingUi={true}
            source={selectedBackground.image}
          />
        </Box>
      )}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.width}>
        <Box mt={64} h={188} w={Style.DEVICE_WIDTH} justifyContent="center" alignItems="center">
          <Pressable style={styles.center} onPress={handlePressSticker}>
            <Box position="absolute" h={188} justifyContent="center" alignItems="center">
              {stickers && !selectedSticker ? (
                <Box h={188} justifyContent="center" alignItems="center">
                  <AddIcon />
                  <Box mt={12}>
                    <TextTemplate color={textColor} type="b2b">
                      {t("screens.gifting.add_sticker")}
                    </TextTemplate>
                  </Box>
                </Box>
              ) : selectedSticker ? (
                <Image height={188} width={188} source={selectedSticker.image} />
              ) : null}
            </Box>
          </Pressable>
        </Box>
        {message?.label ? (
          <Box mt={32} w={Style.DEVICE_WIDTH} justifyContent="center" alignItems="center">
            <TextTemplate type="h3" color={textColor}>
              {message.label}
            </TextTemplate>
          </Box>
        ) : null}
        {yuCoin?.id ? (
          <Box mt={32} w={Style.DEVICE_WIDTH} justifyContent="center" alignItems="center" flexDirection="row" gap={4}>
            <TextTemplate type="h3" color={textColor}>
              {t("screens.gifting.here_is")}
            </TextTemplate>
            <TextTemplate type="h3" color={Colours.primary.p600}>
              {yuCoin.id}
            </TextTemplate>
            <YuCoinMiniSvg size={24} />
          </Box>
        ) : null}
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  width: {
    width: Style.DEVICE_WIDTH,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
