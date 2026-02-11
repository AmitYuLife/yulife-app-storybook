import { memo } from "react";
import { GetMobileGameBattlePassChestDetailsQuery } from "@graphql/__generated";
import RadioBattlePassRewardItem from "@components/molecules/radio-battle-pass-reward-item/radio-battle-pass-reward-item";
import { FadeOutDown } from "react-native-reanimated";
import { Button } from "@components/molecules";
import ChestHeaderText from "../../chest-header-text";
import { Box } from "@atoms";
import { t } from "@locale";

interface IChestRedeemedStageProps {
  redeemedItems: GetMobileGameBattlePassChestDetailsQuery["details"]["redeemedRewards"];
  onClose?: () => void;
}

const ChestRedeemedStage = ({ redeemedItems, onClose }: IChestRedeemedStageProps) => {
  return (
    <Box w="100%" alignItems="center" justifyContent="center" pt={48}>
      <ChestHeaderText label={t("modals.open_random_chest.default_redeemed_stage_title")} />
      <Box w="100%" gap={15} ph={30}>
        {redeemedItems.map((item) => (
          <RadioBattlePassRewardItem
            key={item.id}
            checked={true}
            onPress={onClose}
            reward={{ id: item.id, title: item.title }}
          />
        ))}
      </Box>
      <Box exiting={FadeOutDown.duration(800)} mt={36}>
        <Button translationKey="labels.cta.close" onPress={onClose} />
      </Box>
    </Box>
  );
};

export default memo(ChestRedeemedStage);
