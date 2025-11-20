import { memo } from "react";
import { GetMobileGameBattlePassChestDetailsQuery, GamePrizeType } from "@graphql/__generated";
import { FadeInUp } from "react-native-reanimated";
import ChestHeaderText from "../../chest-header-text";
import { YumojiRewardPicker } from "@components/molecules";
import StageContainer from "../../stage-container";
import { t } from "@locale";
import { noop } from "@utils";
import { Box } from "@atoms";
import ChestAnimatedRaysBackground from "../../chest-animated-rays-background";
import RedeemedStageFooter from "../../redeemed-stage-footer";

interface IRedeemedStageProps {
  redeemedItems: GetMobileGameBattlePassChestDetailsQuery["details"]["redeemedRewards"];
  onClose?: () => void;
  awardedPrizeTypes?: GamePrizeType[];
  title?: string;
}

const SingleRedeemedRewardStage = ({ redeemedItems, onClose, awardedPrizeTypes = [], title }: IRedeemedStageProps) => {
  const item = redeemedItems[0];

  const isPowerUp = [GamePrizeType.PowerUp, GamePrizeType.ChallengeBoost, GamePrizeType.ChallengeSurge].includes(
    awardedPrizeTypes?.[0]
  );

  const label = isPowerUp
    ? t("modals.open_random_chest.power_up_received")
    : t("modals.open_random_chest.reward_received", {
        reward: title,
      });
  const body = isPowerUp
    ? t("modals.open_random_chest.won_a_reward", { reward: item.title })
    : t("modals.open_random_chest.won_reward", { reward: item.title.toLowerCase() });

  return (
    <StageContainer>
      <ChestAnimatedRaysBackground />
      <Box mt={130} justifyContent="center" alignItems="center">
        <Box justifyContent="center" alignItems="center">
          <Box entering={FadeInUp.delay(400).duration(1000)} width="100%" justifyContent="center" alignItems="center">
            <YumojiRewardPicker activeItem={item.id} onPress={noop} items={[{ id: item.id, image: item.image }]} />
          </Box>
          <ChestHeaderText label={label} body={body} />
        </Box>
      </Box>
      <RedeemedStageFooter awardedPrizeTypes={awardedPrizeTypes} onClose={onClose} />
    </StageContainer>
  );
};

export default memo(SingleRedeemedRewardStage);
