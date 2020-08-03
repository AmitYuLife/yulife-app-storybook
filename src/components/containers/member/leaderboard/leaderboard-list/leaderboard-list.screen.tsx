import React from "react";
import { SafeAreaView, StyleSheet, ViewStyle, View, ActivityIndicator } from "react-native";
import { GenericHeading } from "@atoms";
import { GetCurrentUser_getCurrentUser_leaderboards } from "@graphql/_core/schema";
import { LeaderboardListItems } from "./subcomponents/leaderboard-list-item";

interface IProps {
  leaderboards: GetCurrentUser_getCurrentUser_leaderboards[];
  loading: boolean;
  activeLeaderboardId: string;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  onChangeActiveLeaderboard: (id: string) => void;
}

function LeaderboardOptionsScreen(props: IProps) {
  const {
    onLeftIconPress,
    onRightIconPress,
    leaderboards,
    onChangeActiveLeaderboard,
    loading,
    activeLeaderboardId,
  } = props;

  return (
    <SafeAreaView style={styles.wrapper}>
      <GenericHeading heading="Leaderboards" onLeftIconPress={onLeftIconPress} onRightIconPress={onRightIconPress} />
      <LeaderboardListItems
        leaderboards={leaderboards}
        onPress={onChangeActiveLeaderboard}
        activeLeaderboardId={activeLeaderboardId}
      />
      <LoadingPlaceholder loading={loading} />
    </SafeAreaView>
  );
}

export default LeaderboardOptionsScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  } as ViewStyle,
});

function LoadingPlaceholder({ loading }: { loading: boolean }) {
  if (!loading) {
    return null;
  }

  return (
    <View style={loadingStyles.wrapper}>
      <ActivityIndicator />
    </View>
  );
}

const loadingStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
});
