import { Box, TextTemplate } from "@atoms";
import { t } from "@locale";
import { IBattlePassListItem } from "@organisms/battle-pass-list-item/battle-pass-list-item";
import { Colours, Style } from "@styles";
import { StyleSheet, View } from "react-native";

interface IBattlePassSeasonComplete {
  rewards: IBattlePassListItem[];
  title?: string;
}

export const BattlePassSeasonComplete = ({ rewards, title }: IBattlePassSeasonComplete) => {
  const hasUnclaimedRewards = !rewards.every((reward) => reward.status === "claimed");

  return (
    <View style={styles.container}>
      <Box gap={12}>
        <Box gap={4} center={true}>
          <TextTemplate type="l1" textAlign="center">
            {t("screens.battle_pass.season_complete.subtitle")}
          </TextTemplate>
          <TextTemplate type="h2" textAlign="center">
            {title}!
          </TextTemplate>
        </Box>
        {!hasUnclaimedRewards ? null : (
          <Box center={true}>
            <TextTemplate type="b2" textAlign="center">
              {t("screens.battle_pass.season_complete.unclaimed_rewards")}
            </TextTemplate>
          </Box>
        )}
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Style.adjust(20),
    paddingHorizontal: Style.adjust(16),
    marginTop: Style.adjust(20),
    borderRadius: Style.adjust(15),
    paddingBottom: Style.adjust(20),
    borderColor: Colours.neutral.n100,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: Style.adjust(50),
    marginTop: Style.adjust(40),
  },
});
