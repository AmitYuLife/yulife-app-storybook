import { View } from "react-native";
import { ISudokuStore } from "@redux/sudoku/sudoku.types";
import SudokuStatsList from "./sudoku-stats-list";
import { Colours, Style, StyleSheet } from "@styles";
import { ISudokuResults, ISudokuStats } from "./sudoku.interface";
import { memo } from "react";

interface IProps {
  stats?: ISudokuStats;
  results?: ISudokuResults;
  date: string;
  savedData?: ISudokuStore;
  reward: string | number;
  onCompleteScreen?: boolean;
}

const SudokuStats = ({ stats, savedData, onCompleteScreen, results, reward }: IProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.statsWrapper}>
        <SudokuStatsList
          stats={stats}
          savedData={savedData}
          results={results}
          reward={reward}
          onCompleteScreen={onCompleteScreen}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: Style.adjust(10),
    backgroundColor: Colours.neutral.white,
    width: "100%",
    overflow: "hidden",
    marginTop: Style.adjust(10),
    borderWidth: 1,
    borderColor: Colours.metallic.m200,
  },
  statsWrapper: {
    backgroundColor: "white",
    margin: Style.adjust(10),
    borderRadius: Style.adjust(10),
  },
});

export default memo(SudokuStats);
