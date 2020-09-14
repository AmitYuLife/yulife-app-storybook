import React, { useCallback, useEffect } from "react";
import { FlatList, View, StyleSheet, ViewStyle } from "react-native";
import { resToList, renderItem } from "./helpers";
import { GetLeaderboard, GetLeaderboardVariables } from "@graphql/_core/schema";
import { IReduxState } from "@redux/_core/reducers";
import { getActiveLeaderboard, getCurrentUserId } from "@redux/user/user.selectors";
import { connect, ConnectedProps } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_LEADERBOARD } from "@graphql/member";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { LeaderboardSkeleton } from "../active-leaderboard/leaderboard-layout/subcomponents/leaderboard-skeleton/leaderboard-skeleton";
import { PAGE_SIZE } from "../active-leaderboard/active-leaderboard.container";

export type LeaderboardLeanProps = ConnectedProps<typeof redux>;

const LeaderboardLean = (props: LeaderboardLeanProps) => {
  const { activeLeaderboard, userId } = props;

  const onBack = useCallback(async () => {
    await Navigation.dismissModal(MODALS.leaderboardLean);
  }, []);

  const { data, loading, refetch, networkStatus } = useQuery<GetLeaderboard, GetLeaderboardVariables>(
    GQL_QUERY_LEADERBOARD,
    {
      variables: {
        leaderboardId: activeLeaderboard?.leaderboardId,
        sortBy: "steps",
        targetId: userId,
      },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: "network-only", // caching breaks because it shares the same query w/ active-leaderboard
    }
  );

  useEffect(() => {
    const user = data?.getLeaderboard.find((item) => item.id === `lead_${userId}`);

    if (user?.position < PAGE_SIZE) {
      onBack();
    }

    return () => null;
  }, [data, onBack, userId]);

  const list = resToList({ leaderboardItems: data?.getLeaderboard || [], onBack });

  if (loading) {
    return <LeaderboardSkeleton />;
  }

  return (
    <View style={styles.flex}>
      <FlatList
        refreshing={networkStatus === 4}
        onRefresh={refetch}
        style={styles.flex}
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  } as ViewStyle,
});

const mapStateToProps = (state: IReduxState) => ({
  activeLeaderboard: getActiveLeaderboard(state),
  userId: getCurrentUserId(state),
});

const redux = connect<ReturnType<typeof mapStateToProps>>(mapStateToProps);

export default redux(LeaderboardLean);
