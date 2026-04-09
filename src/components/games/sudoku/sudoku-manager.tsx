import { ReactNode, memo, useReducer, useCallback, useEffect, useMemo, useRef } from "react";
import { AppStateStatus } from "react-native";
import { useAppState } from "@hooks";
import { SudokuBoardType } from "./sudoku.enum";
import { ISodukuHistory, ISudokuConfig, ISudokuPosition, ISudokuResults } from "./sudoku.interface";
import { CellStatus, ISudokuContext, SodukuContext } from "@screens/games/sudoku/sudoku-game/sudoku.context";
import moment from "moment";
import {
  SUDOKU_DEFAULT_CONFIG,
  SUDOKU_DIMENSIONS,
  SUDOKU_QUADRANT_DIMENSIONS,
} from "@screens/games/sudoku/sudoku-game/sudoku.config";
import { ISodukuBoard } from "@screens/games/sudoku/sudoku-game/sudoku.container";
import { ISudokuStore } from "@redux/sudoku/sudoku.types";
import { SudokuDifficulty } from "@graphql/__generated";
import {
  SUDOKU_ADD_GUESS,
  SUDOKU_ADD_MISTAKE,
  SUDOKU_ADD_PENALTY,
  SUDOKU_END_GAME,
  SUDOKU_GET_HINT,
  SUDOKU_PAUSE,
  SUDOKU_RESUME,
  SUDOKU_SELECT_NUMBER,
  SUDOKU_SET_BOARD,
  SUDOKU_SET_HISTORY,
  SUDOKU_SET_SELECTED_CELL,
  SUDOKU_SET_STATUSES,
  SUDOKU_TOUCH,
  sudokuGameReducer,
} from "@components/games/sudoku/sudoku-game.reducer";
import { getPositionHash } from "./sudoku-utils";

export interface ICompletedGame {
  hintsUsed: number;
  mistakes: number;
  startTime: Date;
  penalties: number[];
}

export interface ISudokuStateChangedArgs {
  key: keyof ISudokuStore;
  value: string | number | SudokuBoard | ISodukuHistory[] | number[] | Record<string, boolean> | string[] | Date;
}

interface IProps {
  children: ReactNode;
  onPause?: () => void;
  onResume?: () => void;
  initialBoard: ISodukuBoard;
  savedState?: ISudokuStore;
  gameIdentifier: string;
  detectCheats?: boolean;
  onGameComplete: (data: ISudokuResults) => void;
  onStateUpdate?: (args: ISudokuStateChangedArgs) => void;
  config?: ISudokuConfig;
}

