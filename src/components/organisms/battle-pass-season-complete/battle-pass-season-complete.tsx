import { Box, TextTemplate } from "@atoms";
import { Button } from "@components/molecules";
import { t } from "@locale";
import { IBattlePassListItem } from "@organisms/battle-pass-list-item/battle-pass-list-item";
import { Colours, Style } from "@styles";
import { StyleSheet, View } from "react-native";
import Animated, { FadeInDown, FadeInUp, FadeOutDown, FadeOutUp } from "react-native-reanimated";

interface IBattlePassSeasonComplete {
  rewards: IBattlePassListItem[];
  onClaimRewards?: () => void;
  showClaimButton?: boolean;
  isLoading?: boolean;
  title?: string;
  onComplete?: () => void;
}

export const BattlePassSeasonComplete = ({
  rewards,
  onComplete,
  onClaimRewards,
  showClaimButton,
  isLoading,
  title,
}: IBattlePassSeasonComplete) => {
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
        <Box center={true}>
          <TextTemplate type="b2" textAlign="center">
            {t(
              hasUnclaimedRewards
                ? "screens.battle_pass.season_complete.unclaimed_rewards"
                : "screens.battle_pass.season_complete.go_to_next_season"
            )}
          </TextTemplate>
        </Box>
      </Box>
      <View style={styles.buttonContainer}>
        {hasUnclaimedRewards ? (
          <>
            {showClaimButton ? (
              <Animated.View entering={FadeInDown.delay(100).duration(300)} exiting={FadeOutDown.duration(300)}>
                <Button
                  translationKey="screens.battle_pass.season_complete.claim_rewards.claim_button"
                  onPress={onClaimRewards}
                  disabled={!showClaimButton}
                />
              </Animated.View>
            ) : (
              <Animated.View entering={FadeInUp.delay(100).duration(300)} exiting={FadeOutUp.duration(300)} key="b">
                <TextTemplate type="l1" textAlign="center">
                  {t("screens.battle_pass.season_complete.claim_rewards.claim_action")}
                </TextTemplate>
              </Animated.View>
            )}
          </>
        ) : (
          <Button
            isLoading={isLoading}
            translationKey="screens.battle_pass.season_complete.go_to_next_season_button"
            onPress={onComplete}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Style.adjust(40),
    paddingHorizontal: Style.adjust(10),
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
