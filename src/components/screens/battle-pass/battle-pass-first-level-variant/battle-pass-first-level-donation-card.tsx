import { memo, useCallback, FC, useState } from "react";
import { LayoutChangeEvent } from "react-native";
import { Box, Image, TextTemplate } from "@atoms";
import { Pressable } from "@molecules";
import { Colours, Style } from "@styles";
import { ImageSource } from "expo-image";
import * as Haptics from "expo-haptics";
import { InfoIcon } from "@atoms/icon/info-icon";
import { BattlePassDonationButton } from "@organisms";
import {
  DONATION_BUTTON,
  BATTLE_PASS_FIRST_LEVEL_DONATION_CARD,
  BATTLE_PASS_FIRST_LEVEL_DONATION_CARD_INFO_BUTTON,
  BATTLE_PASS_FIRST_LEVEL_DONATION_CARD_TITLE,
} from "@ids";
import { t } from "@locale";

interface Props {
  id: string;
  rewardId?: string;
  title: string;
  image: ImageSource;
  yuCoin: number;
  showAnimation?: boolean;
  onSubmit: (donationId: string, amount: number) => void;
  onHandleInfoPress: (templateId: string) => void;
}

const IMAGE_SIZE = Style.adjust(88);
const CARD_WIDTH = (Style.DEVICE_WIDTH - 86) / 2;

const BattlePassFirstLevelDonationCard: FC<Props> = ({
  id,
  rewardId,
  title,
  image,
  yuCoin,
  showAnimation,
  onSubmit,
  onHandleInfoPress,
}) => {
  const [buttonX, setButtonX] = useState<number>(0);

  const handleOnPress = useCallback(async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    onSubmit(id, yuCoin);
  }, [id, onSubmit, yuCoin]);

  const handleInfoPress = useCallback(() => {
    onHandleInfoPress(rewardId);
  }, [onHandleInfoPress, rewardId]);

  const onImageContainerLayout = useCallback((event: LayoutChangeEvent) => {
    setButtonX(event.nativeEvent.layout.x);
  }, []);

  return (
    <Box
      w={CARD_WIDTH}
      h={Style.adjust(188)}
      br={16}
      p={Style.adjust(20)}
      pt={Style.adjust(16)}
      borderColor={Colours.neutral.n20}
      borderWidth={1}
      disableAutoAdjust={true}
      testID={BATTLE_PASS_FIRST_LEVEL_DONATION_CARD(id)}
    >
      <Box position="absolute" top={8} right={8} alignItems="center" justifyContent="center">
        <Pressable
          onPress={handleInfoPress}
          delay={500}
          hitSlop={10}
          testID={BATTLE_PASS_FIRST_LEVEL_DONATION_CARD_INFO_BUTTON(id)}
        >
          <InfoIcon colour={Colours.primary.p600} width={Style.adjust(16)} height={Style.adjust(16)} />
        </Pressable>
      </Box>

      <Box alignItems="center" justifyContent="center" flex={1}>
        <Box
          w={IMAGE_SIZE}
          h={IMAGE_SIZE}
          alignItems="center"
          justifyContent="center"
          onLayout={onImageContainerLayout}
        >
          <Image source={image} width={IMAGE_SIZE} height={IMAGE_SIZE} contentFit="contain" suppressLoadingUi={true} />
          <BattlePassDonationButton
            x={buttonX}
            testID={DONATION_BUTTON(id)}
            onPress={handleOnPress}
            translatedLabel={`${yuCoin}`}
            showAnimation={showAnimation}
            accessibilityLabel={t("screens.battle_pass.accessibility.donate_button", { amount: yuCoin, title })}
          />
        </Box>
      </Box>
      <Box mt={8}>
        <TextTemplate
          type="b2b"
          color={Colours.neutral.n900}
          textAlign="center"
          testID={BATTLE_PASS_FIRST_LEVEL_DONATION_CARD_TITLE(title)}
        >
          {title}
        </TextTemplate>
      </Box>
    </Box>
  );
};

export default memo(BattlePassFirstLevelDonationCard);
