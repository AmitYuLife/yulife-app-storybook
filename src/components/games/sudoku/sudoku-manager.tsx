import { ReactNode, memo, useReducer, useCallback, useEffect, useMemo, useRef } from "react";
import { SudokuBoardType } from "./sudoku.enum";
import { ISodukuHistory, ISudokuPosition, ISudokuResults } from "./sudoku.interface";
import { ISudokuContext, SodukuContext } from "@screens/games/sudoku/sudoku-game/sudoku.context";
import moment from "moment";
import {
  SODUKU_PENALTY_HINT,
  SUDOKU_DIMENSIONS,
  SUDOKU_MISTAKES_BEFORE_PENALTY,
  SUDOKU_MISTAKE_PENALTY_TIME,
} from "@screens/games/sudoku/sudoku-game/sudoku.config";
import { ISodukuBoard } from "@screens/games/sudoku/sudoku-game/sudoku.container";
import { ISudokuStore } from "@redux/sudoku/sudoku.reducer";
import { SudokuDifficulty } from "@graphql/_core/schema/globalTypes";
import {
  SUDOKU_ADD_PENALTY,
  SUDOKU_END_GAME,
  SUDOKU_GET_HINT,
  SUDOKU_PAUSE,
  SUDOKU_RESUME,
  SUDOKU_SET_BOARD,
  SUDOKU_SET_HISTORY,
  SUDOKU_SET_MISTAKES,
  SUDOKU_SET_SELECTED_CELL,
  sudokuGameReducer,
} from "@components/games/sudoku/sudoku-game.reducer";

export interface ICompletedGame {
  hintsUsed: number;
  mistakes: number;
  startTime: Date;
  penalties: number[];
}

export interface ISudokuStateChangedArgs {
  key: keyof ISudokuStore;
  value: string | number | SudokuBoard | ISodukuHistory[] | number[] | Date;
}

interface IProps {
  children: ReactNode;
  onPause?: () => void;
  onResume?: () => void;
  initialBoard: ISodukuBoard;
  savedState?: ISudokuStore;
  gameIdentifier: string;
  onGameComplete: (data: ISudokuResults) => void;
  onStateUpdate?: (args: ISudokuStateChangedArgs) => void;
}

