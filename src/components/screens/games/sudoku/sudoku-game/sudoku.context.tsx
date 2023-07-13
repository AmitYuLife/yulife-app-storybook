import { createContext, useContext } from "react";
import { SudokuBoardType } from "../../../../games/sudoku/sudoku.enum";
import { ISodukuHistory, ISudokuConfig, ISudokuPosition } from "@components/games/sudoku/sudoku.interface";
import { SudokuBoard } from "@components/games/sudoku/sudoku-manager";
import { SUDOKU_DEFAULT_CONFIG } from "./sudoku.config";

export interface CellStatus {
  isInitial: boolean;
  isWrong: boolean;
}

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
  cellStatuses: CellStatus[][];
  unpause: () => void;
  lastPauseTime?: Date;
  penaltyTime?: number;
  config: ISudokuConfig;
  guesses: number[];
  answers?: SudokuBoard;
  history: ISodukuHistory[];
  initialBoard?: SudokuBoard;
  initialPenalties: number[];
  enableAnimations?: boolean;
  selectedNumber?: number;
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
  config: SUDOKU_DEFAULT_CONFIG,
  penalties: [],
  guesses: [],
  cellStatuses: [],
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
