import { GetMobileGameBattlePassFullQuery, GoalRewardStatus } from "@graphql/__generated";
import { first } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useShowFtux = (battlePass: GetMobileGameBattlePassFullQuery["battlePass"]) => {
  const [showFtuxLocalState, setShowFtuxLocalState] = useState(false);
  const [showFirstLevelBattlePassVariant, setShowFirstLevelBattlePassVariant] = useState(false);

  const rewards = useMemo(() => battlePass?.rewards || [], [battlePass?.rewards]);
  const showFtux = useMemo(() => {
    return (
      battlePass?.season === 1 && battlePass?.progressStatus?.level === 0 && battlePass?.progressStatus?.step === 0
    );
  }, [battlePass?.progressStatus?.level, battlePass?.progressStatus?.step, battlePass?.season]);

  useEffect(() => {
    const firstReward = first(rewards);
    // has not received first level reward yet
    if (
      firstReward?.status === GoalRewardStatus.Pending &&
      battlePass?.season === 1 &&
      battlePass?.progressStatus?.level === 0
    ) {
      setShowFirstLevelBattlePassVariant(true);
    }
  }, [rewards, battlePass?.season, battlePass?.progressStatus?.level]);

  useEffect(() => {
    const firstReward = first(rewards);
    if (firstReward?.status === GoalRewardStatus.Claimed) {
      setShowFirstLevelBattlePassVariant(false);
    }
  }, [rewards]);

  useEffect(() => {
    setShowFtuxLocalState(showFtux);
  }, [showFtux]);

  const handleCloseFtux = useCallback(() => {
    setShowFtuxLocalState(false);
  }, []);

  return useMemo(
    () => ({
      showFtux: showFtuxLocalState,
      showFirstLevelBattlePassVariant,
      handleCloseFtux,
    }),
    [showFtuxLocalState, showFirstLevelBattlePassVariant]
  );
};
