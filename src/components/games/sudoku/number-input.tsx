import { TextTemplate } from "@atoms";
import { BoxOption } from "@components/molecules";
import { useSudokuContext } from "@components/screens/games/sudoku/sudoku-game/sudoku.context";
import { Colours, Style } from "@styles";
import { memo, useCallback, useMemo } from "react";
import { PixelRatio, StyleSheet, ViewStyle } from "react-native";

interface IProps {
  value: number;
  onPress?: (value: number) => void;
}

export const NumberInput = ({ value, onPress }: IProps) => {
  const { isNumberComplete } = useSudokuContext();
  const isComplete = isNumberComplete(value);

  const onInput = useCallback(() => {
    onPress(value);
  }, [onPress, value]);

  const innerStyle: ViewStyle[] = useMemo(
    () => [styles.innerWrapper, ...(isComplete ? [styles.innerWrapperComplete] : [])],
    [isComplete]
  );

  return (
    <BoxOption
      isSelected={false}
      selectedStyle={null}
      debounce={false}
      wrapperStyle={styles.wrapper}
      disabled={isComplete}
      showShadow={!isComplete}
      innerHeight={NUMBER_INNER_HEIGHT}
      onPress={onInput}
      innerWrapperStyle={innerStyle}
    >
      <TextTemplate color={isComplete ? Colours.products.fib.common : undefined} type="h2">
        {value}
      </TextTemplate>
    </BoxOption>
  );
};

const SUDOKU_NUMBER_SCALE_CUTOFF = 380;
export const SUDOKU_PASSED_NUMBER_CUTOFF = Style.DEVICE_WIDTH > SUDOKU_NUMBER_SCALE_CUTOFF;
export const SUDOKU_NUMBER_SIZE = Style.adjust(Style.DEVICE_WIDTH > SUDOKU_NUMBER_SCALE_CUTOFF ? 65 : 45);
const NUMBER_INNER_HEIGHT = Style.adjust(SUDOKU_NUMBER_SIZE - 2 * PixelRatio.get());

const styles = StyleSheet.create({
  wrapper: {
    width: SUDOKU_NUMBER_SIZE,
    height: SUDOKU_NUMBER_SIZE,
  },
  innerWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: SUDOKU_NUMBER_SIZE,
    height: SUDOKU_NUMBER_SIZE,
  },
  innerWrapperComplete: {
    borderColor: Colours.products.fib.common,
    backgroundColor: Colours.products.fib.commonLight,
    borderWidth: 2,
  },
});

export default memo(NumberInput);
