import { LeaderboardSearchScreen } from "@components/screens";
import { SearchLeaderboardUser, SearchLeaderboardUserVariables } from "@graphql/_core/schema";
import { GQL_QUERY_SEARCH_LEADERBOARD_USER } from "@graphql/member/searchLeaderboardUser.gql";
import { useDebouncedQuery } from "@hooks";
import { MODALS, ROUTES } from "@navigation/constants";
import React, { memo, useCallback } from "react";
import { Navigation } from "react-native-navigation";

export interface ILeaderboardSearchContainerProps {
  heading: string;
  subHeading: string;
  socialGroupId?: string;
  socialGroupLeaderboardId?: string;
}

const LeaderboardSearchContainer = ({
  heading,
  subHeading,
  socialGroupId,
  socialGroupLeaderboardId,
}: ILeaderboardSearchContainerProps) => {
  const [searchLeaderboardUser, { data, loading }] = useDebouncedQuery<
    SearchLeaderboardUser,
    SearchLeaderboardUserVariables
  >(GQL_QUERY_SEARCH_LEADERBOARD_USER, {
    fetchPolicy: "network-only",
  });

  const onItemPress = useCallback((userId: string) => {
    Navigation.push(ROUTES.leaderboardsLegacy, {
      component: {
        id: ROUTES.inspect,
        name: ROUTES.inspect,
        passProps: {
          userId,
        },
      },
    });

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
      onItemPress={onItemPress}
      onClose={onClose}
    />
  );
};

export default memo(LeaderboardSearchContainer);
