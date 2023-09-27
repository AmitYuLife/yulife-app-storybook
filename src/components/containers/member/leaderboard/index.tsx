import React, { memo } from "react";
import { useUserFeatures } from "@hooks";
import { LeaderboardContainer } from "./leaderboard.container";
import ActiveLeaderboardContainer from "./_legacy/active-leaderboard/active-leaderboard.container";
import { IMainTabsProps } from "@navigation/root";

const LeaderboardWrapper = ({ componentId, onLeftMenuPress, labels }: IMainTabsProps) => {
  const { showNewLeaderBoard } = useUserFeatures();
  return (
    <>
      {showNewLeaderBoard ? (
        <LeaderboardContainer componentId={componentId} onLeftMenuPress={onLeftMenuPress} />
      ) : (
        <ActiveLeaderboardContainer onLeftMenuPress={onLeftMenuPress} labels={labels} />
      )}
    </>
  );
};

export default memo(LeaderboardWrapper);
