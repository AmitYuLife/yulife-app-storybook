import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserId, getActiveLeaderboard } from "@redux/user/user.selectors";
import { GetLeaderboard, GetLeaderboardVariables } from "@graphql/_core/schema";
import { GQL_QUERY_LEADERBOARD } from "@graphql/member";
import { LeaderboardLayout } from "./leaderboard-layout/leaderboard-layout";
import { updateLeaderboardConsent } from "@redux/user/user.actions";
import ConsentGuard from "./consent-guard/consent-guard";
import { LeaderboardContentContainer } from "./leaderboard-content/leaderboard-content";
import { LeaderboardSkeleton } from "./leaderboard-layout/subcomponents/leaderboard-skeleton/leaderboard-skeleton";
import { MODALS, ROUTES } from "@navigation/constants";
import { IMainTabsProps, showYuModal } from "@navigation/root";
import { useQueryOnScreenSeen, useTapBackTwiceToExit } from "@hooks";
import { NetworkStatus } from "@apollo/client";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";

type OwnProps = IMainTabsProps;

type Props = OwnProps;

export const PAGE_SIZE = 501; // number of rows to show +1

const ActiveLeaderboardContainer = (props: Props) => {
  const dispatch = useDispatch();

  const activeLeaderboard = useSelector(getActiveLeaderboard);
  const userId = useSelector(getCurrentUserId);

  useTapBackTwiceToExit(props.componentId);

  const [, { data, loading, networkStatus, refetch }] = useQueryOnScreenSeen<GetLeaderboard, GetLeaderboardVariables>(
    GQL_QUERY_LEADERBOARD,
    ROUTES.leaderboard,
    {
      variables: {
        leaderboardId: activeLeaderboard?.leaderboardId,
        sortBy: activeLeaderboard?.metric || "steps",
        limit: PAGE_SIZE,
      },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: "network-only", // caching breaks because it shares the same query w/ leaderboard-lean
    }
  );

  const handleRefetch = useCallback(async () => {
    refetch();
  }, [refetch]);

  const setConsent = useCallback(() => {
    dispatch(
      logMixpanelEventActionCreator("leaderboard_toggle", {
        name: activeLeaderboard?.name,
        isActive: true,
      })
    );

    dispatch(updateLeaderboardConsent({ leaderboardId: activeLeaderboard?.leaderboardId, consent: true }));
  }, [activeLeaderboard, dispatch]);

  const openModal = useCallback(async () => {
    await showYuModal({
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
      <ConsentGuard setConsent={setConsent} hasConsent={activeLeaderboard?.consent} currentUserId={userId}>
        <LeaderboardContentContainer
          leaderboardItems={data?.getLeaderboard || []}
          currentUserId={userId}
          onRefetch={handleRefetch}
          isRefetching={networkStatus === NetworkStatus.refetch}
          isLoading={loading}
          openModal={openModal}
        />
      </ConsentGuard>
    </LeaderboardLayout>
  );
};

export default ActiveLeaderboardContainer;
