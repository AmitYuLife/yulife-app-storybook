import { useCallback, useMemo } from "react";
import { gql, MobileGameBattlePassReward } from "@graphql/__generated";
import { useQueryOnScreenSeen } from "@hooks";
import { useNavigation } from "@navigation/navigation.context";
import { useMutation } from "@apollo/client";

const useRewardsUnlock = (passType?: string) => {
  const { componentId } = useNavigation();

  const [refetchUnlockables, { data: queryResult }] = useQueryOnScreenSeen(
    gql("GetMobileUnlockableBattlePassVouchersDocument"),
    componentId,
    { variables: { passType } }
  );

  const [claimMobileGameBattlePassRewards] = useMutation(gql("ClaimMobileGameBattlePassRewardsDocument"), {
    onCompleted: () => refetchUnlockables().catch(() => {}),
  });

  const getClaimRewardCallback = useCallback(
    (reward: MobileGameBattlePassReward, participationId: string) => {
      if (reward.onPress) {
        return reward.onPress;
      }

      return async () => {
        const result = await claimMobileGameBattlePassRewards({
          variables: { rewardIds: [reward.id], participationId },
        });

        return result;
      };
    },
    [claimMobileGameBattlePassRewards]
  );

  const data = queryResult?.getMobileUnlockableBattlePassVouchers;

  const games = useMemo(() => {
    return (data?.games || []).map((game) => ({
      ...game,
      rewards: game.rewards.map((reward) => ({
        ...reward,
        onPress: getClaimRewardCallback(reward, game.id),
      })),
    }));
  }, [data?.games, getClaimRewardCallback]);

  const isEmpty = !data?.games?.length && !data?.futureGames?.length;

  return { componentId, data, games, isEmpty };
};

export default useRewardsUnlock;
