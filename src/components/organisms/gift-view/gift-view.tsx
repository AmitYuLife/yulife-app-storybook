import { Box, Image, TextTemplate } from "@atoms";
import { AddIcon } from "@atoms/icon/add-icon";
import { YuCoinTopNavIcon } from "@atoms/icon/yucoin-top-nav-icon";
import { Avatar, Button, SecondaryButton, Slider } from "@molecules";
import { t } from "@locale";
import ItemDetailsReward from "@organisms/item-details-reward/item-details-reward";
import { Style, Colours, TOP_BAR } from "@styles";
import { memo, useMemo } from "react";
import { ScrollView, Pressable, StyleSheet, View } from "react-native";
import { FadeIn, ZoomIn, BounceIn } from "react-native-reanimated";
import { YuHeartIcon } from "@atoms/icon/yu-heart-icon";
import navBarStyles from "@styles/nav-bar.styles";
import { P2P_GIFT_VIEW, P2P_MESSAGE, P2P_STICKER } from "@ids";

type StickerAsset = {
  id?: string;
  hasAnimatedStarsAround?: boolean;
  image: {
    uri?: string;
  };
};

type BackgroundAsset = {
  id?: string;
  image: {
    uri?: string;
  };
  previewImage?: {
    uri?: string;
  };
  backgroundColor: string;
  textColor?: string;
};

type Props = {
  yuCoinAmount: number;
  textColor: string;
  backgrounds?: BackgroundAsset[];
  selectBackground?: (key: BackgroundAsset) => void;
  background?: BackgroundAsset;
  message: string;
  stickers?: StickerAsset[];
  hasSaidThankYou?: boolean;
  onPressSticker?: () => void;
  onThankYouPress?: () => void;
  onSendGift?: () => void;
  currentSticker: StickerAsset;
  sender?: {
    avatar?: {
      uri?: string;
    };
    fullName?: string;
  };
  showContent?: boolean;
};

