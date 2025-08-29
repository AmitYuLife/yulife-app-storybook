import { Box, Image, TextTemplate } from "@atoms";
import { AddIcon } from "@atoms/icon/add-icon";
import { YuCoinTopNavIcon } from "@atoms/icon/yucoin-top-nav-icon";
import { Avatar, Button, SecondaryButton, Slider } from "@molecules";
import { t } from "@locale";
import ItemDetailsReward from "@organisms/item-details-reward/item-details-reward";
import { Style, Colours, TOP_BAR, NAV_BAR, StyleSheet } from "@styles";
import { memo, useCallback, useMemo } from "react";
import { ScrollView, Pressable, View } from "react-native";
import {
  FadeIn,
  ZoomIn,
  BounceIn,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
  withTiming,
  Easing,
} from "react-native-reanimated";
import navBarStyles from "@styles/nav-bar.styles";
import {
  P2P_GIFT_VIEW,
  SENDER_GIFTING_AMOUNT,
  P2P_MESSAGE,
  P2P_STICKER,
  P2P_STICKER_ITEMS,
  P2P_THANK_THEM_HEART,
} from "@ids";
import { GiftingHeartIcon } from "@atoms/icon/gifting-heart-icon";
import { addCommasToNumber } from "@utils";
import { GiftClaimType } from "@graphql/__generated";

const MAX_MESSAGE_LENGTH = 50;

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
  yuCoinTextColor?: string;
};

type Props = {
  yuCoinAmount: number;
  textColor: string;
  yuCoinTextColor: string;
  backgrounds?: BackgroundAsset[];
  selectBackground?: (key: BackgroundAsset) => void;
  background?: BackgroundAsset;
  message: string;
  stickers?: StickerAsset[];
  hasSaidThankYou?: boolean;
  onPressSticker?: () => void;
  onThankYouPress?: () => void;
  onSendGift?: () => void;
  claimType?: GiftClaimType;
  currentSticker: StickerAsset;
  sender?: {
    avatar?: {
      uri?: string;
    };
    fullName?: string;
  };
  showContent?: boolean;
};

