import { memo, useCallback } from "react";
import { IPickStageProps } from "../../../open-random-chest.types";
import { FadeInDown } from "react-native-reanimated";
import ClaimPrizeButton from "../../claim-prize-button";
import ChestHeaderText from "../../chest-header-text";
import { ShowcaseStack } from "@components/molecules";
import StageContainer from "../../stage-container";
import { Box } from "@atoms";
import ClaimedRewardCard from "@organisms/claimed-reward-card/claimed-reward-card";
import ClaimLights from "../claim-all/claim-lights";
import { useTranslation } from "@hooks";

const AllPickRewardStage = ({ openedItems, isLoading, onClaim }: IPickStageProps) => {
  const onClaimPress = useCallback(() => {
    onClaim(openedItems.map((item) => item.id));
  }, [onClaim, openedItems]);

  const t = useTranslation(["modals.open_random_chest.claim_all_title", "modals.open_random_chest.claim_all_subtitle"]);

  return (
    <StageContainer>
      <Box position="absolute" bottom={50} entering={FadeInDown.delay(200).duration(1000)}>
        <ClaimLights />
      </Box>
      <ChestHeaderText
        label={t["modals.open_random_chest.claim_all_title"]}
        body={t["modals.open_random_chest.claim_all_subtitle"]}
      />
      <Box p={5} w="100%">
        <ShowcaseStack>
          {openedItems.map((item) => (
            <ClaimedRewardCard
              key={item.id}
              value={item.item.value}
              image={item.item.image.uri}
              title={item.item.label}
              backgroundColor={item.item.colors.backgroundColor}
              borderColor={item.item.colors.borderColor}
              color={item.item.colors.textColor}
            />
          ))}
        </ShowcaseStack>
      </Box>

      <ClaimPrizeButton onPress={onClaimPress} isLoading={isLoading} shouldShow={true} />
    </StageContainer>
  );
};

export default memo(AllPickRewardStage);
