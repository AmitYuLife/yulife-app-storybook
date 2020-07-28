import React, { FC, useCallback, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { ILeaderboard } from "@app/redux/user/user.reducer";
import { GQL_QUERY_LEADERBOARD } from "@graphql/member";
import { handleLinkPress } from "@services/app-link";
import Config from "react-native-config";
import { connect } from "react-redux";
import { IMainTabsProps, labels } from "../../../../navigation/root";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getAppState } from "../../../../redux/app/app.selectors";
import { getCopy } from "../../../../redux/copy/copy.selectors";
import { updateLeaderboardConsent } from "../../../../redux/user/user.actions";
import { getAllLeaderboards } from "../../../../redux/user/user.selectors";
import { LeaderboardsScreen } from "../../../screens";
import { viewLeaderboardScreen } from "@redux/logging/logging.actions";
import { GetLeaderboard } from "@graphql/_core/schema";

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
const sortBy = "steps";
const LeaderboardsContainer: FC<Props> = (props) => {
  const {
    leaderboards = [],
    copy,
    componentId,
    appState,
    updateLeaderboardConsent: dispatchUpdateConsent,
    viewLeaderboardScreen: dispatchViewLeaderboardScreen,
    onLeftMenuPress,
  } = props;
  const [{ activeLeaderboardIndex, leaderboardId }, setLeaderboardInfo] = useState(getInitialLeaderboard(leaderboards));

  const { loading, data, refetch } = useQuery<GetLeaderboard>(GQL_QUERY_LEADERBOARD, {
    variables: { leaderboardId, sortBy },
    fetchPolicy: "cache-and-network",
  });

  const handleRefuseConsent = useCallback(() => {
    const nextIndex = activeLeaderboardIndex + 1 === leaderboards.length ? 0 : activeLeaderboardIndex + 1;

    setLeaderboardInfo({
      leaderboardId: leaderboards[nextIndex].leaderboardId,
      activeLeaderboardIndex: nextIndex,
    });
  }, [activeLeaderboardIndex, leaderboards]);

  const handleAllowLeaderboard = useCallback(() => {
    const company = leaderboards[activeLeaderboardIndex];
    dispatchUpdateConsent({ leaderboardId: company.leaderboardId, consent: true });
  }, [activeLeaderboardIndex, leaderboards, dispatchUpdateConsent]);

  const handleLeaderboardChange = useCallback(
    (index: number) => {
      const newId = leaderboards[index].leaderboardId;
      setLeaderboardInfo({ leaderboardId: newId, activeLeaderboardIndex: index });
      dispatchViewLeaderboardScreen({ newId });
    },
    [leaderboards, dispatchViewLeaderboardScreen]
  );

  const handleStepsRefetch = useCallback(() => {
    if (!refetch) {
      return;
    }

    refetch({ sortBy, leaderboardId });
  }, [refetch, leaderboardId]);
  return (
    <LeaderboardsScreen
      componentId={componentId}
      activeLeaderboardIndex={activeLeaderboardIndex}
      sortBy={sortBy}
      appState={appState}
      labels={labels}
      isLoading={loading}
      leaderboards={leaderboards || []}
      items={data?.getLeaderboard || []}
      copy={copy.turnBoardOn}
      userId={`lead_${data?.getCurrentUser?.id}`}
      onLeftMenuPress={onLeftMenuPress}
      onLeaderboardChange={handleLeaderboardChange}
      onRefetch={handleStepsRefetch}
      onAllowLeaderboard={handleAllowLeaderboard}
      onRefuseConsent={handleRefuseConsent}
      onPrivacyPolicyPress={handlePrivacyPolicyPress}
    />
  );
};

const mapStateToProps = (state: IReduxState) => ({
  copy: getCopy(state, "leaderboards"),
  leaderboards: getAllLeaderboards(state),
  appState: getAppState(state),
});

const mapDispatchToProps = {
  updateLeaderboardConsent,
  viewLeaderboardScreen,
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(LeaderboardsContainer);
