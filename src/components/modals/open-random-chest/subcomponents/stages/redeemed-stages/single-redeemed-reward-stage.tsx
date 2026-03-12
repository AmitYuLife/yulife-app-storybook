import { memo } from "react";
import { GetMobileRewardChestDetailsQuery, GamePrizeType } from "@graphql/__generated";
import { FadeInUp } from "react-native-reanimated";
import ChestHeaderText from "../../chest-header-text";
import { YumojiRewardPicker } from "@components/molecules";
import StageContainer from "../../stage-container";
import { t } from "@locale";
import { noop } from "@utils";
import { Box } from "@atoms";
import ChestAnimatedRaysBackground from "../../chest-animated-rays-background";
import RedeemedStageFooter from "../../redeemed-stage-footer";
import { DETOX_ENABLED } from "@services/socket";

interface IRedeemedStageProps {
  redeemedItems: GetMobileRewardChestDetailsQuery["details"]["redeemedRewards"];
  onClose?: () => void;
  awardedPrizeTypes?: GamePrizeType[];
  title?: string;
}

const SingleRedeemedRewardStage = ({ redeemedItems, onClose, awardedPrizeTypes = [] }: IRedeemedStageProps) => {
  const item = redeemedItems[0];

  const label = t("modals.open_random_chest.reward_collected", {
    reward: item.title,
  });

  return (
    <StageContainer>
      {DETOX_ENABLED ? null : <ChestAnimatedRaysBackground />}
      <Box mt={130} justifyContent="center" alignItems="center">
        <Box justifyContent="center" alignItems="center">
          <Box entering={FadeInUp.delay(400).duration(1000)} width="100%" justifyContent="center" alignItems="center">
            <YumojiRewardPicker activeItem={item.id} onPress={noop} items={[{ id: item.id, image: item.image }]} />
          </Box>
          <ChestHeaderText label={label} />
        </Box>
      </Box>
      <RedeemedStageFooter awardedPrizeTypes={awardedPrizeTypes} onClose={onClose} />
    </StageContainer>
  );
};

export default memo(SingleRedeemedRewardStage);
