import { View } from "react-native";
import { memo, useMemo } from "react";
import {
  SUDOKU_BOARD_SIZE,
  SUDOKU_DIMENSIONS,
  SUDOKU_QUADRANT_DIMENSIONS,
} from "@components/screens/games/sudoku/sudoku-game/sudoku.config";
import { Colours, Style, StyleSheet } from "@styles";
import Cell from "./cell";
import { CellStatus, useSudokuContext } from "@components/screens/games/sudoku/sudoku-game/sudoku.context";
import { ISudokuPosition } from "./sudoku.interface";

const SUDOKU_GRID = Array.from({ length: SUDOKU_DIMENSIONS }).map(() => Array.from({ length: SUDOKU_DIMENSIONS }));

const Grid = () => {
  const {
    setSelectedCell: setSelected,
    isRowComplete,
    cellStatuses,
    selectedCell,
    endTime,
    isColumnComplete,
    board,
    selectedNumber,
    getPosition,
  } = useSudokuContext();

  const activeNumber = selectedCell ? getPosition(selectedCell) : selectedNumber;

  const rowCompleteStatus = useMemo(() => {
    const rowStatus = [];
    for (let i = 0; i < SUDOKU_DIMENSIONS; i++) {
      rowStatus.push(isRowComplete(i));
    }

    return rowStatus;
  }, [isRowComplete]);

  const columnCompleteStatus = useMemo(() => {
    const columnStatus = [];
    for (let i = 0; i < SUDOKU_DIMENSIONS; i++) {
      columnStatus.push(isColumnComplete(i));
    }

    return columnStatus;
  }, [isColumnComplete]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.grid}>
        {SUDOKU_GRID.map((row, rowIndex) => (
          <View key={`${rowIndex}`} style={styles.row}>
            {row.map((__, columnIndex) => {
              const cell = cellStatuses?.[rowIndex]?.[columnIndex];
              const value = board[rowIndex][columnIndex];
              const isRowCompleted = rowCompleteStatus[rowIndex];
              const isColumnCompleted = columnCompleteStatus[columnIndex];

              const { isQuadrantActive, isWrong, isAdjacentActive, isActive, isInitial, isSameAsActive } =
                calculateCellProperties({
                  cell,
                  activeNumber,
                  selectedCell,
                  value,
                  row: rowIndex,
                  column: columnIndex,
                });

              return (
                <Cell
                  value={value}
                  row={rowIndex}
                  isWrong={isWrong}
                  isActive={isActive}
                  column={columnIndex}
                  isInitial={isInitial}
                  setSelected={setSelected}
                  isSameAsActive={isSameAsActive}
                  isRowCompleted={isRowCompleted}
                  isGameCompleted={!!endTime}
                  key={`${rowIndex}-${columnIndex}`}
                  isAdjacentActive={isAdjacentActive}
                  isQuadrantActive={isQuadrantActive}
                  isColumnCompleted={isColumnCompleted}
                />
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
};

export default memo(Grid);

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    borderRadius: Style.adjust(10),
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: Style.adjust(2),
    width: SUDOKU_BOARD_SIZE + Style.adjust(5),
    height: SUDOKU_BOARD_SIZE + Style.adjust(5),
    borderColor: Colours.sudoku.gridThickColor,
  },
  row: {
    flexDirection: "row",
  },
});

const calculateCellProperties = ({
  cell,
  value,
  row,
  column,
  activeNumber,
  selectedCell,
}: {
  selectedCell: ISudokuPosition;
  activeNumber: number;
  cell: CellStatus;
  value: number;
  row: number;
  column: number;
}) => {
  const isQuadrantActive =
    Math.floor(selectedCell?.column / SUDOKU_QUADRANT_DIMENSIONS) === Math.floor(column / SUDOKU_QUADRANT_DIMENSIONS) &&
    Math.floor(selectedCell?.row / SUDOKU_QUADRANT_DIMENSIONS) === Math.floor(row / SUDOKU_QUADRANT_DIMENSIONS);

  const isWrong = cell?.isWrong;
  const isInitial = cell?.isInitial;
  const isSameAsActive = activeNumber === value && value !== 0;
  const isActive = selectedCell?.column === column && selectedCell?.row === row;
  const isAdjacentActive = selectedCell?.column === column || selectedCell?.row === row;

  return { isQuadrantActive, isWrong, isActive, isInitial, isAdjacentActive, isSameAsActive };
};
