import { memo } from "react";
import Animated from "react-native-reanimated";
import { Box } from "@atoms";
import { GenericHeadingAbsolute, GiftViewLoading } from "@organisms";
import GiftView from "@organisms/gift-view/gift-view";
import { VoidFunction } from "@utils";
import Pressable from "@components/molecules/pressable/pressable";
import { useGiftViewLoadingAnimation } from "./hooks/use-gift-view-loading-animation";
import { GiftClaimType } from "@graphql/__generated";

type Props = {
  loading: boolean;
  hasError: boolean;
  onSendGift: VoidFunction;
  onClose: VoidFunction;
  onThankYouPress: VoidFunction;
  claimType?: GiftClaimType;
  textColor: string;
  yuCoinAmount: number;
  yuCoinTextColor: string;
  message: string;
  hasSaidThankYou: boolean;
  background: {
    backgroundColor: string;
    image: {
      uri?: string;
    };
  };
  sticker: {
    hasAnimatedStarsAround: boolean;
    image: {
      uri?: string;
    };
  };
  sender: {
    avatar?: {
      uri?: string;
    };
    fullName?: string;
  };
};

const GiftViewScreen = ({
  loading,
  hasError,
  onClose,
  textColor,
  yuCoinAmount,
  yuCoinTextColor,
  message,
  sender,
  claimType,
  background,
  sticker,
  hasSaidThankYou,
  onThankYouPress,
  onSendGift,
}: Props) => {
  const { showAnimation, showContent, giftLoadingStyle, setFinishedAnimation, onLoadingPress } =
    useGiftViewLoadingAnimation({
      loading,
      hasError,
      onClose,
    });

  return (
    <Box flex={1}>
      <GiftView
        yuCoinAmount={yuCoinAmount}
        yuCoinTextColor={yuCoinTextColor}
        textColor={textColor}
        background={background}
        message={message}
        currentSticker={sticker}
        sender={sender}
        hasSaidThankYou={hasSaidThankYou}
        claimType={claimType}
        onThankYouPress={onThankYouPress}
        onSendGift={onSendGift}
        showContent={showContent}
      />
      <GenericHeadingAbsolute onRightIconPress={onClose} backgroundColor="transparent" color={textColor} />
      <Animated.View style={giftLoadingStyle}>
        <Pressable onPress={onLoadingPress}>
          <GiftViewLoading showAnimation={showAnimation} setFinishedAnimation={setFinishedAnimation} />
        </Pressable>
      </Animated.View>
    </Box>
  );
};

export default memo(GiftViewScreen);
