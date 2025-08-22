import { SyncAction } from "../_core/types";
import { SUDOKU_RESET, SUDOKU_STATE_CHANGED } from "./sudoku.actions";
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
  challengeId: "",
};

export const getInitialState = (): ISudokuStore => ({ ...DEFAULT_SUDOKU_STORE });

const sudokuReducer = (state: ISudokuStore = getInitialState(), action: SyncAction): ISudokuStore => {
  switch (action.type) {
    case SUDOKU_STATE_CHANGED:
      return { ...state, ...action.payload };

    case SUDOKU_RESET:
      return { ...getInitialState(), ...(action.payload || {}) };

    default:
      return state || getInitialState();
  }
};

export default sudokuReducer;
