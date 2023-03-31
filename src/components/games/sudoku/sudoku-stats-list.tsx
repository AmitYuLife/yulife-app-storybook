import { StyleSheet, View } from "react-native";
import SudokuPersonalBestIcon from "@atoms/icon/sudoku-personal-best-svg";
import SudokuTodaysTimeSvg from "@atoms/icon/sudoku-todays-time-svg";
import SudokuMistakesIcon from "@atoms/icon/sudoku-mistakes-icon";
import SudokuRewardIcon from "@atoms/icon/sudoku-reward-icon";
import { useMemo } from "react";
import { ISudokuStore } from "@redux/sudoku/sudoku.reducer";
import { GetSudokuBoard_getSudokuBoard_results, GetSudokuBoard_getSudokuBoard_stats } from "@graphql/_core/schema";
import { TextTemplate, YuCoinBadge } from "@atoms";
import { Style } from "@styles";
import SudokuHintStatIcon from "@atoms/icon/sudoku-hint-stat-svg";
import { useTranslation } from "@hooks";
import { getDuration } from "./sudoku-utils";

interface IProps {
  stats?: GetSudokuBoard_getSudokuBoard_stats;
  results?: GetSudokuBoard_getSudokuBoard_results;
  onCompleteScreen?: boolean;
  savedData?: ISudokuStore;
  reward: string | number;
}

const SudokuStatsList = ({ stats, onCompleteScreen, savedData, results, reward }: IProps) => {
  const t = useTranslation([
    "sudoku.stats.personalBest",
    "sudoku.stats.todaysTime",
    "sudoku.stats.hints",
    "sudoku.stats.mistakes",
    "sudoku.stats.reward",
    "sudoku.stats.paused",
    "sudoku.stats.notApplicable",
  ]);

  const statItems = useMemo(() => {
    const pauseText = savedData?.startTime ? t["sudoku.stats.paused"] : t["sudoku.stats.notApplicable"];
    const personalBest = results?.adjustedTime < stats?.personalBest ? results.adjustedTime : stats?.personalBest;

    return [
      {
        label: t["sudoku.stats.personalBest"],
        value: personalBest ? getDuration(personalBest) : t["sudoku.stats.notApplicable"],
        Icon: SudokuPersonalBestIcon,
      },
      {
        label: t["sudoku.stats.todaysTime"],
        value: results?.adjustedTime ? getDuration(results.adjustedTime) : pauseText,
        Icon: SudokuTodaysTimeSvg,
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
        Icon: SudokuRewardIcon,
        iconRight: (
          <YuCoinBadge
            hasWhiteGlow={false}
            width={Style.adjust(24)}
            height={Style.adjust(24)}
            currentWorld={1}
            currentYuniverse={0}
          />
        ),
      },
    ].filter(({ value, showIfStarted, showIfCompleted }) => {
      const hasValue = !!value;
      const showIfStartedCondition = showIfStarted && !!savedData?.startTime;
      const showIfNotCompleted = showIfCompleted === false && !onCompleteScreen;

      return (hasValue || showIfStartedCondition || results) && (!showIfNotCompleted || results);
    });
  }, [stats, savedData, results, onCompleteScreen, t, reward]);

  return (
    <>
      {statItems.map(({ label, value, Icon, iconRight }) => {
        return (
          <View key={label} style={styles.statsItem}>
            <View style={styles.statLabel}>
              <View style={styles.iconWrapper}>
                <Icon />
              </View>
              <TextTemplate type="b2">{label}</TextTemplate>
            </View>
            <View style={styles.valueWrapper}>
              <TextTemplate type="b2b">{value ?? 0}</TextTemplate>
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
    marginLeft: Style.adjust(2),
    marginRight: Style.adjust(-2),
    marginTop: -1,
  },
  statsItem: {
    flexDirection: "row",
    padding: Style.adjust(5),
    paddingVertical: Style.adjust(8),
    justifyContent: "space-between",
  },
  iconWrapper: {
    marginRight: Style.adjust(10),
  },
});
export default SudokuStatsList;
