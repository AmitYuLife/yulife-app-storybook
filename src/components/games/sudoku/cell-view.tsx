import React, { memo, useEffect, useMemo, useState } from "react";
import { View, ViewStyle } from "react-native";
import Animated, { Easing, useSharedValue, useAnimatedStyle, withDelay, withTiming } from "react-native-reanimated";
import CellNumber from "./cell-number";
import {
  SUDOKU_BOARD_SIZE,
  SUDOKU_CELL_TRANSITION_TIME,
  SUDOKU_DIMENSIONS,
  SUDOKU_QUADRANT_DIMENSIONS,
  SUDOKU_SAME_VALUE_CELL_DELAY_TIME,
} from "@components/screens/games/sudoku/sudoku-game/sudoku.config";
import { Colours, StyleSheet } from "@styles";
import { CELL_ROW_COLUMN } from "@ids";
import { TouchableOpacityWithDelay } from "@components/molecules";

export interface ICellViewProps {
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
}: ICellViewProps) => {
  const circleAnimationScale = useSharedValue(0);
  const backgroundAnimation = useSharedValue("white");
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

  const animatedStyle = useAnimatedStyle(() => {
    return {
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
    };
  }, [isActive, isGameCompleted]);

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    if (!isGameCompleted) {
      return { backgroundColor: backgroundAnimation.value };
    }

    return {
      backgroundColor: withDelay(
        isGameCompleted ? (row + 1 + column + 1) * BACKGROUND_COMPLETE_DELAY : 0,
        withTiming(backgroundAnimation.value, {
          duration: BACKGROUND_ANIMATION_DURATION,
          easing: EASING_FUNCTION,
        })
      ),
    };
  }, [isGameCompleted]);

  const cellStyles = useMemo(() => {
    const style: ViewStyle[] = [cellViewStyles.cell];
    style.push(animatedBackgroundStyle);

    // Thick column lines
    if (column % SUDOKU_QUADRANT_DIMENSIONS === SUDOKU_QUADRANT_DIMENSIONS - 1 && column !== SUDOKU_DIMENSIONS - 1) {
      style.push(cellViewStyles.cellRightMain);
    }

    // Thick row lines
    if (row % SUDOKU_QUADRANT_DIMENSIONS === SUDOKU_QUADRANT_DIMENSIONS - 1 && row !== SUDOKU_DIMENSIONS - 1) {
      style.push(cellViewStyles.cellBottomMain);
    }

    if (row === SUDOKU_DIMENSIONS - 1) {
      style.push(cellViewStyles.cellLastRow);
    }

    if (column === SUDOKU_DIMENSIONS - 1) {
      style.push(cellViewStyles.cellLastColumn);
    }

    return style;
  }, [row, animatedBackgroundStyle, column]);

  const expandingCircleStyle = useMemo(
    () => [cellViewStyles.expandingCircle, animatedStyle, { backgroundColor: circleBg }],
    [animatedStyle, circleBg]
  );

  return (
    <TouchableOpacityWithDelay
      onPress={onPress}
      style={cellViewStyles.wrapper}
      activeOpacity={ACTIVE_OPACITY}
      testID={CELL_ROW_COLUMN(row, column, value)}
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
    </TouchableOpacityWithDelay>
  );
};

export const cellViewStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  cell: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    width: SUDOKU_BOARD_SIZE / SUDOKU_DIMENSIONS,
    height: SUDOKU_BOARD_SIZE / SUDOKU_DIMENSIONS,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colours.sudoku.gridColor,
    borderRightColor: Colours.sudoku.gridColor,
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
  cellLastRow: {
    borderBottomWidth: 0,
  },
  cellLastColumn: {
    borderRightWidth: 0,
  },
});

export default memo(CellView);
