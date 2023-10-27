import { CellStatus } from "@components/screens/games/sudoku/sudoku-game/sudoku.context";
import { SyncAction } from "../_core/types";
import { SUDOKU_RESET, SUDOKU_STATE_CHANGED } from "./sudoku.actions";

interface ISudokuPosition {
  row: number;
  column: number;
}

interface ISodukuHistory extends ISudokuPosition {
  number: number;
}

type SudokuBoard = number[][];
export interface ISudokuStore {
  gameIdentifier: string;
  date: string;
  hintsUsed: number;
  mistakes: number;
  guesses?: number[];
  board: SudokuBoard;
  endTime: Date;
  history: ISodukuHistory[];
  cellStatuses: CellStatus[][];
  startTime: Date;
  penalties: number[];
  lastHintTime: Date;
  lastPauseTime: Date;
  touchedCells: Record<string, boolean>;
  levelSlotId: string;
}

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