export type SudokuBoard = number[][];
const SudokuManager = ({
  initialBoard,
  onPause,
  onResume,
  detectCheats,
  savedState,
  children,
  config = SUDOKU_DEFAULT_CONFIG,
  onStateUpdate,
  onGameComplete,
}: IProps) => {
  const [sudokuState, sudokuDispatch] = useReducer(sudokuGameReducer, {
    touched: savedState?.touchedCells ?? {},
    endDate: undefined,
    selectedCell: undefined,
    selectedNumber: undefined,
    history: savedState?.history ?? [],
    mistakes: savedState?.mistakes ?? 0,
    hintsUsed: savedState?.hintsUsed ?? 0,
    penalties: savedState?.penalties ?? [],
    startTime: savedState?.startTime ?? new Date(),
    cellStatuses: [],
    lastHintTime: savedState?.lastHintTime ?? null,
    guesses: [],
    lastPauseTime: savedState?.lastPauseTime ?? null,
    board: [...(savedState?.board ?? initialBoard.puzzle)].map((row) => [...row]),
  });

  const updateGameState = useCallback(
    (
      key: keyof ISudokuStore,
      value: string | number | SudokuBoard | ISodukuHistory[] | number[] | string[] | Record<string, boolean> | Date
    ) => {
      if (onStateUpdate) {
        onStateUpdate({ key, value });
      }
    },
    [onStateUpdate]
  );

  const { current: initialPenalties } = useRef(savedState?.penalties);

  const getInitialCellStatuses = useCallback(() => {
    return Array.from({ length: SUDOKU_DIMENSIONS }).map((_, rowIndex) =>
      Array.from({ length: SUDOKU_DIMENSIONS }).map((__, columnIndex): CellStatus => {
        const isInitial = (initialBoard.puzzle[rowIndex][columnIndex] ?? 0) !== 0;
        return {
          isInitial,
          isWrong:
            !isInitial && savedState?.board
              ? savedState.board[rowIndex][columnIndex] !== initialBoard.solution[rowIndex][columnIndex]
              : false,
        };
      })
    );
  }, [initialBoard.puzzle, initialBoard.solution, savedState?.board]);

  useEffect(() => {
    const cellStatuses = getInitialCellStatuses();
    sudokuDispatch({ type: SUDOKU_SET_STATUSES, payload: cellStatuses });

    if (!savedState?.startTime) {
      updateGameState("startTime", sudokuState.startTime);
    }

    if (savedState?.lastPauseTime) {
      unpause();
    }

    checkFinished();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPosition = useCallback(
    ({
      row,
      column,
      boardType = SudokuBoardType.CURRENT,
    }: {
      boardType: SudokuBoardType;
    } & ISudokuPosition): number => {
      if (boardType === SudokuBoardType.ANSWER) {
        return initialBoard?.solution?.[row]?.[column];
      }

      if (boardType === SudokuBoardType.INITIAL) {
        return initialBoard?.puzzle?.[row]?.[column];
      }

      return sudokuState.board?.[row]?.[column];
    },
    [sudokuState.board, initialBoard]
  );

  const isWrongNumber = useCallback(
    ({ row, column, number }: ISudokuPosition & { number: number }): boolean => {
      const isInitial = sudokuState.cellStatuses[row][column].isInitial;
      if (isInitial) {
        return false;
      }

      const correctAnswer = getPosition({ row, column, boardType: SudokuBoardType.ANSWER });
      if (number === 0) {
        return false;
      }

      return correctAnswer !== number;
    },
    [getPosition, sudokuState.cellStatuses]
  );

  const doesExistInitially = useCallback(
    ({ row, column }: ISudokuPosition): boolean => {
      return getPosition({ row, column, boardType: SudokuBoardType.INITIAL }) !== 0;
    },
    [getPosition]
  );

  const isNumberComplete = useCallback(
    (number: number) => {
      const flatBoard = sudokuState.board.flat();
      return (
        initialBoard.solution.flat().filter((answerNumber, index) => {
          if (answerNumber !== number) {
            return true;
          }

          return flatBoard[index] === number;
        }).length === flatBoard.length
      );
    },
    [sudokuState?.board, initialBoard?.solution]
  );

  const getDurationSeconds = useCallback(
    (endingTime?: Date) => {
      const differenceSeconds =
        moment(endingTime).diff(moment(sudokuState.startTime), "seconds") +
        sudokuState?.penalties.reduce((a, b) => a + b, 0);

      return Math.max(0, differenceSeconds);
    },
    [sudokuState?.penalties, sudokuState.startTime]
  );

  const getDurationText = useCallback(() => {
    const seconds = getDurationSeconds();
    let formatString: string = "mm:ss";
    if (seconds > 60 * 60) {
      formatString = "HH:mm:ss";
    }

    return moment.utc(getDurationSeconds() * 1000).format(formatString);
  }, [getDurationSeconds]);

  const isRowComplete = useCallback(
    (row: number) => {
      return (
        Array.from({ length: SUDOKU_DIMENSIONS })
          .map((_, index: number) => {
            return (
              getPosition({ row, column: index, boardType: SudokuBoardType.ANSWER }) ===
              getPosition({ row, column: index, boardType: SudokuBoardType.CURRENT })
            );
          })
          .filter((a) => a).length === SUDOKU_DIMENSIONS
      );
    },
    [getPosition]
  );

  const isColumnComplete = useCallback(
    (column: number) => {
      return (
        Array.from({ length: SUDOKU_DIMENSIONS })
          .map((_, index: number) => {
            return (
              getPosition({ row: index, column, boardType: SudokuBoardType.ANSWER }) ===
              getPosition({ row: index, column, boardType: SudokuBoardType.CURRENT })
            );
          })
          .filter((a) => a).length === SUDOKU_DIMENSIONS
      );
    },
    [getPosition]
  );

  const isGameFinished = useCallback(() => {
    const flatSolution = initialBoard.solution.flat();
    const flatBoard = sudokuState.board.flat();

    const hasIncorrectAnswers = flatSolution.map((a, i) => a === flatBoard[i]).filter((a) => !a).length;
    return !hasIncorrectAnswers;
  }, [sudokuState.board, initialBoard]);

  const updateHistory = useCallback(
    (newHistory: ISodukuHistory[]) => {
      updateGameState("history", newHistory);
      sudokuDispatch({ type: SUDOKU_SET_HISTORY, payload: newHistory });
    },
    [updateGameState, sudokuDispatch]
  );

  const addPenalty = useCallback(
    (seconds: number) => {
      updateGameState("penalties", [...sudokuState.penalties, seconds]);
      sudokuDispatch({ type: SUDOKU_ADD_PENALTY, payload: seconds });
    },
    [sudokuState?.penalties, updateGameState]
  );

  const completeGame = useCallback(() => {
    if (sudokuState.endDate) {
      return;
    }

    onGameComplete({
      hints: sudokuState.hintsUsed,
      mistakes: sudokuState.mistakes,
      difficulty: SudokuDifficulty.Easy,
      adjustedTime: getDurationSeconds(new Date()),
      guesses: sudokuState.guesses,
    });
  }, [
    sudokuState.endDate,
    sudokuState.hintsUsed,
    sudokuState.mistakes,
    sudokuState.guesses,
    onGameComplete,
    getDurationSeconds,
  ]);

  const checkFinished = useCallback((): boolean => {
    const isFinished = isGameFinished();

    if (isFinished) {
      setTimeout(() => {
        completeGame();
        updateGameState("endTime", new Date());
        sudokuDispatch({ type: SUDOKU_END_GAME, payload: {} });
      });
    }

    return isFinished;
  }, [completeGame, isGameFinished, updateGameState]);

  const getQuadrantValues = useCallback(
    ({ row, column }: ISudokuPosition) => {
      // use row and column to get a 3x3 quadrant
      // return an array of the values in that quadrant
      const quadrantRowStart = Math.floor(row / 3) * 3;
      const quadrantColStart = Math.floor(column / 3) * 3;

      const quadrantRows: number[] = [];

      for (let i = quadrantRowStart; i < quadrantRowStart + 3; i++) {
        for (let j = quadrantColStart; j < quadrantColStart + 3; j++) {
          const value = getPosition({ row: i, column: j, boardType: SudokuBoardType.CURRENT });
          quadrantRows.push(value);
        }
      }

      return quadrantRows;
    },
    [getPosition]
  );

  const getRowValues = useCallback(
    (position: ISudokuPosition) => {
      const rowValues = Array.from({ length: SUDOKU_DIMENSIONS }).map((_, index) => {
        return getPosition({ row: position.row, column: index, boardType: SudokuBoardType.CURRENT });
      });

      return rowValues;
    },
    [getPosition]
  );

  const getColumnValues = useCallback(
    (position: ISudokuPosition) => {
      const columnValues = Array.from({ length: SUDOKU_DIMENSIONS }).map((_, index) => {
        return getPosition({ row: index, column: position.column, boardType: SudokuBoardType.CURRENT });
      });

      return columnValues;
    },
    [getPosition]
  );

  const possibleForNumberToBeInCell = useCallback(
    (position: ISudokuPosition, value: number) => {
      const rowValues = getRowValues(position);
      const colValues = getColumnValues(position);
      const quadrantValues = getQuadrantValues(position);

      const allValues = new Set([...rowValues, ...colValues, ...quadrantValues]);

      return !allValues.has(value);
    },
    [getColumnValues, getQuadrantValues, getRowValues]
  );

  /**
   * Test cheaters by checking if the value is possible in any empty cell in the row, column, or quadrant
   */
  const testCheaters = useCallback(
    (position: ISudokuPosition, value: number) => {
      if (!detectCheats) {
        return;
      }

      const isTouched = sudokuState.touched[getPositionHash(position)];

      if (isTouched) {
        return;
      }

      const rowValues = getRowValues(position);
      const columnValues = getColumnValues(position);

      const possibleInRow = [];
      const possibleInColumn = [];
      const possibleInQuadrant = [];
      for (let i = 0; i < 9; i++) {
        if (columnValues[i] === 0) {
          const pos = { column: position.column, row: i };
          if (possibleForNumberToBeInCell(pos, value)) {
            if (!sudokuState.touched[getPositionHash(pos)]) {
              possibleInRow.push(pos);
            }
          }
        }

        if (rowValues[i] === 0) {
          const pos = { column: i, row: position.row };
          if (possibleForNumberToBeInCell(pos, value)) {
            if (!sudokuState.touched[getPositionHash(pos)]) {
              possibleInColumn.push(pos);
            }
          }
        }
      }

      const quadrantRowStart = Math.floor(position.row / SUDOKU_QUADRANT_DIMENSIONS) * SUDOKU_QUADRANT_DIMENSIONS;
      const quadrantColStart = Math.floor(position.column / SUDOKU_QUADRANT_DIMENSIONS) * SUDOKU_QUADRANT_DIMENSIONS;
      for (let row = quadrantRowStart; row < quadrantRowStart + SUDOKU_QUADRANT_DIMENSIONS; row++) {
        for (let column = quadrantColStart; column < quadrantColStart + SUDOKU_QUADRANT_DIMENSIONS; column++) {
          const val = getPosition({ row, column: column, boardType: SudokuBoardType.CURRENT });
          if (val === 0) {
            const pos = { row, column };
            if (possibleForNumberToBeInCell(pos, value)) {
              if (!sudokuState.touched[getPositionHash(pos)]) {
                possibleInQuadrant.push(pos);
              }
            }
          }
        }
      }

      if (possibleInRow.length && possibleInColumn.length && possibleInQuadrant.length) {
        const possibleCells = Math.min(possibleInRow.length, possibleInColumn.length, possibleInQuadrant.length);
        const chance = 1 / possibleCells;
        if (chance < 1) {
          updateGameState("guesses", [...sudokuState.guesses, chance]);
          sudokuDispatch({ type: SUDOKU_ADD_GUESS, payload: chance });
        }
      }
    },
    [
      detectCheats,
      getColumnValues,
      getPosition,
      getRowValues,
      possibleForNumberToBeInCell,
      sudokuState?.guesses,
      sudokuState.touched,
      updateGameState,
    ]
  );

  const putNumber = useCallback(
    ({ row, column, number, antiCheat }: { number: number; antiCheat?: boolean } & ISudokuPosition) => {
      if (!sudokuState?.selectedCell) {
        sudokuDispatch({ type: SUDOKU_SELECT_NUMBER, payload: number });

        return;
      }

      const existsInitially = doesExistInitially({ row, column });
      if (existsInitially) {
        return;
      }

      const sameNumber = getPosition({ row, column, boardType: SudokuBoardType.CURRENT }) === number;
      if (sameNumber) {
        return;
      }

      const isOldCorrect =
        getPosition({ row, column, boardType: SudokuBoardType.ANSWER }) ===
        getPosition({ row, column, boardType: SudokuBoardType.CURRENT });

      if (isOldCorrect) {
        return;
      }

      const isWrong = isWrongNumber({ row, column, number });
      if (isWrong) {
        const newMistakes = sudokuState.mistakes + 1;

        updateGameState("mistakes", newMistakes);
        sudokuDispatch({
          type: SUDOKU_ADD_MISTAKE,
          payload: { mistakes: newMistakes },
        });

        if (newMistakes > config.MISTAKES_BEFORE_PENALTY) {
          addPenalty(config.MISTAKE_PENALTY_TIME);
        }

        updateHistory([...sudokuState.history, { row, column, number: sudokuState.board[row][column] }]);
      }

      if (!isWrong && antiCheat) {
        testCheaters({ row, column }, number);
      }

      sudokuState.board[row][column] = number;
      sudokuDispatch({ type: SUDOKU_SET_BOARD, payload: [...sudokuState.board] });
      sudokuDispatch({ type: SUDOKU_TOUCH, payload: getPositionHash({ row, column }) });

      sudokuState.cellStatuses[row][column].isWrong = isWrong;
      sudokuDispatch({ type: SUDOKU_SET_STATUSES, payload: sudokuState.cellStatuses });

      updateGameState("board", sudokuState.board);
      const isFinished = checkFinished();
      if (isFinished) {
        setSelectedCell(undefined);
      }
    },
    [
      sudokuState?.selectedCell,
      sudokuState.board,
      sudokuState.cellStatuses,
      sudokuState.mistakes,
      sudokuState.history,
      doesExistInitially,
      getPosition,
      isWrongNumber,
      updateGameState,
      checkFinished,
      config.MISTAKES_BEFORE_PENALTY,
      config.MISTAKE_PENALTY_TIME,
      updateHistory,
      addPenalty,
      testCheaters,
    ]
  );

  const getHint = useCallback(
    ({ row, column }: { number: number } & ISudokuPosition) => {
      if (row === undefined || column === undefined) {
        return;
      }

      const existsInitially = doesExistInitially({ row, column });
      if (existsInitially) {
        return;
      }

      const currentNumber = getPosition({ row, column, boardType: SudokuBoardType.CURRENT });
      const answer = getPosition({ row, column, boardType: SudokuBoardType.ANSWER });
      if (currentNumber === answer) {
        return;
      }

      addPenalty(config.PENALTY_HINT);
      sudokuDispatch({ type: SUDOKU_GET_HINT, payload: {} });
      updateGameState("hintsUsed", (sudokuState.hintsUsed || 0) + 1);
      updateGameState("lastHintTime", new Date());
      putNumber({ row, column, number: answer });
    },
    [
      doesExistInitially,
      getPosition,
      addPenalty,
      config.PENALTY_HINT,
      updateGameState,
      sudokuState.hintsUsed,
      putNumber,
    ]
  );

  const pause = useCallback(async () => {
    sudokuDispatch({ type: SUDOKU_PAUSE, payload: new Date() });
    updateGameState("lastPauseTime", new Date());

    if (onPause) {
      onPause();
    }
  }, [updateGameState, onPause]);

  const getTimeDifferenceSincePause = useCallback(
    (time: Date) => {
      return moment(time)
        .add(moment().diff(moment(sudokuState.lastPauseTime)), "millisecond")
        .toDate();
    },
    [sudokuState?.lastPauseTime]
  );

  const unpause = useCallback(() => {
    updateGameState("startTime", getTimeDifferenceSincePause(sudokuState.startTime));
    updateGameState("lastPauseTime", null);

    const startDifference = getTimeDifferenceSincePause(sudokuState.startTime);
    const lastHintDifference = getTimeDifferenceSincePause(sudokuState.lastHintTime);
    sudokuDispatch({
      type: SUDOKU_RESUME,
      payload: { newStartTime: startDifference, newLastHintTime: lastHintDifference },
    });

    if (onResume) {
      onResume();
    }
  }, [getTimeDifferenceSincePause, onResume, sudokuState.lastHintTime, sudokuState.startTime, updateGameState]);

  const handleAppStateChange = useCallback(
    (appState: AppStateStatus) => {
      if (
        (appState === "background" || appState === "inactive") &&
        !sudokuState.lastPauseTime &&
        !sudokuState.endDate
      ) {
        pause();
      }
    },
    [sudokuState.lastPauseTime, sudokuState.endDate, pause]
  );
  useAppState(handleAppStateChange);

  const setSelectedCell = useCallback(
    (position?: ISudokuPosition) => {
      if (sudokuState?.endDate) {
        return;
      }

      sudokuDispatch({ type: SUDOKU_SET_SELECTED_CELL, payload: position });
    },

    [sudokuState?.endDate]
  );

  const undo = useCallback(() => {
    const popHistory = () => {
      if (sudokuState.history.length === 0) {
        setSelectedCell(undefined);
        return;
      }

      const { number, row, column } = sudokuState.history.pop();
      const isCellCorrect =
        getPosition({ row, column, boardType: SudokuBoardType.ANSWER }) ===
        getPosition({ row, column, boardType: SudokuBoardType.CURRENT });

      if (isCellCorrect) {
        popHistory();
      } else {
        sudokuState.board[row][column] = number;
        updateGameState("board", sudokuState.board);
        sudokuDispatch({ type: SUDOKU_SET_BOARD, payload: [...sudokuState.board] });
        updateHistory([...sudokuState.history]);
      }
    };

    popHistory();
  }, [sudokuState.history, sudokuState.board, getPosition, setSelectedCell, updateGameState, updateHistory]);

  const sodukuContextValue = useMemo<ISudokuContext>(() => {
    return {
      config,
      undo,
      board: sudokuState.board,
      pause,
      getHint,
      history: sudokuState.history,
      unpause,
      endTime: sudokuState.endDate,
      mistakes: sudokuState.mistakes,
      guesses: sudokuState.guesses,
      selectedCell: sudokuState.selectedCell,
      selectedNumber: sudokuState.selectedNumber,
      putNumber,
      cellStatuses: sudokuState.cellStatuses,
      penalties: sudokuState.penalties,
      hintsUsed: sudokuState.hintsUsed,
      addPenalty,
      getPosition,
      isRowComplete,
      lastHintTime: sudokuState.lastHintTime,
      lastPauseTime: sudokuState.lastPauseTime,
      isWrongNumber,
      getDurationText,
      setSelectedCell,
      isNumberComplete,
      isColumnComplete,
      initialPenalties,
      initialBoard: initialBoard.puzzle,
    };
  }, [
    config,
    undo,
    sudokuState.board,
    sudokuState.history,
    sudokuState.endDate,
    sudokuState.mistakes,
    sudokuState.guesses,
    sudokuState.selectedCell,
    sudokuState.selectedNumber,
    sudokuState.cellStatuses,
    sudokuState.penalties,
    sudokuState.hintsUsed,
    sudokuState.lastHintTime,
    sudokuState.lastPauseTime,
    pause,
    getHint,
    unpause,
    putNumber,
    addPenalty,
    getPosition,
    isRowComplete,
    isWrongNumber,
    getDurationText,
    setSelectedCell,
    isNumberComplete,
    isColumnComplete,
    initialPenalties,
    initialBoard.puzzle,
  ]);

  return <SodukuContext value={sodukuContextValue}>{children}</SodukuContext>;
};

export default memo(SudokuManager, () => {
  // we never want this to rerender from a prop change
  return true;
});
