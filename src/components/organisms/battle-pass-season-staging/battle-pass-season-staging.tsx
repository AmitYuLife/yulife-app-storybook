import { Box, TextTemplate } from "@atoms";
import { t } from "@locale";
import { memo, useContext, useEffect } from "react";
import { RewardsManagerContext } from "@components/containers/member/rewards/rewards.manager.context";
import { RewardsManagerActionTypes } from "@components/containers/member/rewards/rewards.types";

const BattlePassSeasonStaging = () => {
  const { dispatch } = useContext(RewardsManagerContext);

  useEffect(() => {
    dispatch({ type: RewardsManagerActionTypes.SET_END_OF_SEASON, payload: true });
  }, []);

  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg="#290163">
      <Box px={20} gap={40}>
        <Box justifyContent="center" alignItems="center">
          <TextTemplate color="white" textAlign="center" type="h2">
            {t("screens.battle_pass.season_complete.staging.title")}
          </TextTemplate>
          <TextTemplate type="b2" color="white" textAlign="center">
            {t("screens.battle_pass.season_complete.staging.description")}
          </TextTemplate>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(BattlePassSeasonStaging);
