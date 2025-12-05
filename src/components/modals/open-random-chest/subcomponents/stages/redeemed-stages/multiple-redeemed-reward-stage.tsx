import { memo } from "react";
import { GetMobileGameBattlePassChestDetailsQuery, GamePrizeType } from "@graphql/__generated";
import ChestHeaderText from "../../chest-header-text";
import { ShowcaseStack } from "@components/molecules";
import StageContainer from "../../stage-container";
import { Box } from "@atoms";
import ClaimedRewardCard from "@organisms/claimed-reward-card/claimed-reward-card";
import { CLAIMED_REWARD_ITEMS } from "@ids";
import { t } from "@locale";
import ChestAnimatedRaysBackground from "../../chest-animated-rays-background";
import RedeemedStageFooter from "../../redeemed-stage-footer";
import { DETOX_ENABLED } from "@services/socket";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IRedeemedStageProps {
  onClose?: () => void;
  redeemedItems: GetMobileGameBattlePassChestDetailsQuery["details"]["redeemedRewards"];
  awardedPrizeTypes?: GamePrizeType[];
  title?: string;
}

const MultipleRedeemedRewardStage = ({ redeemedItems, onClose, awardedPrizeTypes = [] }: IRedeemedStageProps) => {
  const { top } = useSafeAreaInsets();

  return (
    <StageContainer>
      {DETOX_ENABLED ? null : <ChestAnimatedRaysBackground />}
      <Box mt={top} w="100%" testID={CLAIMED_REWARD_ITEMS(redeemedItems?.length)}>
        <ShowcaseStack>
          {redeemedItems?.map((item) => (
            <ClaimedRewardCard
              key={item.id}
              value={item.value}
              image={item.image.uri}
              title={item.label}
              backgroundColor={item.colors.backgroundColor}
              borderColor={item.colors.borderColor}
              color={item.colors.textColor}
            />
          ))}
        </ShowcaseStack>
        <ChestHeaderText label={t("modals.open_random_chest.rewards_collected")} />
      </Box>
      <RedeemedStageFooter awardedPrizeTypes={awardedPrizeTypes} onClose={onClose} />
    </StageContainer>
  );
};

export default memo(MultipleRedeemedRewardStage);
