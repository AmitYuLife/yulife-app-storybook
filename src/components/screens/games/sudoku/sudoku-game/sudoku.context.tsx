import { createContext, useContext } from "react";
import { SudokuBoardType } from "../../../../games/sudoku/sudoku.enum";
import { ISodukuHistory, ISudokuPosition } from "@components/games/sudoku/sudoku.interface";
import { SudokuBoard } from "@components/games/sudoku/sudoku-manager";

export interface ISudokuContext {
  selectedCell?: {
    row: number;
    column: number;
  };
  getPosition: ({
    row,
    column,
    boardType = SudokuBoardType.INITIAL,
  }: {
    boardType?: SudokuBoardType;
  } & ISudokuPosition) => number;
  endTime?: Date;
  startTime?: Date;
  undo: () => void;
  mistakes?: number;
  pause: () => void;
  hintsUsed?: number;
  board?: SudokuBoard;
  penalties: number[];
  lastHintTime?: Date;
  unpause: () => void;
  lastPauseTime?: Date;
  penaltyTime?: number;
  answers?: SudokuBoard;
  history: ISodukuHistory[];
  guesses: number[];
  initialBoard?: SudokuBoard;
  initialPenalties: number[];
  getDurationText: () => string;
  isRowComplete: (row: number) => boolean;
  isNumberComplete: (number: number) => boolean;
  isColumnComplete: (column: number) => boolean;
  getHint: ({ row, column }: ISudokuPosition) => void;
  setSelectedCell?: ({ row, column }: { row: number; column: number }) => void;
  putNumber?: ({ row, column, number, antiCheat }: { number: number; antiCheat?: boolean } & ISudokuPosition) => void;
  isWrongNumber?: ({ row, column, number }: { number: number } & ISudokuPosition) => boolean;
}
export const SodukuContext = createContext<ISudokuContext>({
  history: [],
  penalties: [],
  guesses: [],
  undo: () => {
    // ignore
  },
  pause: () => {
    // ignore
  },
  unpause: () => {
    // ignore
  },
  getHint: () => {
    // ignore
  },
  getPosition: () => 0,
  initialPenalties: [],
  setSelectedCell: () => {
    // ignore
  },
  isNumberComplete: () => false,
  getDurationText: () => "",
  isRowComplete: () => false,
  isColumnComplete: () => false,
});

export const useSudokuContext = () => useContext(SodukuContext);
