import { CellStatus } from "@components/screens/games/sudoku/sudoku-game/sudoku.context";

interface ISudokuState {
  board: number[][];
  history: { row: number; column: number; number: number }[];
  startTime: Date;
  endDate: Date;
  lastPauseTime: Date;
  lastHintTime: Date;
  hintsUsed: number;
  touched: Record<string, boolean>;
  mistakes: number;
  selectedNumber?: number;
  penalties: number[];
  selectedCell: { row: number; column: number };
  cellStatuses: CellStatus[][];
  guesses: number[];
}

interface SudokuAction {
  type: string;
  payload: any;
}

export const SUDOKU_END_GAME = "SUDOKU_END_GAME";
export const SUDOKU_SET_HISTORY = "SUDOKU_SET_HISTORY";
export const SUDOKU_ADD_PENALTY = "SUDOKU_ADD_PENALTY";
export const SUDOKU_ADD_MISTAKE = "SUDOKU_ADD_MISTAKE";
export const SUDOKU_PAUSE = "SUDOKU_PAUSE";
export const SUDOKU_RESUME = "SUDOKU_RESUME";
export const SUDOKU_GET_HINT = "SUDOKU_GET_HINT";
export const SUDOKU_SET_END_TIME = "SUDOKU_SET_END_TIME";
export const SUDOKU_SET_SELECTED_CELL = "SUDOKU_SET_SELECTED_CELL";
export const SUDOKU_SET_BOARD = "SUDOKU_SET_BOARD";
export const SUDOKU_TOUCH = "SUDOKU_TOUCH";
export const SUDOKU_ADD_GUESS = "SUDOKU_ADD_GUESS";
export const SUDOKU_SET_STATUSES = "SUDOKU_SET_STATUSES";
export const SUDOKU_SELECT_NUMBER = "SUDOKU_SELECT_NUMBER";

export const sudokuGameReducer = (state: ISudokuState, action: SudokuAction): ISudokuState => {
  switch (action.type) {
    case SUDOKU_SET_HISTORY: {
      return {
        ...state,
        history: action.payload,
      };
    }

    case SUDOKU_GET_HINT: {
      return {
        ...state,
        lastHintTime: new Date(),
        hintsUsed: state.hintsUsed + 1,
      };
    }

    case SUDOKU_ADD_MISTAKE: {
      return {
        ...state,
        mistakes: action.payload.mistakes,
      };
    }

    case SUDOKU_PAUSE: {
      return {
        ...state,
        lastPauseTime: action.payload,
      };
    }

    case SUDOKU_RESUME: {
      return {
        ...state,
        lastPauseTime: null as null,
        lastHintTime: action.payload.lastHintDifference,
        startTime: action.payload.newStartTime,
      };
    }

    case SUDOKU_END_GAME: {
      return {
        ...state,
        endDate: new Date(),
      };
    }

    case SUDOKU_SET_SELECTED_CELL: {
      return {
        ...state,
        selectedNumber: undefined,
        selectedCell: action.payload,
      };
    }

    case SUDOKU_SET_BOARD: {
      return {
        ...state,
        board: action.payload,
      };
    }

    case SUDOKU_ADD_PENALTY: {
      return {
        ...state,
        penalties: [...state.penalties, action.payload],
      };
    }

    case SUDOKU_ADD_GUESS: {
      return {
        ...state,
        guesses: [...state.guesses, action.payload],
      };
    }

    case SUDOKU_TOUCH: {
      return {
        ...state,
        touched: { ...state.touched, [action.payload]: true },
      };
    }

    case SUDOKU_SET_STATUSES: {
      return {
        ...state,
        cellStatuses: action.payload,
      };
    }

    case SUDOKU_SELECT_NUMBER: {
      return {
        ...state,
        selectedNumber: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
