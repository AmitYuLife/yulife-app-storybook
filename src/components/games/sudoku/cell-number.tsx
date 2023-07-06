import {
  SODUKU_NUMBER_ANIMATION_TIME,
  SUDOKU_CELL_SIZE,
  SUDOKU_NUMBER_WAVE_SCALE,
  SUDOKU_NUMBER_WAVE_SCALE_DURATION,
  SUDOKU_NUMBER_WAVE_SCALE_DURATION_MULT,
  SUDOKU_NUMBER_WAVE_SCALE_DURATION_REDUCE,
} from "@components/screens/games/sudoku/sudoku-game/sudoku.config";
import { useSudokuContext } from "@components/screens/games/sudoku/sudoku-game/sudoku.context";
import { Colours, Style } from "@styles";
import React, { memo, useEffect, useMemo } from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";
import Animated, {
  BounceIn,
  withSequence,
  withDelay,
  withTiming,
  useAnimatedStyle,
  Easing,
  useSharedValue,
  BounceOut,
} from "react-native-reanimated";

interface IProps {
  row?: number;
  value: number;
  column: number;
  isWrong?: boolean;
  enableAnimations?: boolean;
  isInitial?: boolean;
  isRowCompleted?: boolean;
  isGameCompleted?: boolean;
  isColumnCompleted?: boolean;
}

const AnimatedText = Animated.createAnimatedComponent(Text);

const CellNumber = ({
  value,
  row,
  column,
  isInitial,
  isRowCompleted,
  enableAnimations,
  isColumnCompleted,
  isGameCompleted,
  isWrong,
}: IProps) => {
  const scaleDownAnimation = useSharedValue(1);
  const { lastPauseTime } = useSudokuContext();

  const textColor = useMemo(() => {
    if (isInitial) {
      return Colours.sudoku.initialNumberColor;
    }

    if (isWrong) {
      return Colours.sudoku.wrongNumberColor;
    }

    return Colours.sudoku.correctCellTextColor;
  }, [isInitial, isWrong]);

  useEffect(() => {
    if (isGameCompleted || isColumnCompleted || isRowCompleted) {
      scaleDownAnimation.value = SUDOKU_NUMBER_WAVE_SCALE;
    }
  }, [isGameCompleted, isColumnCompleted, isRowCompleted, scaleDownAnimation]);

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          scale: enableAnimations
            ? withDelay(
                (row + 1 + column + 1) * SUDOKU_NUMBER_WAVE_SCALE_DURATION_MULT -
                  SUDOKU_NUMBER_WAVE_SCALE_DURATION_REDUCE,
                withSequence(
                  withTiming(scaleDownAnimation.value, {
                    duration: SUDOKU_NUMBER_WAVE_SCALE_DURATION,
                    easing: Easing.linear,
                  }),
                  withTiming(1, {
                    duration: SUDOKU_NUMBER_WAVE_SCALE_DURATION,
                    easing: Easing.linear,
                  })
                )
              )
            : 1,
        },
      ],
    }),
    [isGameCompleted, isRowCompleted, isColumnCompleted]
  );

  const style = useMemo(() => [styles.text, animatedStyle, { color: textColor }], [animatedStyle, textColor]);

  return (
    <View style={styles.wrapper}>
      {value && !lastPauseTime ? (
        <AnimatedText
          entering={enableAnimations ? BounceIn.duration(SODUKU_NUMBER_ANIMATION_TIME) : null}
          exiting={enableAnimations ? BounceOut.duration(SODUKU_NUMBER_ANIMATION_TIME) : null}
          style={style}
          allowFontScaling={false}
        >
          {value}
        </AnimatedText>
      ) : null}
    </View>
  );
};

export default memo(CellNumber);

const styles = StyleSheet.create({
  wrapper: {
    width: SUDOKU_CELL_SIZE,
    overflow: "hidden",
    borderRadius: Style.adjust(100),
    height: SUDOKU_CELL_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: Style.adjust(22),
    width: PixelRatio.roundToNearestPixel(SUDOKU_CELL_SIZE * 0.9),
    lineHeight: PixelRatio.roundToNearestPixel(SUDOKU_CELL_SIZE * 0.9),
  },
});