const GiftView = memo(
  ({
    yuCoinAmount,
    yuCoinTextColor,
    backgrounds,
    selectBackground,
    background,
    message,
    textColor,
    onPressSticker,
    stickers,
    claimType = GiftClaimType.Player,
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

    const isBusinessClaimType = claimType === GiftClaimType.Company;

    return (
      <View style={[styles.screen, wrapperStyle]} testID={P2P_GIFT_VIEW(background?.id)}>
        <Background image={background?.image} />
        <ScrollView showsVerticalScrollIndicator={false} style={[styles.scrollView, styles.safeArea]}>
          <Sender sender={sender} textColor={textColor} />
          {!showContent ? null : (
            <>
              <YuCoin yuCoinAmount={yuCoinAmount} yuCoinTextColor={yuCoinTextColor} />
              <Sticker
                onPressSticker={onPressSticker}
                stickers={stickers}
                currentSticker={currentSticker}
                textColor={textColor}
              />
              <Message message={message} textColor={textColor} />
              {!isBusinessClaimType ? (
                <Thanks hasSaidThankYou={hasSaidThankYou} onThankYouPress={onThankYouPress} />
              ) : null}
              <Box height={(message || "").length > MAX_MESSAGE_LENGTH ? NAV_BAR.DEFAULT_FULL_HEIGHT : 1} />
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
                isBusinessClaimType ? "screens.gifting.spend_your_yucoin" : "screens.gifting.send_your_friend_a_gift"
              }
              onPress={onSendGift}
            />
          </Box>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    overflow: "hidden",
  },
  scrollView: {
    flex: 1,
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
    start: Style.DEVICE_WIDTH / 2 - Style.adjust(560) / 2,
    opacity: 0.1,
  },
});

const Background = memo(({ image }: { image: BackgroundAsset["image"] }) => {
  if (!image?.uri) {
    return null;
  }

  return (
    <Box position="absolute" w="100%" bottom={0}>
      <Image width={Style.DEVICE_WIDTH} suppressLoadingUi={true} source={image} resizeMode="cover" />
    </Box>
  );
});

const Sender = memo(({ sender, textColor }: Pick<Props, "sender" | "textColor" | "claimType">) => {
  if (sender?.fullName || sender?.avatar?.uri) {
    return (
      <Box justifyContent="center" alignItems="center">
        {sender?.avatar?.uri ? <Avatar size={40} uri={sender.avatar.uri} heightScale={1} /> : null}
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
});

const YuCoin = memo(
  ({ yuCoinAmount, yuCoinTextColor = Colours.primary.p600 }: Pick<Props, "yuCoinAmount" | "yuCoinTextColor">) => {
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
        <TextTemplate type="bigYuCoin" color={yuCoinTextColor} testID={SENDER_GIFTING_AMOUNT(yuCoinAmount)}>
          +{addCommasToNumber(yuCoinAmount)}
        </TextTemplate>
        <YuCoinTopNavIcon size={30} />
      </Box>
    );
  }
);

const stickerConfig = {
  hitSlop: { top: 20, bottom: 20, left: 20, right: 20 },
};

const Sticker = memo(
  ({
    textColor,
    onPressSticker,
    stickers,
    currentSticker,
  }: Pick<Props, "currentSticker" | "onPressSticker" | "stickers" | "textColor">) => {
    const StickerWrapper = onPressSticker ? Pressable : Box;
    const stickerWrapperProps = onPressSticker ? { onPress: onPressSticker, hitSlop: stickerConfig.hitSlop } : {};

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
              <Box justifyContent="center" alignItems="center" mh={24} testID={P2P_STICKER_ITEMS(currentSticker.id)}>
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
  }
);

const Message = memo(({ message, textColor }: Pick<Props, "message" | "textColor">) => {
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
});

const Thanks = memo(({ hasSaidThankYou, onThankYouPress }: Pick<Props, "hasSaidThankYou" | "onThankYouPress">) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const triggerAnimation = useCallback(() => {
    scale.value = withSequence(
      withTiming(1.25, { easing: Easing.out(Easing.ease) }),
      withSpring(1, { damping: 5, stiffness: 130 })
    );
  }, [scale]);

  const handleThankYouPress = useCallback(() => {
    triggerAnimation();
    onThankYouPress?.();
  }, [onThankYouPress, triggerAnimation]);

  if (!onThankYouPress) {
    return null;
  }

  return (
    <Box mt={24} justifyContent="center" alignItems="center" entering={FadeIn.delay(1000).duration(500)}>
      <Box>
        <SecondaryButton
          translationKey={hasSaidThankYou ? "screens.gifting.already_thanked_them" : "screens.gifting.thank_them"}
          size="Narrow"
          contentTextStyle="l1"
          contentWrapperStyle={{ paddingHorizontal: Style.adjust(12) }}
          onPress={handleThankYouPress}
          borderColor={Colours.neutral.white}
          backgroundColor={Colours.neutral.white}
          textColor={Colours.neutral.n900}
          disabled={hasSaidThankYou}
          leftIcon={
            <>
              <Box style={animatedStyle} forceAnimated={true}>
                <GiftingHeartIcon
                  height={16}
                  width={19}
                  testID={P2P_THANK_THEM_HEART(hasSaidThankYou)}
                  {...(hasSaidThankYou ? PINK_HEART_COLOURS : GREY_HEART_COLOURS)}
                />
              </Box>
            </>
          }
        />
      </Box>
    </Box>
  );
});

const PINK_HEART_COLOURS = { colour: Colours.primary.p400, shadowColour: Colours.primary.p600 };
const GREY_HEART_COLOURS = { colour: Colours.neutral.n150, shadowColour: Colours.neutral.n250 };

export default memo(GiftView);
