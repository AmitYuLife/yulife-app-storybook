import { TextTemplate } from "@atoms";
import { BoxOption } from "@components/molecules";
import { SUDOKU_NUMBER_INPUT } from "@ids";
import { Colours, Style, StyleSheet } from "@styles";
import { memo, useCallback, useMemo } from "react";
import { View, ViewStyle } from "react-native";

interface IProps {
  value: number;
  onPress?: (value: number) => void;
  isComplete?: boolean;
}

export const NumberInput = ({ value, isComplete, onPress }: IProps) => {
  const onInput = useCallback(() => {
    onPress(value);
  }, [onPress, value]);

  const innerStyle: ViewStyle[] = useMemo(
    () => [styles.innerWrapper, ...(isComplete ? [styles.innerWrapperComplete] : [])],
    [isComplete]
  );

  return (
    <View style={styles.container}>
      <BoxOption
        isSelected={false}
        selectedStyle={null}
        debounce={false}
        wrapperStyle={styles.wrapper}
        disabled={isComplete}
        showShadow={!isComplete}
        onPress={onInput}
        innerWrapperStyle={innerStyle}
      >
        <TextTemplate
          color={isComplete ? Colours.products.fib.common : undefined}
          type="h2"
          testID={SUDOKU_NUMBER_INPUT(value, isComplete)}
        >
          {value}
        </TextTemplate>
      </BoxOption>
    </View>
  );
};

const SUDOKU_NUMBER_SCALE_CUTOFF = 380;
export const SUDOKU_NUMBER_PADDING = 3;

// Used for showing "undo" button text rather than just the symbol
export const SUDOKU_PASSED_NUMBER_CUTOFF = Style.DEVICE_WIDTH > SUDOKU_NUMBER_SCALE_CUTOFF;

const styles = StyleSheet.create({
  container: {
    padding: Style.adjust(SUDOKU_NUMBER_PADDING),
    aspectRatio: 1,
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingBottom: Style.adjust(5),
  },
  innerWrapper: {
    flex: 1,
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
