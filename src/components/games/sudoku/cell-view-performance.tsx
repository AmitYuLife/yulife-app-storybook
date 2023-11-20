import React, { memo, useEffect, useMemo, useState } from "react";
import { View, ViewStyle } from "react-native";
import CellNumber from "./cell-number";
import {
  SUDOKU_DIMENSIONS,
  SUDOKU_QUADRANT_DIMENSIONS,
} from "@components/screens/games/sudoku/sudoku-game/sudoku.config";
import { Colours } from "@styles";
import { CELL_ROW_COLUMN } from "@ids";
import { ICellViewProps, cellViewStyles } from "./cell-view";
import { TouchableOpacityWithDelay } from "@molecules";

const ACTIVE_OPACITY = 0.85;

const CellViewPerformance = ({
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
  enableAnimations,
  isAdjacentActive,
  isColumnComplete,
  isQuadrantActive,
}: ICellViewProps) => {
  const [backgroundColor, setBackgroundColor] = useState<string>("white");
  const [circleBg, setCircleBg] = useState<string>("transparent");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isGameCompleted) {
      setBackgroundColor("transparent");
      setIsOpen(false);
      return;
    }

    setBackgroundColor(isAdjacentActive || isQuadrantActive ? Colours.sudoku.adjacentCellBackgroundColor : "white");
    setIsOpen(isActive || isSameAsActive);
  }, [isActive, isSameAsActive, isGameCompleted, isAdjacentActive, isQuadrantActive]);

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
      setIsOpen(false);
      setBackgroundColor(Colours.sudoku.completedGameCellBackgroundTransitionColor);
    }
  }, [isGameCompleted]);

  const cellStyles = useMemo(() => {
    const style: ViewStyle[] = [cellViewStyles.cell, { backgroundColor }];

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
  }, [backgroundColor, column, row]);

  const circleStyles = useMemo(
    (): ViewStyle => ({
      ...cellViewStyles.expandingCircle,
      transform: [{ scale: 0.9 }],
      backgroundColor: circleBg,
    }),
    [circleBg]
  );

  return (
    <TouchableOpacityWithDelay
      onPress={onPress}
      style={cellViewStyles.wrapper}
      activeOpacity={ACTIVE_OPACITY}
      testID={CELL_ROW_COLUMN(row, column, value)}
    >
      <View style={cellStyles}>
        {isOpen ? <View style={circleStyles} /> : null}
        <CellNumber
          value={value}
          isInitial={isInitial}
          row={row}
          column={column}
          isWrong={isWrong}
          isRowCompleted={isRowComplete}
          isColumnCompleted={isColumnComplete}
          isGameCompleted={isGameCompleted}
          enableAnimations={enableAnimations}
        />
      </View>
    </TouchableOpacityWithDelay>
  );
};

export default memo(CellViewPerformance);
