import React from "react";
import { StyleSheet, ViewStyle, View, ActivityIndicator } from "react-native";
import { GetCurrentUser_getCurrentUser_leaderboards } from "@graphql/_core/schema";
import { LeaderboardListItems } from "./subcomponents/leaderboard-list-item";
import GenericHeadingAbsolute from "@atoms/generic-heading/generic-heading-absolute";
import { TOP_BAR } from "@styles";

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
    <View style={styles.wrapper}>
      <View style={styles.pad} />
      <LeaderboardListItems
        leaderboards={leaderboards}
        onPress={onChangeActiveLeaderboard}
        activeLeaderboardId={activeLeaderboardId}
      />
      <LoadingPlaceholder loading={loading} />
      <GenericHeadingAbsolute
        heading="Leaderboards"
        onLeftIconPress={onLeftIconPress}
        onRightIconPress={onRightIconPress}
        rightIcon={{ icon: "SETTINGS" }}
        hasWhiteBackground={true}
      />
    </View>
  );
}

export default LeaderboardOptionsScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  } as ViewStyle,
  pad: {
    height: TOP_BAR.TOP_BAR_WITH_PAD,
    backgroundColor: "red",
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
