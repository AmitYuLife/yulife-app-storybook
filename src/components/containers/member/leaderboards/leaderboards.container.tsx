import { useQuery } from "@apollo/react-hooks";
import { ILeaderboard } from "@app/redux/user/user.reducer";
import { GQL_QUERY_LEADERBOARD } from "@graphql/member";
import { handleLinkPress } from "@services/app-link";
import Logger from "@services/logging/logger";
import { Style } from "@styles/index";
import React, { FC, useCallback, useMemo, useState } from "react";
import Config from "react-native-config";
import { connect } from "react-redux";
import { IMainTabsProps, labels } from "../../../../navigation/root";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getAppState, getOfflineState } from "../../../../redux/app/app.selectors";
import { getTotalCoins } from "../../../../redux/coins/coins.selectors";
import { getCopy } from "../../../../redux/copy/copy.selectors";
import { getCurrentLevel, getHasNotification } from "../../../../redux/levels/levels.selectors";
import { updateLeaderboardConsent } from "../../../../redux/user/user.actions";
import { getAllLeaderboards, getConsentedLeaderboards } from "../../../../redux/user/user.selectors";
import { LeaderboardOfflineScreen, LeaderboardsScreen } from "../../../screens";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;
interface IProps {
  componentId: string;
}

type Props = ConnectedState & ConnectedDispatch & IProps & IMainTabsProps;

const getInitialLeaderboard = (leaderboards?: ILeaderboard[]) => {
  if (!leaderboards || !leaderboards.length) {
    return {
      leaderboardId: "",
      activeLeaderboardIndex: 0,
    };
  }
  const leaderboardWithConsentIndex = leaderboards.findIndex(({ consent }) => consent);
  const activeLeaderboardIndex = leaderboardWithConsentIndex !== -1 ? leaderboardWithConsentIndex : 0;
  const leaderboard = leaderboards[activeLeaderboardIndex];

  return {
    leaderboardId: leaderboard.leaderboardId,
    activeLeaderboardIndex,
  };
};

const handlePrivacyPolicyPress = handleLinkPress(Config.PRIVACY_POLICY_URL);

const LeaderboardsContainer: FC<Props> = ({
  leaderboards = [],
  hasNotification,
  totalCoins,
  copy,
  componentId,
  appState,
  updateLeaderboardConsent: dispatchUpdateConsent,
  onLeftMenuPress,
}) => {
  const isIPad = useMemo(() => Style.isIPad(), []);

  const [sortBy, setSortBy] = useState("steps");
  const [{ activeLeaderboardIndex, leaderboardId }, setLeaderboardInfo] = useState(getInitialLeaderboard(leaderboards));

  const { loading, data, refetch } = useQuery(GQL_QUERY_LEADERBOARD, {
    variables: { leaderboardId, sortBy },
    fetchPolicy: "cache-and-network",
  });

  const handleRefetch = useCallback(
    (sort: string) => () => {
      setSortBy(sort);
      refetch({ sortBy: sort, leaderboardId });
    },
    [leaderboardId, refetch]
  );

  const refuseConsent = useCallback(() => {
    const nextIndex = activeLeaderboardIndex + 1 === leaderboards.length ? 0 : activeLeaderboardIndex + 1;

    setLeaderboardInfo({
      leaderboardId: leaderboards[nextIndex].leaderboardId,
      activeLeaderboardIndex: nextIndex,
    });
  }, [activeLeaderboardIndex, leaderboards]);

  const allowLeaderboard = useCallback(() => {
    const company = leaderboards[activeLeaderboardIndex];
    dispatchUpdateConsent({ leaderboardId: company.leaderboardId, consent: true });
  }, [activeLeaderboardIndex, leaderboards, dispatchUpdateConsent]);

  const handleLeaderboardChange = useCallback(
    (index: number) => {
      const newId = leaderboards[index].leaderboardId;
      setLeaderboardInfo({ leaderboardId: newId, activeLeaderboardIndex: index });

      Logger.logEvent("screen_view", {
        name: newId.length === 32 ? "yulife.member.Leaderboards.Primary" : "yulife.member.Leaderboards.Secondary",
        leaderboard_id: newId,
      });
    },
    [leaderboards]
  );

  const coinsRefetch = useMemo(() => handleRefetch("coins"), [handleRefetch]);
  const stepsRefetch = useMemo(() => handleRefetch("steps"), [handleRefetch]);
  const mindfulMinsRefetch = useMemo(() => handleRefetch("mindful"), [handleRefetch]);

  const initialScrollIndex = useMemo(
    () =>
      data && data.getLeaderboard !== null && data.getCurrentUser && data.getCurrentUser.id
        ? (data.getLeaderboard as any).findIndex((item: any) => item.id === `lead_${data.getCurrentUser.id}`)
        : 0,
    [data]
  );

  if (isIPad) {
    return (
      <LeaderboardOfflineScreen
        hasNotification={hasNotification}
        totalCoins={totalCoins}
        labels={labels}
        onLeftMenuPress={onLeftMenuPress}
      />
    );
  }

  return (
    <LeaderboardsScreen
      componentId={componentId}
      isLoading={loading}
      initialScrollIndex={initialScrollIndex}
      leaderboards={leaderboards || []}
      items={data && data.getLeaderboard ? data.getLeaderboard : []}
      onHandleCoinsRefetch={coinsRefetch}
      onHandleStepsRefetch={stepsRefetch}
      onHandleMindfulMinsRefetch={mindfulMinsRefetch}
      activeLeaderboardIndex={activeLeaderboardIndex}
      onLeaderboardChange={handleLeaderboardChange}
      sortBy={sortBy}
      onRefetch={refetch}
      hasNotification={hasNotification}
      labels={labels}
      totalCoins={totalCoins}
      onLeftMenuPress={onLeftMenuPress}
      onAllowLeaderboard={allowLeaderboard}
      onRefuseConsent={refuseConsent}
      onPrivacyPolicyPress={handlePrivacyPolicyPress}
      copy={copy.turnBoardOn}
      isMindfulAvailable={false}
      appState={appState}
    />
  );
};

const mapStateToProps = (state: IReduxState) => ({
  copy: getCopy(state, "leaderboards"),
  totalCoins: getTotalCoins(state),
  leaderboards: getAllLeaderboards(state),
  consentedLeaderboards: getConsentedLeaderboards(state),
  hasNotification: getHasNotification(state),
  currentLevel: getCurrentLevel(state),
  isOffline: getOfflineState(state),
  appState: getAppState(state),
});

const mapDispatchToProps = {
  updateLeaderboardConsent,
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(LeaderboardsContainer);
