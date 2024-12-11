import { Box, Image, TextTemplate, YuCoinMiniSvg } from "@atoms";
import { AddIcon } from "@atoms/icon/add-icon";
import { Avatar } from "@components/molecules";
import { t } from "@locale";
import { Style, Colours } from "@styles";
import { memo } from "react";
import { ScrollView, Pressable, StyleSheet, View } from "react-native";

type Asset = {
  id?: string;
  image: {
    uri?: string;
  };
  textColor?: string;
};

type Props = {
  yuCoinAmount: number;
  textColor: string;
  backgroundImage: { uri?: string };
  message: string;
  stickers?: Asset[];
  onPressSticker?: () => void;
  currentSticker: Asset;
  sender?: {
    avatar?: {
      uri?: string;
    };
    fullName?: string;
  };
};

const GiftView = ({
  yuCoinAmount,
  backgroundImage,
  message,
  textColor,
  onPressSticker,
  stickers,
  currentSticker,
  sender,
}: Props) => {
  const StickerWrapper = onPressSticker ? Pressable : Box;
  const stickerWrapperProps = onPressSticker ? { onPress: onPressSticker } : {};

  return (
    <View style={styles.screen}>
      {backgroundImage ? (
        <Box position="absolute" top={0} right={0} left={0} bottom={0}>
          <Image width={Style.DEVICE_WIDTH} suppressLoadingUi={true} source={backgroundImage} resizeMode="cover" />
        </Box>
      ) : null}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.screen}>
        {sender?.fullName || sender?.avatar?.uri ? (
          <Box mt={48} justifyContent="center" alignItems="center">
            {sender?.avatar?.uri ? <Avatar size={56} uri={sender.avatar.uri} /> : null}
            {sender?.fullName ? (
              <TextTemplate type="l3b" color={textColor}>
                {sender.fullName}
              </TextTemplate>
            ) : null}
          </Box>
        ) : null}
        <Box mt={!sender ? 64 : 24} h={188} w={Style.DEVICE_WIDTH} justifyContent="center" alignItems="center">
          <StickerWrapper style={styles.center} {...stickerWrapperProps}>
            <Box position="absolute" h={188} justifyContent="center" alignItems="center">
              {stickers?.length && !currentSticker ? (
                <Box h={188} justifyContent="center" alignItems="center">
                  <AddIcon />
                  <Box mt={12}>
                    <TextTemplate color={textColor} type="b2b">
                      {t("screens.gifting.add_sticker")}
                    </TextTemplate>
                  </Box>
                </Box>
              ) : currentSticker ? (
                <Image height={188} width={188} source={currentSticker.image} />
              ) : null}
            </Box>
          </StickerWrapper>
        </Box>
        {message ? (
          <Box mt={32} w={Style.DEVICE_WIDTH} justifyContent="center" alignItems="center" ph={24}>
            <TextTemplate type="h3" color={textColor} textAlign="center">
              {message}
            </TextTemplate>
          </Box>
        ) : null}
        {yuCoinAmount ? (
          <Box
            mt={32}
            w={Style.DEVICE_WIDTH}
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            gap={4}
            ph={24}
          >
            <TextTemplate type="h3" color={textColor}>
              {t("screens.gifting.here_is")}
            </TextTemplate>
            <TextTemplate type="h3" color={Colours.primary.p600}>
              {yuCoinAmount}
            </TextTemplate>
            <YuCoinMiniSvg size={24} />
          </Box>
        ) : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default memo(GiftView);
