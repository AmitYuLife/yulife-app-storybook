import SpinningRewards from "@components/molecules/spinning-rewards/spinning-rewards";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import { ChestStage } from "../../open-random-chest.types";
import { GetMobileGameBattlePassChestDetailsQuery } from "@graphql/__generated";
import { Button } from "@components/molecules";
import { View } from "react-native";

interface IChestStagingStageProps {
  onOpen?: () => void;
  isLoading?: boolean;
  overlayImage?: string;
  onFinish?: () => void;
  stage: ChestStage.staging | ChestStage.ingest;
  possibleItems: GetMobileGameBattlePassChestDetailsQuery["getMobileGameBattlePassChestDetails"]["possibleRewards"];
}

export const ChestStagingStage = ({
  stage,
  onOpen,
  onFinish,
  isLoading,
  overlayImage,
  possibleItems,
}: IChestStagingStageProps) => {
  return (
    <View>
      <SpinningRewards
        stage={stage}
        onFinish={onFinish}
        overlayImage={overlayImage}
        images={possibleItems.map((item) => item.image)}
      />
      {stage === ChestStage.staging ? (
        <Animated.View exiting={FadeOutDown.duration(800)} entering={FadeInDown.delay(1000).duration(800)}>
          <Button translationKey="modals.open_random_chest.open_chest" onPress={onOpen} isLoading={isLoading} />
        </Animated.View>
      ) : null}
    </View>
  );
};
