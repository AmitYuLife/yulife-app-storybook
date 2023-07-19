import React from "react";
import { LeaderboardPressableTitleProps } from "./pressable-title";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";
import { LeaderBoardNavigation } from "@molecules";
import { useSelector } from "react-redux";
import { getActiveLeaderboard, getUserFeatures } from "@redux/user/user.selectors";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { getMetricName } from "@locale";
import { LeaderboardMetric } from "@graphql/member";

type LeaderboardTitleProps = Omit<LeaderboardPressableTitleProps, "activeLeaderboard">;

const navigateToDuelsHub = () =>
  Navigation.push(ROUTES.leaderboardsLegacy, {
    component: {
      id: ROUTES.duelsHub,
      name: ROUTES.duelsHub,
    },
  });

export function LeaderboardTitle(props: LeaderboardTitleProps) {
  const { onPressLabel } = props;
  const showDuels = !!useSelector(getUserFeatures)?.showDuels;
  const activeLeaderboard = useSelector(getActiveLeaderboard);
  const metricName = getMetricName((activeLeaderboard?.metric as LeaderboardMetric) || "steps", "plural");

  return (
    <View style={styles.wrapper}>
      <LeaderBoardNavigation
        showDuels={showDuels}
        activeLeaderboard={activeLeaderboard}
        onLeftPress={onPressLabel}
        onRightPress={navigateToDuelsHub}
        metricName={metricName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    paddingTop: 16,
    left: Style.SCALE_UP_AND_DOWN(20),
    right: Style.adjust(16),
  } as ViewStyle,
});
