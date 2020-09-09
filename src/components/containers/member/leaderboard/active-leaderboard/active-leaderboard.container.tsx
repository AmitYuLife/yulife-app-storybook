import React, { useCallback } from "react";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getCurrentUserId, getActiveLeaderboard } from "@redux/user/user.selectors";
import { GetLeaderboard, GetLeaderboardVariables } from "@graphql/_core/schema";
import { GQL_QUERY_LEADERBOARD } from "@graphql/member";
import { LeaderboardLayout } from "./leaderboard-layout/leaderboard-layout";
import { getCopy } from "@redux/copy/copy.selectors";
import { updateLeaderboardConsent } from "@redux/user/user.actions";
import ConsentGuard from "./consent-guard/consent-guard";
import { useQuery } from "@apollo/react-hooks";
import { NetworkStatus } from "apollo-client";
import { LeaderboardContentContainer } from "./leaderboard-content/leaderboard-content";
import { LeaderboardSkeleton } from "./leaderboard-layout/subcomponents/leaderboard-skeleton/leaderboard-skeleton";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";

type ConnectedState = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

type Props = ConnectedState;

export const PAGE_SIZE = 501; // number of rows to show +1

const _ActiveLeaderboard = (props: Props) => {
  const { activeLeaderboard, userId, consentCopy, updateLeaderboardConsent } = props;
  const { data, refetch, networkStatus } = useQuery<GetLeaderboard, GetLeaderboardVariables>(GQL_QUERY_LEADERBOARD, {
    variables: {
      leaderboardId: activeLeaderboard?.leaderboardId,
      sortBy: "steps",
      limit: PAGE_SIZE,
    },
    notifyOnNetworkStatusChange: true,
  });

  const handleRefetch = useCallback(async () => {
    refetch().catch(() => null);
  }, [refetch]);

  const setConsent = useCallback(() => {
    updateLeaderboardConsent({ leaderboardId: activeLeaderboard.leaderboardId, consent: true });
  }, [activeLeaderboard, updateLeaderboardConsent]);

  const openModal = useCallback(async () => {
    await Navigation.showModal({
      component: {
        id: MODALS.leaderboardLean,
        name: MODALS.leaderboardLean,
      },
    });
  }, []);

  if (activeLeaderboard?.isLoading || networkStatus === NetworkStatus.loading) {
    return (
      <LeaderboardLayout>
        <LeaderboardSkeleton />
      </LeaderboardLayout>
    );
  }

  return (
    <LeaderboardLayout>
      <ConsentGuard
        consentCopy={consentCopy}
        setConsent={setConsent}
        leaderboardName={activeLeaderboard?.name}
        hasConsent={activeLeaderboard?.consent}
        currentUserId={userId}
      >
        <LeaderboardContentContainer
          leaderboardName={activeLeaderboard?.name}
          query={data}
          currentUserId={userId}
          onRefetch={handleRefetch}
          isRefetching={networkStatus === NetworkStatus.refetch}
          isLoading={networkStatus === 1} // ts throws (?) if written as networkStatus === NetworkStatus.loading
          openModal={openModal}
        />
      </ConsentGuard>
    </LeaderboardLayout>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  activeLeaderboard: getActiveLeaderboard(state),
  userId: getCurrentUserId(state),
  consentCopy: getCopy(state, "leaderboards").turnBoardOn,
});

const mapDispatchToProps = { updateLeaderboardConsent };

const redux = connect<ReturnType<typeof mapStateToProps>, typeof mapDispatchToProps, null>(
  mapStateToProps,
  mapDispatchToProps
);
const ConnectedActiveLeaderboard = redux(_ActiveLeaderboard);

export default ConnectedActiveLeaderboard;
