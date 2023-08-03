import React, { memo, useCallback, useMemo } from "react";
import { MODALS, ROUTES } from "@navigation/constants";
import { LeaderboardScreen } from "@components/screens";
import { GQL_QUERY_LEADERBOARD, LeaderboardMetric } from "@graphql/member";
import { useQueryOnScreenSeen } from "@hooks";
import { GetLeaderboard, GetLeaderboardVariables } from "@graphql/_core/schema";
import { useDispatch, useSelector } from "react-redux";
import {
  getAcceptedLeaderboards,
  getActiveLeaderboard,
  getCurrentUserId,
  getUserFeatures,
} from "@redux/user/user.selectors";
import { Navigation } from "@navigation/main";
import { getMetricName, t } from "@locale";
import { StepsIcon } from "@atoms/icon/steps-icon";
import { YudokuIcon } from "@atoms/icon/yudoku-icon";
import { LeaderboardCommunityOverlay, showFloatingModal } from "@modals";
import { Style } from "@styles";
import { updateActiveLeaderboardId } from "@redux/user/user.actions";
import { NetworkStatus } from "@apollo/client";

export const PAGE_SIZE = 501; // number of rows to show +1

interface IProps {
  componentId: string;
}

export const LeaderboardContainer = ({ componentId }: IProps) => {
  const dispatch = useDispatch();
  const currentUserId = useSelector(getCurrentUserId);
  const activeLeaderboard = useSelector(getActiveLeaderboard);
  const communities = useSelector(getAcceptedLeaderboards);
  const showDuels = !!useSelector(getUserFeatures)?.showDuels;
  const metricName = getMetricName((activeLeaderboard?.metric as LeaderboardMetric) || "steps", "plural");

  const onLeftNavigationPress = useCallback(async () => {
    let leaderboardId = "";
    const children = (
      <LeaderboardCommunityOverlay
        onSelect={(id: string) => (leaderboardId = id)}
        communities={communities}
        activeLeaderboardId={activeLeaderboard.leaderboardId}
      />
    );
    await showFloatingModal({
      children,
      modalId: MODALS.leaderboardCommunityOverlay,
      title: t("communities"),
      buttonLabel: t("overlays.leaderboard_community.button_label"),
      paddingTop: Style.adjust(80),
      buttonOnPress: () => dispatch(updateActiveLeaderboardId(leaderboardId)),
    });
  }, [activeLeaderboard, dispatch, communities]);

  const [, { data, loading, networkStatus, refetch }] = useQueryOnScreenSeen<GetLeaderboard, GetLeaderboardVariables>(
    GQL_QUERY_LEADERBOARD,
    ROUTES.debugPlayground,
    {
      variables: {
        leaderboardId: activeLeaderboard?.leaderboardId,
        sortBy: activeLeaderboard?.metric || "steps",
        limit: PAGE_SIZE,
      },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: "network-only",
    }
  );

  const onListItemPress = useCallback(
    (userId: string, leaderboardPlacement: number) => {
      Navigation.push(ROUTES.debugPlayground, {
        component: {
          id: ROUTES.inspect,
          name: ROUTES.inspect,
          passProps: {
            userId,
            leaderboardPlacement,
          },
        },
      });
      return Navigation.dismissAllModals();
    },
    [componentId]
  );

  const currentUserInfo = useMemo(
    () => data?.getLeaderboard.find((item) => item.userId === currentUserId),
    [currentUserId, data?.getLeaderboard?.length]
  );

  return (
    <LeaderboardScreen
      currentUserInfo={currentUserInfo}
      activeLeaderboard={activeLeaderboard}
      showDuels={showDuels}
      metricName={metricName}
      onRefresh={refetch}
      isLoading={(loading && data?.getLeaderboard.length === 0) || networkStatus === NetworkStatus.loading}
      tabList={TABS}
      onQuestionMarkPress={onQuestionMarkPress}
      onLeftNavigationPress={onLeftNavigationPress}
      onRightNavigationPress={onRightNavigationPress}
      onListItemPress={onListItemPress}
      onLeftIconPress={() => Navigation.popToRoot(ROUTES.debug)}
      items={data?.getLeaderboard || []}
    />
  );
};

const onQuestionMarkPress = () => {
  Navigation.push(ROUTES.leaderboardsLegacy, {
    component: {
      id: ROUTES.leaderboardInfoLegacy,
      name: ROUTES.leaderboardInfoLegacy,
    },
  });
};

const onRightNavigationPress = () =>
  Navigation.push(ROUTES.leaderboardsLegacy, {
    component: {
      id: ROUTES.duelsHub,
      name: ROUTES.duelsHub,
    },
  });

// this will come from the backend
const TABS = [
  { name: "Steps", Icon: StepsIcon, onPress: () => console.log("hehe") },
  { name: "Yudoku", Icon: YudokuIcon, onPress: () => console.log("hehe") },
];

export default memo(LeaderboardContainer);
