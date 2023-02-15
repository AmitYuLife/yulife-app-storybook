import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, Platform, TextStyle, ImageStyle } from "react-native";
import { Text } from "@atoms";
import { LEADERBOARD_INFO_BUTTON, LEADERBOARD_TITLE, LEADERBOARD_TOP_SCREEN } from "@ids";
import { truncate } from "@utils";
import { Colours, Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import Svg, { Path } from "react-native-svg";
import { InfoButton } from "./info-button";
import { DuelsButton } from "./duels-button";
import { getActiveLeaderboard, getUserFeatures } from "@redux/user/user.selectors";
import { getMetricName, t } from "@locale";
import { LeaderboardMetric } from "@graphql/member";
import { useSelector } from "react-redux";

export interface LeaderboardPressableTitleProps {
  onPressLabel: () => void;
  onPressInfo: () => void;
}

export function _LeaderboardPressableTitle(props: LeaderboardPressableTitleProps) {
  const { onPressLabel, onPressInfo } = props;
  const showDuels = !!useSelector(getUserFeatures)?.showDuels;
  const activeLeaderboard = useSelector(getActiveLeaderboard);

  const metricName = getMetricName((activeLeaderboard?.metric as LeaderboardMetric) || "steps", "plural");

  return (
    <View pointerEvents="box-none" style={styles.wrapper}>
      <View style={styles.row}>
        <Title
          name={activeLeaderboard?.name || ""}
          type={t("screens.leaderboard.podium.steps", { days: activeLeaderboard?.days || 30, metric: metricName })}
          onPressLabel={onPressLabel}
          onPressInfo={onPressInfo}
        />
      </View>
      {!showDuels ? null : <DuelsButton />}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  row: {
    flexDirection: "row",
  } as ViewStyle,
});

type TitleProps = {
  name: string;
  type: string;
  onPressLabel: () => void;
  onPressInfo: () => void;
};

function Title({ name, type, onPressLabel, onPressInfo }: TitleProps) {
  return (
    <View style={titleStyles.wrapper} testID={LEADERBOARD_TOP_SCREEN}>
      <TouchableOpacityWithDelay onPress={onPressLabel}>
        <View style={titleStyles.leaderboardName}>
          <Text style={titleStyles.title} testID={LEADERBOARD_TITLE(name)}>
            {truncate(name, 16)}
            <View style={titleStyles.arrow}>
              <Arrow />
            </View>
          </Text>
        </View>
      </TouchableOpacityWithDelay>
      <TouchableOpacityWithDelay onPress={onPressInfo} testID={LEADERBOARD_INFO_BUTTON}>
        <View style={titleStyles.flexRow}>
          <Text style={titleStyles.caption}>{type}</Text>
          <InfoButton onPressInfo={onPressInfo} />
        </View>
      </TouchableOpacityWithDelay>
    </View>
  );
}

const titleStyles = StyleSheet.create({
  wrapper: {
    alignSelf: "center",
    alignItems: "center",
  } as ViewStyle,
  leaderboardName: {
    paddingHorizontal: Style.adjust(16),
  } as ViewStyle,
  title: {
    color: Colours.blue.b200,
    fontSize: Style.adjust(18),
    textAlign: "center",
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    marginBottom: Style.adjust(8),
    marginTop: Platform.select({ ios: 2, android: -4 }),
  } as TextStyle,
  caption: {
    color: "#000000",
    fontSize: Style.adjust(18),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  inlineButton: {
    position: "relative",
    marginHorizontal: 100,
  } as TextStyle,
  arrow: {
    paddingLeft: Style.adjust(8),
  } as ViewStyle,
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
});

function Arrow() {
  return (
    <Svg width="12" height="8" fill="transparent" viewBox="0 0 12 8" style={arrowStyles.wrapper}>
      <Path
        d="M0.666687 1.33334L6.00002 6.66667L11.3334 1.33334"
        stroke="#6AA3DC"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </Svg>
  );
}

const arrowStyles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(4),
    height: Style.adjust(32),
    width: Style.adjust(32),
  } as ViewStyle,
  image: {
    width: Style.adjust(13),
    height: Style.adjust(7),
  } as ImageStyle,
});

export const LeaderboardPressableTitle = memo(_LeaderboardPressableTitle);
