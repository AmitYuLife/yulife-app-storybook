import React, { memo } from "react";
import { LeaderboardSearchContainer } from "@components/containers";
import { ILeaderboardSearchContainerProps as IProps } from "@components/containers/member/leaderboard/leaderboard-search.container";

const LeaderboardSearchModal = ({
  heading,
  subHeading,
  socialGroupId,
  socialGroupLeaderboardId,
  onItemPress,
  referralAmount,
}: IProps) => (
  <LeaderboardSearchContainer
    heading={heading}
    subHeading={subHeading}
    socialGroupId={socialGroupId}
    socialGroupLeaderboardId={socialGroupLeaderboardId}
    onItemPress={onItemPress}
    referralAmount={referralAmount}
  />
);

export default memo(LeaderboardSearchModal);
