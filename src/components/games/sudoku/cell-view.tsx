import React, { memo, useEffect, useMemo, useState } from "react";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import Animated, { Easing, useSharedValue, useAnimatedStyle, withDelay, withTiming } from "react-native-reanimated";
import CellNumber from "./cell-number";
import {
  SUDOKU_BOARD_SIZE,
  SUDOKU_CELL_TRANSITION_TIME,
  SUDOKU_DIMENSIONS,
  SUDOKU_QUADRANT_DIMENSIONS,
  SUDOKU_SAME_VALUE_CELL_DELAY_TIME,
} from "@components/screens/games/sudoku/sudoku-game/sudoku.config";
import { Colours } from "@styles";
import { CELL_ROW_COLUMN } from "@ids";

interface IProps {
  row: number;
  value?: number;
  column: number;
  isWrong: boolean;
  isActive: boolean;
  isInitial: boolean;
  onPress: () => void;
  isRowComplete: boolean;
  isSameAsActive: boolean;
  isGameCompleted: boolean;
  isAdjacentActive: boolean;
  isQuadrantActive: boolean;
  isColumnComplete: boolean;
}

const SCALE_ANIMATION_MAX = 0.9;
const SCALE_ANIMATION_MIN = 0;
const BACKGROUND_COMPLETE_DELAY = 50;
const BACKGROUND_ANIMATION_DURATION = 300;
const ACTIVE_OPACITY = 0.85;
const EASING_FUNCTION = Easing.bezier(0.25, 0.1, 0.25, 1);

const AnimatedView = Animated.createAnimatedComponent(View);
const CellView = ({
  row,
  value,
  column,
  isWrong,
  onPress,
  isActive,
  isInitial,
  isRowComplete,
  isSameAsActive,
  isGameCompleted,
  isAdjacentActive,
  isColumnComplete,
  isQuadrantActive,
}: IProps) => {
  const circleAnimationScale = useSharedValue(0);
  const backgroundAnimation = useSharedValue("transparent");
  const [circleBg, setCircleBg] = useState<string>("transparent");

  useEffect(() => {
    if (isGameCompleted) {
      backgroundAnimation.value = "transparent";
      circleAnimationScale.value = SCALE_ANIMATION_MIN;
      return;
    }

    backgroundAnimation.value =
      isAdjacentActive || isQuadrantActive ? Colours.sudoku.adjacentCellBackgroundColor : "white";
    circleAnimationScale.value = isActive || isSameAsActive ? SCALE_ANIMATION_MAX : SCALE_ANIMATION_MIN;
  }, [
    isActive,
    isSameAsActive,
    isGameCompleted,
    isAdjacentActive,
    isQuadrantActive,
    circleAnimationScale,
    backgroundAnimation,
  ]);

  useEffect(() => {
    if (isActive) {
      setCircleBg(Colours.sudoku.activeCellBackgroundColor);
      return;
    }

    if (isSameAsActive && value !== 0) {
      setCircleBg(Colours.sudoku.sameAsActiveCellBackgroundColor);
    }
  }, [isActive, value, isSameAsActive]);

  useEffect(() => {
    if (isGameCompleted) {
      circleAnimationScale.value = 0;
      backgroundAnimation.value = Colours.sudoku.completedGameCellBackgroundTransitionColor;
    }
  }, [isGameCompleted, backgroundAnimation, circleAnimationScale]);

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          scale: withDelay(
            isActive ? 0 : SUDOKU_SAME_VALUE_CELL_DELAY_TIME,
            withTiming(circleAnimationScale.value, {
              duration: SUDOKU_CELL_TRANSITION_TIME,

              easing: EASING_FUNCTION,
            })
          ),
        },
      ],
    }),
    [isActive, isGameCompleted]
  );

  const animatedBackgroundStyle = useAnimatedStyle(
    () => ({
      backgroundColor: withDelay(
        isGameCompleted ? (row + 1 + column + 1) * BACKGROUND_COMPLETE_DELAY : 0,
        withTiming(backgroundAnimation.value, {
          duration: BACKGROUND_ANIMATION_DURATION,
          easing: EASING_FUNCTION,
        })
      ),
    }),

    [isGameCompleted]
  );

  const cellStyles = useMemo(() => {
    const style: ViewStyle[] = [styles.cell];

    if (column % SUDOKU_QUADRANT_DIMENSIONS === SUDOKU_QUADRANT_DIMENSIONS - 1 && column !== SUDOKU_DIMENSIONS - 1) {
      style.push(styles.cellRightMain);
    }

    if (row % SUDOKU_QUADRANT_DIMENSIONS === SUDOKU_QUADRANT_DIMENSIONS - 1 && row !== SUDOKU_DIMENSIONS - 1) {
      style.push(styles.cellBottomMain);
    }

    style.push(animatedBackgroundStyle);

    return style;
  }, [row, animatedBackgroundStyle, column]);

  const expandingCircleStyle = useMemo(() => {
    const style = [styles.expandingCircle, animatedStyle, { backgroundColor: circleBg }];
    return style;
  }, [circleBg, animatedStyle]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.wrapper}
      activeOpacity={ACTIVE_OPACITY}
      testID={CELL_ROW_COLUMN(row, column)}
    >
      <AnimatedView style={cellStyles}>
        <AnimatedView style={expandingCircleStyle} />
        <CellNumber
          value={value}
          isInitial={isInitial}
          row={row}
          column={column}
          isWrong={isWrong}
          isRowCompleted={isRowComplete}
          isColumnCompleted={isColumnComplete}
          isGameCompleted={isGameCompleted}
        />
      </AnimatedView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  cell: {
    borderWidth: 0.5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    width: SUDOKU_BOARD_SIZE / SUDOKU_DIMENSIONS,
    height: SUDOKU_BOARD_SIZE / SUDOKU_DIMENSIONS,
    borderColor: Colours.sudoku.gridColor,
  },
  expandingCircle: {
    width: "100%",
    opacity: 1,
    height: "100%",
    position: "absolute",
    borderRadius: 100,
  },
  cellRightMain: {
    borderRightWidth: 2,
    borderRightColor: Colours.sudoku.gridThickColor,
  },
  cellBottomMain: {
    borderBottomWidth: 2,
    borderBottomColor: Colours.sudoku.gridThickColor,
  },
});

export default memo(CellView);
