import { LeaderboardSearchScreen } from "@components/screens";
import { gql } from "@graphql/__generated";
import { useDebouncedQuery } from "@hooks";
import { MODALS } from "@navigation/constants";
import React, { memo, useCallback } from "react";
import { Navigation } from "react-native-navigation";

export interface ILeaderboardSearchContainerProps {
  heading: string;
  subHeading: string;
  socialGroupId?: string;
  socialGroupLeaderboardId?: string;
  onItemPress?: (userId: string) => void;
  referralAmount: number;
}

const LeaderboardSearchContainer = ({
  heading,
  subHeading,
  socialGroupId,
  socialGroupLeaderboardId,
  onItemPress,
  referralAmount,
}: ILeaderboardSearchContainerProps) => {
  const [searchLeaderboardUser, { data, loading }] = useDebouncedQuery(gql("SearchLeaderboardUserDocument"), {
    fetchPolicy: "network-only",
  });

  const handlePress = useCallback((userId: string) => {
    onItemPress?.(userId);
    Navigation.dismissAllModals();
  }, []);

  const onClose = useCallback(() => {
    Navigation.dismissModal(MODALS.leaderboardSearch);
  }, []);

  return (
    <LeaderboardSearchScreen
      data={data}
      loading={loading}
      heading={heading}
      subHeading={subHeading}
      socialGroupId={socialGroupId}
      socialGroupLeaderboardId={socialGroupLeaderboardId}
      searchLeaderboardUser={searchLeaderboardUser}
      onItemPress={handlePress}
      onClose={onClose}
      referralAmount={referralAmount}
    />
  );
};

export default memo(LeaderboardSearchContainer);
