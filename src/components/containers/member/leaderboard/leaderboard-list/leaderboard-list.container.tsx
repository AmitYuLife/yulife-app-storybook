import React, { useCallback } from "react";
import { connect, useDispatch } from "react-redux";
import { Navigation } from "react-native-navigation";
import LeaderboardListScreen from "./leaderboard-list.screen";
import { IReduxState } from "@redux/_core/reducers";
import { getActiveLeaderboardId } from "@redux/user/user.selectors";
import { updateActiveLeaderboardId } from "@redux/user/user.actions";
import { ROUTES } from "@navigation/constants";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_CURRENT_USER_LEADERBOARD } from "@graphql/user";
import { GetCurrentUser } from "@graphql/_core/schema";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface OwnProps {
  componentId: string;
}

type Props = ConnectedState & OwnProps;

function LeaderboardListContainer(props: Props) {
  const { componentId, activeLeaderboardId } = props;
  const dispatch = useDispatch();

  const handleChangeActiveLeaderboardId = useCallback(
    (leaderboardId: string) => {
      dispatch(updateActiveLeaderboardId(leaderboardId));
      Navigation.pop(componentId);
    },
    [dispatch, componentId]
  );

  const goBack = useCallback(() => {
    Navigation.popToRoot(componentId);
  }, [componentId]);

  const goToSettings = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        id: ROUTES.settings,
        name: ROUTES.settings,
      },
    });
  }, [componentId]);

  const { data, loading } = useQuery<GetCurrentUser>(GQL_QUERY_GET_CURRENT_USER_LEADERBOARD, {
    fetchPolicy: "cache-only",
  });

  return (
    <LeaderboardListScreen
      leaderboards={data?.getCurrentUser?.leaderboards}
      activeLeaderboardId={activeLeaderboardId}
      loading={loading}
      onChangeActiveLeaderboard={handleChangeActiveLeaderboardId}
      onLeftIconPress={goBack}
      onRightIconPress={goToSettings}
    />
  );
}

const mapStateToProps = (state: IReduxState) => ({
  activeLeaderboardId: getActiveLeaderboardId(state),
});

const redux = connect<ConnectedState, null, OwnProps>(mapStateToProps);

export default redux(LeaderboardListContainer);
