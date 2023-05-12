import { StyleSheet, View } from "react-native";
import { Colours, Style } from "@styles";
import { useSelector } from "react-redux";
import { getSudokuState } from "@redux/sudoku/sudoku.selectors";
import SudokuTimer from "@components/games/sudoku/sudoku-timer";
import { useSudokuContext } from "@components/screens/games/sudoku/sudoku-game/sudoku.context";
import SudokuHint from "@components/games/sudoku/sudoku-hint";
import { useTranslation } from "@hooks";
import { memo, useMemo } from "react";
import { TextTemplate } from "@atoms";

interface IProps {
  invert?: boolean;
}

const SudokuHeader = ({ invert }: IProps) => {
  const { mistakes, config } = useSudokuContext();
  const state = useSelector(getSudokuState);
  const t = useTranslation(["sudoku.pause.mistakes"]);
  const color = useMemo(() => (invert ? Colours.neutral.white : undefined), [invert]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.sectionWrapper}>
        <SudokuTimer invert={invert} />
      </View>
      <View style={styles.timeWrapper}>
        <TextTemplate type={"l1"} color={color}>
          {state.gameIdentifier}
        </TextTemplate>
        <TextTemplate type="b2b" color={color}>
          {t["sudoku.pause.mistakes"]}: {mistakes}/{config.MISTAKES_BEFORE_PENALTY}
        </TextTemplate>
      </View>
      <SudokuHint invert={invert} />
    </View>
  );
};

export default memo(SudokuHeader);

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Style.adjust(10),
    padding: Style.adjust(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionWrapper: {
    flex: 1,
    alignItems: "flex-start",
  },
});
