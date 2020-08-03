import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { LeaderboardNavBar } from "./subcomponents/leaderboard-navbar/leaderboard-navbar";
import { LeaderboardTopBar } from "./subcomponents/leaderboard-topbar/leaderboard-topbar";
import { LeaderboardSkeleton } from "./subcomponents/leaderboard-skeleton/leaderboard-skeleton";
import { Style } from "@styles";

interface Props {
  children: React.ReactNode;
}

export const LeaderboardLayout = ({ children }: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.topPad} />
      {children}
      <View style={styles.bottomPad} />
      <LeaderboardSkeleton />
      <LeaderboardTopBar />
      <LeaderboardNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  bottomPad: {
    height: Style.adjust(80),
  } as ViewStyle,
  topPad: {
    height: LeaderboardTopBar.HEIGHT,
  } as ViewStyle,
});
