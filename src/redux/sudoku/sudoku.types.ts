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
  challengeId: string;
}

interface CellStatus {
  isInitial: boolean;
  isWrong: boolean;
}

interface ISudokuPosition {
  row: number;
  column: number;
}

interface ISodukuHistory extends ISudokuPosition {
  number: number;
}

type SudokuBoard = number[][];

export type SudokuStateChangedPayload = Partial<ISudokuStore>;
export type SudokuResetPayload = Pick<ISudokuStore, "startTime" | "date" | "gameIdentifier" | "challengeId">;
