import { View } from "react-native";
import NumberInput, { SUDOKU_NUMBER_PADDING, SUDOKU_PASSED_NUMBER_CUTOFF } from "./number-input";
import { useSudokuContext } from "@components/screens/games/sudoku/sudoku-game/sudoku.context";
import UndoIcon from "@atoms/icon/undo-svg";
import { Style, StyleSheet } from "@styles";
import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "@hooks";
import { TextTemplate } from "@atoms";
import { BoxOption } from "@components/molecules";
import { SUDOKU_UNDO_BUTTON } from "@ids";

const NumbersInput = () => {
  const { putNumber, undo, selectedCell, isNumberComplete } = useSudokuContext();
  const t = useTranslation(["sudoku.game.undo"]);

  const onNumberPress = useCallback(
    (value: number) => {
      putNumber({ number: value, row: selectedCell?.row, column: selectedCell?.column, antiCheat: true });
    },
    [selectedCell, putNumber]
  );

  const completedNumbers = useMemo(() => {
    return Array.from({ length: 9 }).map((_, index) => isNumberComplete(index + 1));
  }, [isNumberComplete]);

  return (
    <View style={styles.grid}>
      <View style={styles.row}>
        {Array.from({ length: 5 }).map((_, index) => {
          const value = index + 1;
          return (
            <NumberInput value={value} key={index} onPress={onNumberPress} isComplete={completedNumbers[value - 1]} />
          );
        })}
      </View>
      <View style={styles.row}>
        {Array.from({ length: 4 }).map((_, index) => {
          const value = index + 1 + 5;
          return (
            <NumberInput value={value} key={index} onPress={onNumberPress} isComplete={completedNumbers[value - 1]} />
          );
        })}
        <View style={styles.undoContainer}>
          <BoxOption
            isSelected={false}
            selectedStyle={null}
            debounce={false}
            wrapperStyle={styles.undoButtonWrapper}
            innerHeight={500}
            onPress={undo}
            innerWrapperStyle={styles.undoButtonInner}
          >
            <>
              <UndoIcon size={Style.adjust(!SUDOKU_PASSED_NUMBER_CUTOFF ? 20 : 24)} testID={SUDOKU_UNDO_BUTTON} />
              {SUDOKU_PASSED_NUMBER_CUTOFF ? (
                <View style={styles.undoText}>
                  <TextTemplate type="l2b">{t["sudoku.game.undo"]}</TextTemplate>
                </View>
              ) : null}
            </>
          </BoxOption>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  undoContainer: {
    padding: Style.adjust(SUDOKU_NUMBER_PADDING),
    aspectRatio: 1,
    flex: 1,
  },
  undoButtonWrapper: {
    flex: 1,
    paddingBottom: Style.adjust(5),
  },
  undoButtonInner: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  undoText: {
    marginTop: Style.adjust(4),
  },
  grid: {
    width: Style.DEVICE_WIDTH,
    padding: Style.adjust(15),
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default memo(NumbersInput);
