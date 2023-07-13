import React from "react";
import { LeaderboardPressableTitle, LeaderboardPressableTitleProps } from "./pressable-title";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";

type LeaderboardTitleProps = Omit<LeaderboardPressableTitleProps, "activeLeaderboard">;

export function LeaderboardTitle(props: LeaderboardTitleProps) {
  const { onPressInfo, onPressLabel } = props;
  return (
    <View style={styles.wrapper}>
      <LeaderboardPressableTitle onPressLabel={onPressLabel} onPressInfo={onPressInfo} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    paddingTop: 16,
    left: Style.SCALE_UP_AND_DOWN(20),
    right: 0,
  } as ViewStyle,
});
