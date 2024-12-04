import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useLazyQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { getActiveSocialGroupLeaderboard } from "@redux/leaderboards/leaderboards.selectors";
import { getCurrentUserId } from "@redux/user/user.selectors";

type Args = {
  excludeSelf: boolean;
};

export const useGetLeaderboardFull = ({ excludeSelf }: Args) => {
  const activeLeaderboard = useSelector(getActiveSocialGroupLeaderboard);
  const currentUserId = useSelector(getCurrentUserId);
  const [getLeaderboardFull, { data }] = useLazyQuery(gql("GetLeaderboardFullDocument"), {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (!activeLeaderboard?.consent) {
      return;
    }

    if (activeLeaderboard?.leaderboardId) {
      getLeaderboardFull({
        variables: {
          leaderboardId: activeLeaderboard?.leaderboardId,
        },
      });
    }
  }, [activeLeaderboard, getLeaderboardFull]);

  const mappedLeaderboard = useMemo(() => {
    const mapped = (data?.leaderboard || []).map((mapItem) => ({
      id: mapItem.userId,
      name: `${mapItem.firstName} ${mapItem.lastName}`,
      avatar: mapItem.avatar,
    }));

    return excludeSelf ? mapped.filter((filterItem) => filterItem.id !== currentUserId) : mapped;
  }, [data?.leaderboard, excludeSelf]);

  return {
    leaderboardItems: mappedLeaderboard,
    referralRewardAmount: data?.referralRewardAmount?.yuCoinAmount ?? 0,
  };
};
