import { ISudokuStore } from "./sudoku.reducer";

export const SUDOKU_STATE_CHANGED = "SUDOKU_STATE_CHANGED";
export const SUDOKU_RESET = "SUDOKU_RESET";

export const sudokuStateChanged = (payload: Partial<ISudokuStore>) => ({
  payload,
  type: SUDOKU_STATE_CHANGED,
});

export const sudokuReset = (payload?: Partial<ISudokuStore>) => ({
  payload,
  type: SUDOKU_RESET,
});
