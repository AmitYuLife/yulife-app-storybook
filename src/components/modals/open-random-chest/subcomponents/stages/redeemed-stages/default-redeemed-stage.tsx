import { Style, StyleSheet } from "@styles";
import { memo } from "react";
import { View } from "react-native";
import { GetMobileGameBattlePassChestDetailsQuery } from "@graphql/__generated";
import RadioBattlePassRewardItem from "@components/molecules/radio-battle-pass-reward-item/radio-battle-pass-reward-item";
import { FadeOutDown } from "react-native-reanimated";
import { Button } from "@components/molecules";
import ChestHeaderText from "../../chest-header-text";
import { Box } from "@atoms";

interface IChestRedeemedStageProps {
  redeemedItems: GetMobileGameBattlePassChestDetailsQuery["details"]["redeemedRewards"];
  onClose?: () => void;
}

const ChestRedeemedStage = ({ redeemedItems, onClose }: IChestRedeemedStageProps) => (
  <View style={styles.container}>
    {/* TODO: Temporary text */}
    <ChestHeaderText label="You already redeemed your prize!" />
    <View style={styles.listSelectPicker}>
      {redeemedItems.map((item) => (
        <RadioBattlePassRewardItem
          key={item.id}
          checked={true}
          onPress={onClose}
          reward={{ id: item.id, title: item.title }}
        />
      ))}
    </View>
    <Box exiting={FadeOutDown.duration(800)} mt={150}>
      <Button translationKey="labels.cta.close" onPress={onClose} />
    </Box>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Style.adjust(48),
  },
  listSelectPicker: {
    width: "100%",
    gap: Style.adjust(15),
    paddingHorizontal: Style.adjust(30),
  },
});
export default memo(ChestRedeemedStage);