const GiftView = ({
  yuCoinAmount,
  backgrounds,
  selectBackground,
  background,
  message,
  textColor,
  onPressSticker,
  stickers,
  currentSticker,
  sender,
  hasSaidThankYou,
  onThankYouPress,
  onSendGift,
  showContent = true,
}: Props) => {
  const wrapperStyle = useMemo(
    () => (background?.backgroundColor ? { backgroundColor: background.backgroundColor } : {}),
    [background]
  );

  return (
    <View style={[styles.screen, wrapperStyle]} testID={P2P_GIFT_VIEW}>
      <Background image={background?.image} />
      <ScrollView showsVerticalScrollIndicator={false} style={[styles.screen, styles.safeArea]}>
        <Sender sender={sender} textColor={textColor} />
        {!showContent ? null : (
          <>
            <YuCoin yuCoinAmount={yuCoinAmount} />
            <Sticker
              onPressSticker={onPressSticker}
              stickers={stickers}
              currentSticker={currentSticker}
              textColor={textColor}
            />
            <Message message={message} textColor={textColor} />
            <Thanks hasSaidThankYou={hasSaidThankYou} onThankYouPress={onThankYouPress} />
          </>
        )}
      </ScrollView>
      {!backgrounds?.length ? null : (
        <Slider
          title={t("screens.gifting.change_background")}
          textColor={textColor}
          items={backgrounds}
          selectItem={selectBackground}
          selectedItem={background}
        />
      )}
      {!onSendGift ? null : (
        <Box width="100%" position="absolute" bottom={navBarStyles.getPositionBottom()}>
          <Button
            translationKey={
              hasSaidThankYou ? "screens.gifting.send_your_own_message" : "screens.gifting.send_your_friend_a_gift"
            }
            onPress={onSendGift}
          />
        </Box>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    overflow: "hidden",
  },
  safeArea: {
    marginTop: TOP_BAR.PADDING_TOP + Style.adjust(8),
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  rays: {
    position: "absolute",
    height: Style.adjust(560),
    width: Style.adjust(560),
    bottom: -Style.adjust(24),
    left: Style.DEVICE_WIDTH / 2 - Style.adjust(560) / 2,
    opacity: 0.1,
  },
});

const Background = ({ image }: { image: BackgroundAsset["image"] }) => {
  if (!image?.uri) {
    return null;
  }

  return (
    <Box position="absolute" w="100%" bottom={0}>
      <Image width={Style.DEVICE_WIDTH} suppressLoadingUi={true} source={image} resizeMode="cover" />
    </Box>
  );
};

const Sender = ({ sender, textColor }: Pick<Props, "sender" | "textColor">) => {
  if (sender?.fullName || sender?.avatar?.uri) {
    return (
      <Box justifyContent="center" alignItems="center">
        {sender?.avatar?.uri ? <Avatar size={40} uri={sender.avatar.uri} /> : null}
        {sender?.fullName ? (
          <Box mt={4}>
            <TextTemplate type="l3b" color={textColor}>
              {sender.fullName}
            </TextTemplate>
          </Box>
        ) : null}
      </Box>
    );
  }

  return <Box height={62} />;
};

const YuCoin = ({ yuCoinAmount }: Pick<Props, "yuCoinAmount">) => {
  if (!yuCoinAmount) {
    return null;
  }

  return (
    <Box
      mt={54}
      w={Style.DEVICE_WIDTH}
      disableAutoAdjust={true}
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      gap={4}
      ph={24}
      entering={BounceIn.duration(1000)}
    >
      <TextTemplate type="bigYuCoin" color={Colours.primary.p600}>
        +{yuCoinAmount}
      </TextTemplate>
      <YuCoinTopNavIcon size={30} />
    </Box>
  );
};

const Sticker = ({
  textColor,
  onPressSticker,
  stickers,
  currentSticker,
}: Pick<Props, "currentSticker" | "onPressSticker" | "stickers" | "textColor">) => {
  const StickerWrapper = onPressSticker ? Pressable : Box;
  const stickerWrapperProps = onPressSticker ? { onPress: onPressSticker } : {};

  return (
    <Box
      mt={32}
      h={188}
      w={"100%"}
      justifyContent="center"
      alignItems="center"
      entering={ZoomIn.duration(1000)}
      testID={P2P_STICKER}
    >
      <StickerWrapper style={styles.center} {...stickerWrapperProps}>
        <Box position="absolute" h={188} justifyContent="center" alignItems="center">
          {stickers?.length && !currentSticker ? (
            <Box h={188} justifyContent="center" alignItems="center">
              <AddIcon color={textColor} />
              <Box mt={12}>
                <TextTemplate color={textColor} type="b2b">
                  {t("screens.gifting.add_sticker")}
                </TextTemplate>
              </Box>
            </Box>
          ) : currentSticker ? (
            <Box justifyContent="center" alignItems="center" mh={24}>
              <ItemDetailsReward
                bubblesEnabled={false}
                starsEnabled={currentSticker?.hasAnimatedStarsAround}
                size={188}
                starMultiplier={3}
                source={currentSticker.image}
              />
            </Box>
          ) : null}
        </Box>
      </StickerWrapper>
    </Box>
  );
};

const Message = ({ message, textColor }: Pick<Props, "message" | "textColor">) => {
  if (!message) {
    return null;
  }

  return (
    <Box
      mt={32}
      w={"100%"}
      justifyContent="center"
      alignItems="center"
      ph={24}
      entering={FadeIn.delay(800).duration(1000)}
      testID={P2P_MESSAGE(message)}
    >
      <TextTemplate type="h3" color={textColor} textAlign="center">
        {message}
      </TextTemplate>
    </Box>
  );
};

const Thanks = ({ hasSaidThankYou, onThankYouPress }: Pick<Props, "hasSaidThankYou" | "onThankYouPress">) => {
  if (!onThankYouPress) {
    return null;
  }

  return (
    <Box mt={24} justifyContent="center" alignItems="center" entering={FadeIn.delay(1000).duration(500)}>
      <Box>
        <SecondaryButton
          translationKey={hasSaidThankYou ? "screens.gifting.already_thanked_them" : "screens.gifting.thank_them"}
          size="Narrow"
          contentTextStyle="l2"
          contentWrapperStyle={{ paddingHorizontal: Style.adjust(8) }}
          onPress={onThankYouPress}
          borderColor={Colours.neutral.white}
          backgroundColor={Colours.neutral.white}
          textColor={Colours.neutral.n900}
          disabled={hasSaidThankYou}
          leftIcon={
            <YuHeartIcon
              height={16}
              width={16}
              colour={hasSaidThankYou ? Colours.darkHotPink : Colours.neutral.n900}
              isFilled={hasSaidThankYou}
            />
          }
        />
      </Box>
    </Box>
  );
};

export default memo(GiftView);
