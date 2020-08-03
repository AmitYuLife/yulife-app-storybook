import React, { useCallback } from "react";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getCurrentUserId, getActiveLeaderboard } from "@redux/user/user.selectors";
import { GetLeaderboard } from "@graphql/_core/schema";
import { GQL_QUERY_LEADERBOARD } from "@graphql/member";
import { LeaderboardLayout } from "./leaderboard-layout/leaderboard-layout";
import { getCopy } from "@redux/copy/copy.selectors";
import { updateLeaderboardConsent } from "@redux/user/user.actions";
import { ConsentGuard } from "./consent-guard/consent-guard";
import { ActiveLeaderboardLoadingContext } from "./active-leaderboard.context";
import { useQuery } from "@apollo/react-hooks";

type ConnectedState = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

type Props = ConnectedState;

const _ActiveLeaderboard = (props: Props) => {
  const { activeLeaderboard, userId, consentCopy, updateLeaderboardConsent } = props;
  const { data, refetch, networkStatus } = useQuery<GetLeaderboard>(GQL_QUERY_LEADERBOARD, {
    variables: {
      leaderboardId: activeLeaderboard?.leaderboardId,
      sortBy: "steps",
    },
    notifyOnNetworkStatusChange: true,
  });

  const handleRefetch = useCallback(async () => {
    refetch().catch(() => null);
  }, [refetch]);

  const setConsent = useCallback(() => {
    updateLeaderboardConsent({ leaderboardId: activeLeaderboard.leaderboardId, consent: true });
  }, [activeLeaderboard, updateLeaderboardConsent]);

  return (
    <ActiveLeaderboardLoadingContext.Provider value={networkStatus}>
      <LeaderboardLayout>
        <ConsentGuard
          consentCopy={consentCopy}
          setConsent={setConsent}
          leaderboardName={activeLeaderboard?.name}
          hasConsent={activeLeaderboard?.consent}
          leaderboardItems={data?.getLeaderboard || []}
          currentUserId={userId}
          onRefetch={handleRefetch}
        />
      </LeaderboardLayout>
    </ActiveLeaderboardLoadingContext.Provider>
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
