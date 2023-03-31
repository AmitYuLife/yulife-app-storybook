import React, { memo, useCallback, useMemo } from "react";
import CellView from "./cell-view";
import { SudokuBoardType } from "@components/games/sudoku/sudoku.enum";
import { useSudokuContext } from "@components/screens/games/sudoku/sudoku-game/sudoku.context";
import { SUDOKU_QUADRANT_DIMENSIONS } from "@components/screens/games/sudoku/sudoku-game/sudoku.config";

interface IProps {
  row: number;
  column: number;
}

const Cell = ({ column, row }: IProps) => {
  const {
    setSelectedCell: setSelected,
    isRowComplete,
    selectedCell,
    endTime,
    isColumnComplete,
    isWrongNumber,
    getPosition,
    board,
  } = useSudokuContext();

  const value = useMemo(() => board[row][column], [board, row, column]);
  const activeNumber = selectedCell ? getPosition(selectedCell) : null;
  const isActive = selectedCell?.column === column && selectedCell?.row === row;
  const isAdjacentActive = selectedCell?.column === column || selectedCell?.row === row;
  const isQuadrantActive =
    Math.floor(selectedCell?.column / SUDOKU_QUADRANT_DIMENSIONS) === Math.floor(column / SUDOKU_QUADRANT_DIMENSIONS) &&
    Math.floor(selectedCell?.row / SUDOKU_QUADRANT_DIMENSIONS) === Math.floor(row / SUDOKU_QUADRANT_DIMENSIONS);

  const isRowCompleted = useMemo(() => isRowComplete(row), [row, isRowComplete]);

  const isColumnCompleted = useMemo(() => isColumnComplete(column), [column, isColumnComplete]);

  const isInitial = useMemo(
    () => getPosition({ row, column, boardType: SudokuBoardType.INITIAL }) !== 0,
    [row, getPosition, column]
  );

  const isWrong = useMemo(() => isWrongNumber({ row, column, number: value }), [value, isWrongNumber, row, column]);
  const isSameAsActive = useMemo(() => activeNumber === value && value !== 0, [value, activeNumber]);

  const onPress = useCallback(() => {
    setSelected({ row, column });
  }, [row, setSelected, column]);

  return (
    <CellView
      row={row}
      column={column}
      value={value}
      isActive={isActive}
      isInitial={isInitial}
      isWrong={isWrong}
      isGameCompleted={!!endTime}
      isRowComplete={isRowCompleted}
      isColumnComplete={isColumnCompleted}
      isAdjacentActive={isAdjacentActive}
      isQuadrantActive={isQuadrantActive}
      isSameAsActive={isSameAsActive}
      onPress={onPress}
    />
  );
};

export default memo(Cell);
