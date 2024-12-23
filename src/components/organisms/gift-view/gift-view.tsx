import { Box, Image, TextTemplate } from "@atoms";
import { AddIcon } from "@atoms/icon/add-icon";
import { YuCoinTopNavIcon } from "@atoms/icon/yucoin-top-nav-icon";
import { Avatar, Button, SecondaryButton } from "@molecules";
import { t } from "@locale";
import ItemDetailsReward from "@organisms/item-details-reward/item-details-reward";
import PodiumRays from "@organisms/podium/podium-rays";
import { Style, Colours, TOP_BAR } from "@styles";
import { memo, useMemo } from "react";
import { ScrollView, Pressable, StyleSheet, View } from "react-native";
import { FadeIn, ZoomIn, BounceIn } from "react-native-reanimated";
import { YuHeartIcon } from "@atoms/icon/yu-heart-icon";
import navBarStyles from "@styles/nav-bar.styles";

type Asset = {
  id?: string;
  hasAnimatedStarsAround?: boolean;
  image: {
    uri?: string;
  };
  textColor?: string;
};

type Props = {
  yuCoinAmount: number;
  textColor: string;
  background?: Asset & { hasAnimatedRays: boolean; backgroundColor: string };
  message: string;
  stickers?: Asset[];
  hasSaidThankYou?: boolean;
  onPressSticker?: () => void;
  onThankYouPress?: () => void;
  onSendGift?: () => void;
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
}: Props) => {
  const wrapperStyle = useMemo(
    () => (background?.backgroundColor ? { backgroundColor: background.backgroundColor } : {}),
    [background]
  );

  return (
    <View style={[styles.screen, wrapperStyle]}>
      <Background image={background?.image} />
      <BackgroundRays hasAnimatedRays={background?.hasAnimatedRays} />
      <ScrollView showsVerticalScrollIndicator={false} style={[styles.screen, styles.safeArea]}>
        <Sender sender={sender} textColor={textColor} />
        <YuCoin yuCoinAmount={yuCoinAmount} />
        <Sticker
          onPressSticker={onPressSticker}
          stickers={stickers}
          currentSticker={currentSticker}
          textColor={textColor}
        />
        <Message message={message} textColor={textColor} />
        <Thanks hasSaidThankYou={hasSaidThankYou} onThankYouPress={onThankYouPress} />
      </ScrollView>
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
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
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

const Background = ({ image }: { image: Asset["image"] }) => {
  if (!image?.uri) {
    return null;
  }

  return (
    <Box position="absolute" top={0} right={0} left={0} bottom={0}>
      <Image width={Style.DEVICE_WIDTH} suppressLoadingUi={true} source={image} resizeMode="cover" />
    </Box>
  );
};

const BackgroundRays = ({ hasAnimatedRays }: { hasAnimatedRays: boolean }) => {
  if (!hasAnimatedRays) {
    return null;
  }

  return <PodiumRays containerStyle={styles.rays} backgroundColor="transparent" style="alternate" />;
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

  return <Box height={48} />;
};

const YuCoin = ({ yuCoinAmount }: Pick<Props, "yuCoinAmount">) => {
  if (!yuCoinAmount) {
    return null;
  }

  return (
    <Box
      mt={40}
      w={Style.DEVICE_WIDTH}
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
      w={Style.DEVICE_WIDTH}
      justifyContent="center"
      alignItems="center"
      entering={ZoomIn.duration(1000)}
    >
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
      w={Style.DEVICE_WIDTH}
      justifyContent="center"
      alignItems="center"
      ph={24}
      entering={FadeIn.delay(800).duration(1000)}
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
