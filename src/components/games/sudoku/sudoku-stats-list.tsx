import { View } from "react-native";
import SudokuTodaysTimeSvg from "@atoms/icon/sudoku-todays-time-svg";
import SudokuMistakesIcon from "@atoms/icon/sudoku-mistakes-icon";
import SudokuRewardIcon from "@atoms/icon/sudoku-reward-icon";
import React, { useMemo } from "react";
import { ISudokuStore } from "@redux/sudoku/sudoku.types";
import { Image, TextTemplate } from "@atoms";
import { Style, StyleSheet } from "@styles";
import SudokuHintStatIcon from "@atoms/icon/sudoku-hint-stat-svg";
import { useTranslation } from "@hooks";
import { getDuration } from "./sudoku-utils";
import { SUDOKU_STAT, SUDOKU_UNRANKED_LABEL } from "@ids";
import colours from "@styles/colours";
import { ISudokuResults, ISudokuStats } from "./sudoku.interface";
import { MedalIcon } from "@atoms/icon/medal-icon";

interface IProps {
  stats?: ISudokuStats;
  results?: ISudokuResults & { leaderboardId?: string; leaderboardEligible?: boolean };
  onCompleteScreen?: boolean;
  savedData?: ISudokuStore;
  isPractice?: boolean;
  reward: string | number;
}

const SudokuStatsList = ({ stats, onCompleteScreen, savedData, results, reward, isPractice }: IProps) => {
  const t = useTranslation([
    "sudoku.stats.personalBest",
    "sudoku.stats.todaysTime",
    "sudoku.stats.hints",
    "sudoku.stats.mistakes",
    "sudoku.stats.reward",
    "sudoku.stats.paused",
    "sudoku.stats.notApplicable",
    "sudoku.stats.unranked",
  ]);

  const statItems = useMemo(() => {
    const pauseText = savedData?.startTime ? t["sudoku.stats.paused"] : t["sudoku.stats.notApplicable"];
    const personalBest =
      (!stats?.personalBest && results?.adjustedTime) ||
      (results?.adjustedTime < stats?.personalBest && results?.leaderboardEligible)
        ? results.adjustedTime
        : stats?.personalBest;
    const isUnranked = stats?.leaderboardId && results?.adjustedTime && !results.leaderboardId;

    return [
      {
        label: t["sudoku.stats.personalBest"],
        showIfPractice: false,
        value: personalBest ? getDuration(personalBest) : t["sudoku.stats.notApplicable"],
        Icon: MedalIcon,
      },
      {
        label: t["sudoku.stats.todaysTime"],
        value: results?.adjustedTime ? getDuration(results.adjustedTime) : pauseText,
        Icon: SudokuTodaysTimeSvg,
        valueColor: isUnranked ? colours.sudoku.gridColor : undefined,
        textRight: isUnranked ? (
          <View style={styles.unrankedBadge} testID={SUDOKU_UNRANKED_LABEL}>
            <TextTemplate type="l1b" color={colours.status.er300}>
              {t["sudoku.stats.unranked"]}
            </TextTemplate>
          </View>
        ) : null,
      },
      {
        label: t["sudoku.stats.hints"],
        value: results?.hints || savedData?.hintsUsed,
        Icon: SudokuHintStatIcon,
        showIfStarted: true,
      },
      {
        label: t["sudoku.stats.mistakes"],
        value: results?.mistakes || savedData?.mistakes,
        showIfStarted: true,
        Icon: SudokuMistakesIcon,
      },
      {
        label: t["sudoku.stats.reward"],
        value: reward,
        showIfCompleted: false,
        showIfPractice: false,
        Icon: SudokuRewardIcon,
        iconRight: (
          <Image
            width={Style.adjust(20)}
            height={Style.adjust(20)}
            suppressLoadingUi={true}
            source={require("@assets/icons/yucoin.png")}
            style={styles.yucoin}
          />
        ),
      },
    ].filter(({ value, showIfPractice, showIfStarted, showIfCompleted }) => {
      const hasValue = !!value;
      const showIfStartedCondition = showIfStarted && !!savedData?.startTime;
      if (isPractice && showIfPractice === false) {
        return false;
      }

      if (showIfCompleted === false && results && !onCompleteScreen) {
        return false;
      }

      return hasValue || showIfStartedCondition || results;
    });
  }, [stats, savedData, results, isPractice, onCompleteScreen, t, reward]);

  return (
    <>
      {statItems.map(({ label, value, Icon, valueColor, textRight, iconRight }) => {
        return (
          <View key={label} style={styles.statsItem} testID={SUDOKU_STAT(label, value)}>
            <View style={styles.statLabel}>
              <View style={styles.iconWrapper}>
                <Icon position={1} />
              </View>
              <TextTemplate type="b2">{label}</TextTemplate>
              {textRight ? textRight : null}
            </View>
            <View style={styles.valueWrapper}>
              <TextTemplate type="b2b" color={valueColor}>
                {value ?? 0}
              </TextTemplate>
              {iconRight ? <View style={styles.icon}>{iconRight}</View> : null}
            </View>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  statLabel: {
    flexDirection: "row",
    alignItems: "center",
  },

  statsWrapper: {
    margin: Style.adjust(10),
    backgroundColor: "white",
    padding: Style.adjust(15),
    marginTop: Style.adjust(-80),
    borderRadius: Style.adjust(10),
  },
  valueWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  icon: {
    marginStart: Style.adjust(2),
    marginEnd: Style.adjust(-2),
    marginTop: -1,
  },
  statsItem: {
    flexDirection: "row",
    padding: Style.adjust(5),
    paddingVertical: Style.adjust(8),
    justifyContent: "space-between",
  },
  iconWrapper: {
    marginEnd: Style.adjust(10),
  },
  unrankedBadge: {
    borderWidth: 1,
    borderRadius: Style.adjust(40),
    borderColor: "#FF5F5F",
    backgroundColor: colours.status.er100,
    padding: Style.adjust(3),
    paddingHorizontal: Style.adjust(7),
    marginStart: Style.adjust(6),
  },
  yucoin: {
    marginStart: Style.adjust(5),
  },
});
export default SudokuStatsList;
