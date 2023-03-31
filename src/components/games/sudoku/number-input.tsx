import { TextTemplate } from "@atoms";
import { BoxOption } from "@components/molecules";
import { useSudokuContext } from "@components/screens/games/sudoku/sudoku-game/sudoku.context";
import { Colours, Style } from "@styles";
import { memo, useCallback, useMemo } from "react";
import { StyleSheet, ViewStyle } from "react-native";

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
      innerHeight={Style.adjust(60)}
      onPress={onInput}
      innerWrapperStyle={innerStyle}
    >
      <TextTemplate color={isComplete ? Colours.products.fib.common : undefined} type="h2">
        {value}
      </TextTemplate>
    </BoxOption>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(65),
    height: Style.adjust(65),
  },
  innerWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  innerWrapperComplete: {
    borderColor: Colours.products.fib.common,
    backgroundColor: Colours.products.fib.commonLight,
    borderWidth: 2,
  },
});

export default memo(NumberInput);
