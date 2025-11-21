import { memo } from "react";
import { GamePrizeType } from "@graphql/__generated";
import { FadeInDown, FadeOutDown } from "react-native-reanimated";
import { Box } from "@atoms";
import { Button } from "@components/molecules";
import RewardInfoCard from "./reward-info-card/reward-info-card";
import { CONTINUE_CHEST_PRIZE_BUTTON } from "@ids";

interface IRedeemedStageFooterProps {
  awardedPrizeTypes?: GamePrizeType[];
  onClose?: () => void;
}

const RedeemedStageFooter = ({ awardedPrizeTypes = [], onClose }: IRedeemedStageFooterProps) => {
  return (
    <Box justifyContent="center" alignItems="center" width="100%" gap={30}>
      <Box exiting={FadeOutDown.duration(250)} entering={FadeInDown.delay(400).duration(1000)}>
        <RewardInfoCard rewardTypes={awardedPrizeTypes} />
      </Box>

      <Box exiting={FadeOutDown.duration(250)} entering={FadeInDown.duration(250)}>
        <Button onPress={onClose} testID={CONTINUE_CHEST_PRIZE_BUTTON} translationKey="labels.cta.continue" />
      </Box>
    </Box>
  );
};

export default memo(RedeemedStageFooter);
