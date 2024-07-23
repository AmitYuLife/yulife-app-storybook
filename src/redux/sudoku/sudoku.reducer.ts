import { createReducer } from "@reduxjs/toolkit";
import { sudokuStateChanged, sudokuReset } from "./sudoku.actions";
import { ISudokuStore } from "./sudoku.types";

const DEFAULT_SUDOKU_STORE: ISudokuStore = {
  gameIdentifier: "",
  date: "",
  hintsUsed: 0,
  cellStatuses: [],
  endTime: null,
  mistakes: 0,
  board: null,
  touchedCells: {},
  history: [],
  startTime: null,
  penalties: [],
  lastHintTime: null,
  lastPauseTime: null,
  levelSlotId: "",
};

export const getInitialState = (): ISudokuStore => ({ ...DEFAULT_SUDOKU_STORE });

const sudokuReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(sudokuStateChanged, (state, action) => ({ ...state, ...action.payload }));
  builder.addCase(sudokuReset, (_state, action) => ({ ...getInitialState(), ...(action.payload || {}) }));
  builder.addDefaultCase((state) => state || getInitialState());
});

export default sudokuReducer;
