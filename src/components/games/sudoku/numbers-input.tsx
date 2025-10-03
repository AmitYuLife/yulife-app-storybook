import NumberInput, { SUDOKU_NUMBER_PADDING, SUDOKU_PASSED_NUMBER_CUTOFF } from "./number-input";
import { useSudokuContext } from "@components/screens/games/sudoku/sudoku-game/sudoku.context";
import UndoIcon from "@atoms/icon/undo-svg";
import { Style, StyleSheet } from "@styles";
import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "@hooks";
import { Box, TextTemplate } from "@atoms";
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
    <Box
      width={Style.DEVICE_WIDTH}
      p={Style.adjust(15)}
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      disableAutoAdjust={true}
    >
      <Box width="100%" flexDirection="row" justifyContent="space-between" dir="ltr">
        {Array.from({ length: 5 }).map((_, index) => {
          const value = index + 1;
          return (
            <NumberInput value={value} key={index} onPress={onNumberPress} isComplete={completedNumbers[value - 1]} />
          );
        })}
      </Box>
      <Box flexDirection="row" justifyContent="space-between" dir="ltr">
        {Array.from({ length: 4 }).map((_, index) => {
          const value = index + 1 + 5;
          return (
            <NumberInput value={value} key={index} onPress={onNumberPress} isComplete={completedNumbers[value - 1]} />
          );
        })}
        <Box p={SUDOKU_NUMBER_PADDING} aspectRatio={1} flex={1}>
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
                <Box mt={4}>
                  <TextTemplate type="l2b">{t["sudoku.game.undo"]}</TextTemplate>
                </Box>
              ) : null}
            </>
          </BoxOption>
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  undoButtonWrapper: {
    flex: 1,
    paddingBottom: Style.adjust(5),
  },
  undoButtonInner: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default memo(NumbersInput);
