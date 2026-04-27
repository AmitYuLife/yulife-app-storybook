import { ActionCreatorWithOptionalPayload, createAction } from "@reduxjs/toolkit";
import { SudokuStateChangedPayload, SudokuResetPayload } from "./sudoku.types";

export const SUDOKU_STATE_CHANGED = "SUDOKU_STATE_CHANGED";
export const SUDOKU_RESET = "SUDOKU_RESET";

export const sudokuStateChanged: ActionCreatorWithOptionalPayload<SudokuStateChangedPayload> = createAction<
  SudokuStateChangedPayload,
  typeof SUDOKU_STATE_CHANGED
>(SUDOKU_STATE_CHANGED);

export const sudokuReset: ActionCreatorWithOptionalPayload<SudokuResetPayload> = createAction<
  SudokuResetPayload,
  typeof SUDOKU_RESET
>(SUDOKU_RESET);
