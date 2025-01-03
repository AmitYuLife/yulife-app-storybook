import { Box, Loading } from "@atoms";
import { GenericHeadingAbsolute } from "@organisms";
import GiftView from "@organisms/gift-view/gift-view";
import { VoidFunction } from "@utils";
import { memo } from "react";

type Props = {
  loading: boolean;
  onSendGift: VoidFunction;
  onClose: VoidFunction;
  onThankYouPress: VoidFunction;
  textColor: string;
  yuCoinAmount: number;
  message: string;
  hasSaidThankYou: boolean;
  background: {
    backgroundColor: string;
    hasAnimatedRays: boolean;
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
  onClose,
  textColor,
  yuCoinAmount,
  message,
  sender,
  background,
  sticker,
  hasSaidThankYou,
  onThankYouPress,
  onSendGift,
}: Props) => {
  if (loading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Loading />
      </Box>
    );
  }

  return (
    <Box flex={1}>
      <GiftView
        yuCoinAmount={yuCoinAmount}
        textColor={textColor}
        background={background}
        message={message}
        currentSticker={sticker}
        sender={sender}
        hasSaidThankYou={hasSaidThankYou}
        onThankYouPress={onThankYouPress}
        onSendGift={onSendGift}
      />
      <GenericHeadingAbsolute onRightIconPress={onClose} backgroundColor="transparent" color={textColor} />
    </Box>
  );
};

export default memo(GiftViewScreen);
