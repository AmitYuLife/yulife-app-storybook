import { Box, TextTemplate } from "@atoms";
import { Button, LottieView } from "@components/molecules";
import { t } from "@locale";
import { ROUTES } from "@navigation/constants";
import { updateRewardsGameMode } from "@redux/rewards-tab/rewards-tab.actions";
import { getRewardsTabSettings } from "@redux/rewards-tab/rewards-tab.selectors";
import { RewardsSection } from "@redux/rewards-tab/rewards-tab.types";
import { Style } from "@styles";
import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Navigation } from "react-native-navigation";
import { useDispatch, useSelector } from "react-redux";

const BACKGROUND_ANIMATION = require("@assets/yuniversal/yuniversal_quest_map_1.json");

interface IBattlePassSeasonStagingProps {
  componentId: string;
}

const BattlePassSeasonStaging = ({ componentId }: IBattlePassSeasonStagingProps) => {
  const dispatch = useDispatch();
  const tabsSettings = useSelector(getRewardsTabSettings);

  return (
    <>
      <LottieView
        resizeMode="cover"
        style={styles.backgroundLottie}
        source={BACKGROUND_ANIMATION}
        autoPlay={true}
        loop={true}
      />
      <View style={styles.container}>
        <Box style={styles.contentContainer} gap={40}>
          <Box justifyContent="center" alignItems="center">
            <TextTemplate color="white" textAlign="center" type="h2">
              {t("screens.battle_pass.season_complete.staging.title")}
            </TextTemplate>
            <TextTemplate type="b2" color="white" textAlign="center">
              {t("screens.battle_pass.season_complete.staging.description")}
            </TextTemplate>
          </Box>
          {tabsSettings?.hasVoucherStore ? (
            <Button
              translationKey="screens.battle_pass.season_complete.staging.go_to_store"
              onPress={() => {
                dispatch(updateRewardsGameMode(RewardsSection.Store));
              }}
            />
          ) : (
            <Button
              translationKey="screens.battle_pass.season_complete.staging.go_to_purchases"
              onPress={() => {
                Navigation.push(componentId, {
                  component: {
                    id: ROUTES.purchases,
                    name: ROUTES.purchases,
                  },
                });
              }}
            />
          )}
        </Box>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  contentContainer: { paddingHorizontal: Style.adjust(20) },
  backgroundLottie: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
    position: "absolute",
  },
});

export default memo(BattlePassSeasonStaging);
