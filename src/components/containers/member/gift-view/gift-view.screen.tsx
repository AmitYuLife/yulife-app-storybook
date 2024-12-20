import { Box, Loading } from "@atoms";
import { GenericHeadingAbsolute } from "@organisms";
import GiftView from "@organisms/gift-view/gift-view";
import { Style } from "@styles";
import { VoidFunction } from "@utils";
import { memo } from "react";

type Props = {
  loading: boolean;
  onPressReply: VoidFunction;
  onClose: VoidFunction;
  textColor: string;
  yuCoinAmount: number;
  message: string;
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

const GiftViewScreen = ({ loading, onClose, textColor, yuCoinAmount, message, sender, background, sticker }: Props) => {
  if (loading) {
    return (
      <Box w={Style.DEVICE_WIDTH} h={Style.DEVICE_HEIGHT} justifyContent="center" alignItems="center">
        <Loading />
      </Box>
    );
  }

  return (
    <Box w={Style.DEVICE_WIDTH} h={Style.DEVICE_HEIGHT}>
      <GiftView
        yuCoinAmount={yuCoinAmount}
        textColor={textColor}
        background={background}
        message={message}
        currentSticker={sticker}
        sender={sender}
      />
      <GenericHeadingAbsolute onRightIconPress={onClose} backgroundColor="transparent" color={textColor} />
    </Box>
  );
};

export default memo(GiftViewScreen);
