import React, { useCallback } from "react";
import { Text } from "@atoms";
import { StyleSheet, TextStyle, ViewStyle, View } from "react-native";
import { LEADERBOARD_INFO } from "@ids";
import { Style } from "@styles";
import { Navigation } from "@navigation/main";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { useBackHandler } from "@hooks";
import { getMetricName, t } from "@locale";
import { LeaderboardMetric } from "@graphql/member";
import { useSelector } from "react-redux";
import { getActiveLeaderboard } from "@redux/user/user.selectors";

interface IProps {
  componentId: string;
  onLeftIconPress?: () => void;
}

function LeaderboardInfoScreen({ componentId }: IProps) {
  const activeLeaderboard = useSelector(getActiveLeaderboard);
  const goBack = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  useBackHandler(() => {
    goBack();
    return true;
  });

  const metricName = getMetricName(activeLeaderboard?.metric as LeaderboardMetric) || "steps";

  return (
    <View style={styles.wrapper} testID={LEADERBOARD_INFO}>
      <GenericHeadingPad />
      <Text style={styles.text}>
        {t("screens.leaderboard.podium.info_copy", { days: activeLeaderboard?.days || 30, metric: metricName })}
      </Text>
      <GenericHeadingAbsolute heading={t("screens.leaderboard.podium.info_heading")} onLeftIconPress={goBack} />
    </View>
  );
}

export default LeaderboardInfoScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  } as ViewStyle,
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    lineHeight: Style.SCALE_UP_AND_DOWN(24),
    color: "#5A5A5C",
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    marginTop: Style.SCALE_UP_AND_DOWN(31),
    marginLeft: Style.SCALE_UP_AND_DOWN(24),
    marginRight: Style.SCALE_UP_AND_DOWN(24),
  } as TextStyle,
});
