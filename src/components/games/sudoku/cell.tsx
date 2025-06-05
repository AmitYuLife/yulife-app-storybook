import React, { memo, useCallback } from "react";
import CellView from "./cell-view";
import { ISudokuPosition } from "./sudoku.interface";

interface IProps {
  row: number;
  column: number;

  value?: number;
  isActive?: boolean;
  isAdjacentActive?: boolean;
  isQuadrantActive?: boolean;
  isRowCompleted?: boolean;
  isColumnCompleted?: boolean;
  isInitial?: boolean;
  isWrong?: boolean;
  isGameCompleted?: boolean;
  isSameAsActive?: boolean;
  setSelected?: ({ row, column }: ISudokuPosition) => void;
  setSelectedCell?: ({ row, column }: ISudokuPosition) => void;
}

const Cell = ({
  value,
  isRowCompleted,
  isColumnCompleted,
  isActive,
  isWrong,
  isAdjacentActive,
  isInitial,
  isGameCompleted,
  setSelected,
  isQuadrantActive,
  isSameAsActive,
  column,
  row,
}: IProps) => {
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
      isGameCompleted={isGameCompleted}
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
