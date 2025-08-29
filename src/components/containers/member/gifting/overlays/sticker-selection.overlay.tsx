import { memo, useCallback, useState } from "react";
import { Pressable, Image, ScrollView } from "react-native";
import { Box, TextTemplate } from "@atoms";
import { t } from "@locale";
import { Colours, Style, StyleSheet } from "@styles";
import { Navigation } from "@navigation/main";
import { chunk } from "lodash";
import { GiftingAsset } from "../context/gifting-manager.types";
import { P2P_STICKER_ITEMS, P2P_STICKER_MODAL } from "@ids";

type Props = {
  stickers: GiftingAsset[];
  selectSticker: (sticker: GiftingAsset) => void;
  selectedSticker: GiftingAsset;
};

export const StickerSelectionOverlay = memo(({ stickers, selectSticker, selectedSticker }: Props) => {
  const [focusedSticker, setFocusedSticker] = useState(selectedSticker);

  const stickerChunks = chunk(stickers, 3);

  const selectNewSticker = useCallback(
    (sticker: GiftingAsset) => {
      setFocusedSticker(sticker);
      selectSticker(sticker);
      Navigation.dismissAllOverlays();
    },
    [selectSticker]
  );

  return (
    <Box
      position="absolute"
      left={0}
      right={0}
      bottom={0}
      pb={40}
      bg="white"
      maxHeight={Style.DEVICE_HEIGHT * 0.8}
      borderTopRadius={16}
      pt={40}
      testID={P2P_STICKER_MODAL}
    >
      <Box justifyContent="center" alignItems="center">
        <TextTemplate textAlign="center" type="h2">
          {t("screens.gifting.choose_sticker")}
        </TextTemplate>
      </Box>
      <Box ph={16} mt={24} overflow="hidden">
        <ScrollView
          scrollEnabled={stickerChunks.length > 2}
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
        >
          {stickerChunks.map((chunkItem, chunkIndex) => {
            return (
              <Box h={112} flexDirection="row" mt={16} justifyContent="space-between" key={chunkIndex}>
                {chunkItem.map((sticker, stickerIndex) => {
                  const selected = focusedSticker?.id === sticker.id;

                  return (
                    <Pressable
                      key={`${sticker.id}_${chunkIndex}_${stickerIndex}`}
                      onPress={() => selectNewSticker(sticker)}
                      testID={P2P_STICKER_ITEMS(sticker.id)}
                    >
                      <Box w={104} h={selected ? 104 : 108} bg={Colours.neutral.n100} br={16}>
                        <Box
                          w={104}
                          h={104}
                          br={16}
                          borderWidth={1}
                          borderColor={selected ? Colours.primary.p600 : Colours.neutral.n100}
                          bg={selected ? Colours.primary.p50 : Colours.neutral.white}
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Image height={104} width={104} source={sticker.image} />
                        </Box>
                      </Box>
                    </Pressable>
                  );
                })}
              </Box>
            );
          })}
        </ScrollView>
      </Box>
    </Box>
  );
});

const styles = StyleSheet.create({
  scrollView: {
    width: Style.DEVICE_WIDTH - Style.adjust(24),
  },
});