export type SudokuBoard = number[][];
const SudokuManager = ({
  initialBoard,
  onPause,
  onResume,
  savedState,
  children,
  onStateUpdate,
  onGameComplete,
}: IProps) => {
  const [sudokuState, sudokuDispatch] = useReducer(sudokuGameReducer, {
    endDate: undefined,
    selectedCell: undefined,
    history: savedState?.history ?? [],
    mistakes: savedState?.mistakes ?? 0,
    hintsUsed: savedState?.hintsUsed ?? 0,
    penalties: savedState?.penalties ?? [],
    startTime: savedState?.startTime ?? new Date(),
    lastHintTime: savedState?.lastHintTime ?? null,
    lastPauseTime: savedState?.lastPauseTime ?? null,
    board: [...(savedState?.board ?? initialBoard.puzzle)].map((row) => [...row]),
  });

  const updateGameState = useCallback(
    (key: keyof ISudokuStore, value: string | number | SudokuBoard | ISodukuHistory[] | number[] | Date) => {
      if (onStateUpdate) {
        onStateUpdate({ key, value });
      }
    },
    [onStateUpdate]
  );

  const { current: initialPenalties } = useRef(savedState?.penalties);

  useEffect(() => {
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
        return initialBoard.solution[row][column];
      }

      if (boardType === SudokuBoardType.INITIAL) {
        return initialBoard.puzzle[row][column];
      }

      return sudokuState.board[row][column];
    },
    [sudokuState.board, initialBoard]
  );

  const isWrongNumber = useCallback(
    ({ row, column, number }: ISudokuPosition & { number: number }): boolean => {
      const isInitial = getPosition({ row, column, boardType: SudokuBoardType.INITIAL }) !== 0;
      if (isInitial) {
        return false;
      }

      const correctAnswer = getPosition({ row, column, boardType: SudokuBoardType.ANSWER });
      if (number === 0) {
        return false;
      }

      return correctAnswer !== number;
    },
    [getPosition]
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
      difficulty: SudokuDifficulty.EASY,
      adjustedTime: getDurationSeconds(new Date()),
    });
  }, [onGameComplete, sudokuState.endDate, sudokuState.hintsUsed, sudokuState.mistakes, getDurationSeconds]);

  const checkFinished = useCallback(() => {
    const isFinished = isGameFinished();
    if (isFinished) {
      completeGame();
      sudokuDispatch({ type: SUDOKU_END_GAME, payload: {} });
      updateGameState("endTime", new Date());
    }
  }, [completeGame, isGameFinished, updateGameState]);

  const putNumber = useCallback(
    ({ row, column, number }: { number: number } & ISudokuPosition) => {
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
        sudokuDispatch({ type: SUDOKU_SET_MISTAKES, payload: newMistakes });

        if (newMistakes > SUDOKU_MISTAKES_BEFORE_PENALTY) {
          addPenalty(SUDOKU_MISTAKE_PENALTY_TIME);
        }

        updateHistory([...sudokuState.history, { row, column, number: sudokuState.board[row][column] }]);
      }

      sudokuState.board[row][column] = number;
      sudokuDispatch({ type: SUDOKU_SET_BOARD, payload: [...sudokuState.board] });
      updateGameState("board", sudokuState.board);
      checkFinished();
    },
    [
      doesExistInitially,
      getPosition,
      isWrongNumber,
      updateGameState,
      sudokuState.board,
      sudokuState.mistakes,
      sudokuState.history,
      checkFinished,
      updateHistory,
      addPenalty,
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

      addPenalty(SODUKU_PENALTY_HINT);
      sudokuDispatch({ type: SUDOKU_GET_HINT, payload: {} });
      updateGameState("hintsUsed", (sudokuState.hintsUsed || 0) + 1);
      updateGameState("lastHintTime", new Date());
      putNumber({ row, column, number: answer });
    },
    [doesExistInitially, getPosition, addPenalty, sudokuState.hintsUsed, updateGameState, putNumber]
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

  const setSelectedCell = useCallback((position: ISudokuPosition) => {
    sudokuDispatch({ type: SUDOKU_SET_SELECTED_CELL, payload: position });
  }, []);

  const undo = useCallback(() => {
    const popHistory = () => {
      if (sudokuState.history.length === 0) {
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
        setSelectedCell({ row, column });
      }
    };

    popHistory();
  }, [getPosition, updateGameState, setSelectedCell, sudokuState.board, sudokuState.history, updateHistory]);

  const sodukuContextValue = useMemo<ISudokuContext>(() => {
    return {
      undo,
      board: sudokuState.board,
      pause,
      getHint,
      history: sudokuState.history,
      unpause,
      endTime: sudokuState.endDate,
      mistakes: sudokuState.mistakes,
      selectedCell: sudokuState.selectedCell,
      putNumber,
      penalties: sudokuState.penalties,
      hintsUsed: sudokuState.hintsUsed,
      addPenalty,
      getPosition,
      isRowComplete,
      lastHintTime: sudokuState.lastHintTime,
      lastPauseTime: sudokuState.lastPauseTime,
      isWrongNumber,
      getDurationText,
      setSelectedCell: setSelectedCell,
      isNumberComplete,
      isColumnComplete,
      initialPenalties,
      initialBoard: initialBoard.puzzle,
    };
  }, [
    undo,
    sudokuState.board,
    sudokuState.history,
    sudokuState.endDate,
    sudokuState.mistakes,
    sudokuState.selectedCell,
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

  return <SodukuContext.Provider value={sodukuContextValue}>{children}</SodukuContext.Provider>;
};

export default memo(SudokuManager, () => {
  // we never want this to rerender from a prop change
  return true;
});
