import { Box, TextTemplate } from "@atoms";
import { t } from "@locale";
import { Style } from "@styles";
import { memo, useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { RewardsManagerContext } from "@components/containers/member/rewards/rewards.manager.context";
import { RewardsManagerActionTypes } from "@components/containers/member/rewards/rewards.types";

const BattlePassSeasonStaging = () => {
  const { dispatch } = useContext(RewardsManagerContext);

  useEffect(() => {
    dispatch({ type: RewardsManagerActionTypes.SET_END_OF_SEASON, payload: true });
  }, []);
  return (
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
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  contentContainer: { paddingHorizontal: Style.adjust(20) },
});

export default memo(BattlePassSeasonStaging);
