import { useCallback, useState } from "react";
import { ANIMATION_DURATION } from "../constants";
import * as Haptics from "expo-haptics";
import { useDispatch } from "react-redux";
import { updateGame2048HighScore } from "@redux/game-2048/game-2048.actions";
import { showGameOverModal } from "../gameOver.modal";
import { showGameVictoryModal } from "../gameVictory.modal";
import { GameOptions } from "../gameContext";
import { Colours } from "@styles";

export type Direction = "up" | "down" | "left" | "right";
export type GameState = "inactive" | "active" | "failed" | "won";
export type GameMode = "normal" | "difficult" | "hard";
export type GameValue = 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048;

export type GameSkin = "numerical" | "symbols";
export type GameBoardSize = 4 | 5 | 6;

export type BoardCell = {
  id: string;
  value: GameValue;
  x: number;
  y: number;
};

export interface IGameConfig {
  finalScore: GameValue;
  mode: GameMode;
  boardSize: GameBoardSize;
  enableHaptics?: boolean;
  gameOptions?: GameOptions;
}

export const DEFAULT_GAME_CONFIG: IGameConfig = {
  finalScore: 1024,
  mode: "normal",
  boardSize: 4,
  enableHaptics: true,
  gameOptions: {
    timer: {
      enableMinutePulseAnimation: true,
      enableMinuteAdditionAnimation: true,
      enableMinuteHapticsImpact: true,
      displayColor: Colours.neutral.white,
    },
  },
};

class BoardFilled extends Error {
  constructor() {
    super();
    this.name = "BoardFilled";
    this.message = "Board has maxmimum number of cells possible";
  }
}

const BoardState: { board: BoardCell[]; score: number; moveNumber: number } = { board: [], score: 0, moveNumber: 0 };

const getCellsWithX = (x: number) => BoardState.board.filter((cell) => cell.x === x).sort((a, b) => a.y - b.y);
const getCellsWithY = (y: number) => BoardState.board.filter((cell) => cell.y === y).sort((a, b) => a.x - b.x);
// const getCellWithXY = (x: number, y: number) => Board.find((cell) => cell.x === x && cell.y === y);

const hasMoveAvailable = (boardSize: number) => {
  if (BoardState.board.length < boardSize * boardSize) {
    return true;
  }

  const boardMap: Map<number, Map<number, number>> = new Map(
    Array.from({ length: boardSize }).map((_, index) => [index, new Map()])
  );
  for (const cell of BoardState.board) {
    boardMap.get(cell.x)?.set(cell.y, cell.value);
  }

  for (let x = 0; x < boardSize; ++x) {
    for (let y = 0; y < boardSize; ++y) {
      const cellValue = boardMap.get(x)?.get(y);
      if (!cellValue) {
        return true;
      }

      if (x > 0 && boardMap.get(x - 1)?.get(y) === cellValue) {
        return true;
      }

      if (y > 0 && boardMap.get(x)?.get(y - 1) === cellValue) {
        return true;
      }
    }
  }

  return false;
};

const generateId = () => Math.floor(Math.random() * 1000000).toString();

const getRandomPosition = (boardSize: number) => {
  const allCells = new Set(
    Array.from({ length: boardSize * boardSize }, (_, index) => {
      const x = index % boardSize;
      const y = Math.floor(index / boardSize);
      return `${x},${y}`;
    })
  );

  BoardState.board.forEach((cell) => {
    allCells.delete(`${cell.x},${cell.y}`);
  });

  if (allCells.size === 0) {
    return null; // Board is fully populated
  }

  const unpopulatedCellsArray = Array.from(allCells);

  const randomPosition = unpopulatedCellsArray[Math.floor(Math.random() * unpopulatedCellsArray.length)];

  const [x, y] = randomPosition.split(",").map(Number);

  return { x, y };
};

const spawnCell = (boardSize: number, mode: GameMode): void => {
  const { x, y } = getRandomPosition(boardSize);

  const values: GameValue[] = mode === "normal" ? [2] : mode === "difficult" ? [2, 4] : [2, 4, 8];
  const index = Math.floor(Math.random() * values.length);
  const value = values[index];
  BoardState.board.push({
    id: generateId(),
    x,
    y,
    value,
  });
};

const removeCell = (cell: BoardCell) => {
  const index = BoardState.board.findIndex((c) => c === cell);
  if (index !== -1) {
    BoardState.board.splice(index, 1);
  }
};

const resetBoard = () => {
  BoardState.board.length = 0;
  BoardState.score = 0;
  BoardState.moveNumber = 0;
};

const startGame = (boardSize: number, mode: GameMode) => {
  resetBoard();
  spawnCell(boardSize, mode);
  spawnCell(boardSize, mode);
};

const logBoard = (boardSize: number) => {
  for (let x = 0; x < boardSize; ++x) {
    const line = getCellsWithX(x);
    const arr = new Array(boardSize).fill(0);
    line.forEach(({ y, value }) => (arr[y] = value));
  }
};

const move = (direction: Direction, boardSize: number, mode: GameMode, enableHaptics: boolean = false) => {
  const doubledCells: BoardCell[] = [];
  const removedCells: BoardCell[] = [];
  let hasMoveOccurred = false; // will change to true if any cell moves or merges

  if (!hasMoveAvailable(boardSize)) {
    throw new BoardFilled();
  }

  switch (direction) {
    case "left": {
      for (let x = 0; x < boardSize; ++x) {
        const line = getCellsWithX(x);
        let y = 0;
        line.forEach((cell, index) => {
          if (index === 0) {
            if (cell.y !== y) {
              hasMoveOccurred = true;
            }

            cell.y = y;
            y++;
            return;
          }

          const prevCell = line[index - 1];
          if (prevCell.value === cell.value && !removedCells.includes(prevCell) && !doubledCells.includes(prevCell)) {
            hasMoveOccurred = true;
            cell.value = (cell.value * 2) as GameValue;
            cell.x = prevCell.x;
            cell.y = prevCell.y;
            removedCells.push(prevCell);
            doubledCells.push(cell);
          } else {
            if (cell.y !== y) {
              hasMoveOccurred = true;
            }

            cell.y = y;
            y++;
          }
        });
      }

      break;
    }

    case "right": {
      for (let x = 0; x < boardSize; ++x) {
        const line = getCellsWithX(x).reverse();
        let y = boardSize - 1;
        line.forEach((cell, index) => {
          if (index === 0) {
            if (cell.y !== y) {
              hasMoveOccurred = true;
            }

            cell.y = y;
            y--;
            return;
          }

          const prevCell = line[index - 1];
          if (prevCell.value === cell.value && !removedCells.includes(prevCell) && !doubledCells.includes(prevCell)) {
            hasMoveOccurred = true;
            cell.value = (cell.value * 2) as GameValue;
            cell.x = prevCell.x;
            cell.y = prevCell.y;
            removedCells.push(prevCell);
            doubledCells.push(cell);
          } else {
            if (cell.y !== y) {
              hasMoveOccurred = true;
            }

            cell.y = y;
            y--;
          }
        });
      }

      break;
    }

    case "up": {
      for (let y = 0; y < boardSize; ++y) {
        const line = getCellsWithY(y);
        let x = 0;
        line.forEach((cell, index) => {
          if (index === 0) {
            if (cell.x !== x) {
              hasMoveOccurred = true;
            }

            cell.x = x;
            x++;
            return;
          }

          const prevCell = line[index - 1];
          if (prevCell.value === cell.value && !removedCells.includes(prevCell) && !doubledCells.includes(prevCell)) {
            hasMoveOccurred = true;
            cell.value = (cell.value * 2) as GameValue;
            cell.x = prevCell.x;
            cell.y = prevCell.y;
            removedCells.push(prevCell);
            doubledCells.push(cell);
          } else {
            if (cell.x !== x) {
              hasMoveOccurred = true;
            }

            cell.x = x;
            x++;
          }
        });
      }

      break;
    }

    case "down": {
      for (let y = 0; y < boardSize; ++y) {
        const line = getCellsWithY(y).reverse();
        let x = boardSize - 1;
        line.forEach((cell, index) => {
          if (index === 0) {
            if (cell.x !== x) {
              hasMoveOccurred = true;
            }

            cell.x = x;
            x--;
            return;
          }

          const prevCell = line[index - 1];
          if (prevCell.value === cell.value && !removedCells.includes(prevCell) && !doubledCells.includes(prevCell)) {
            hasMoveOccurred = true;
            cell.value = (cell.value * 2) as GameValue;
            cell.x = prevCell.x;
            cell.y = prevCell.y;
            removedCells.push(prevCell);
            doubledCells.push(cell);
          } else {
            if (cell.x !== x) {
              hasMoveOccurred = true;
            }

            cell.x = x;
            x--;
          }
        });
      }

      break;
    }
  }

  if (!hasMoveOccurred) {
    // No move possible, since moves can only happen if they have an effect on the game board. Return early.
    return;
  }

  if (enableHaptics && removedCells.length) {
    setTimeout(() => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }, ANIMATION_DURATION);
  }

  removedCells.forEach((cell) => removeCell(cell));
  BoardState.score += doubledCells.reduce((acc, cell) => acc + cell.value, 0);
  BoardState.moveNumber += 1;

  if (BoardState.board.length < boardSize * boardSize) {
    spawnCell(boardSize, mode);
  }
};

export const useGame = ({
  finalScore,
  mode,
  boardSize,
  enableHaptics: enableHapticsInitial,
  gameOptions,
}: IGameConfig) => {
  const dispatch = useDispatch();
  const [moveNumber, setMoveNumber] = useState(0);
  const [state, setState] = useState<GameState>("inactive");
  const [enableHaptics, setEnableHaptics] = useState(enableHapticsInitial);
  const [startTimestamp, setStartTimestamp] = useState<null | number>(null);
  const [endTimestamp, setEndTimestamp] = useState<null | number>(null);

  const memoizedStartGame = useCallback(() => {
    startGame(boardSize, mode);
    setMoveNumber(0);
    setState("active");
    setStartTimestamp(null);
    setEndTimestamp(null);
  }, [boardSize, mode]);

  const memoizedMove = useCallback(
    (direction: Direction) => {
      try {
        move(direction, boardSize, mode, enableHaptics);
        setStartTimestamp((prevState) => prevState || Date.now());
      } catch (err) {
        if (err instanceof BoardFilled) {
          setState("failed");
          setEndTimestamp(Date.now());
          showGameOverModal(memoizedStartGame);
          dispatch({ type: updateGame2048HighScore, payload: BoardState.score });
        } else {
          throw err;
        }
      }

      if (BoardState.board.findIndex((cell) => cell.value >= finalScore) !== -1) {
        setState("won");
        setEndTimestamp(Date.now());
        showGameVictoryModal(memoizedStartGame);
        dispatch({ type: updateGame2048HighScore, payload: BoardState.score });
      }

      setMoveNumber((prev) => prev + 1);
    },
    [boardSize, finalScore, mode, enableHaptics, memoizedStartGame]
  );

  const memoizedlogBoard = useCallback(() => {
    logBoard(boardSize);
  }, [boardSize]);

  return {
    board: BoardState.board,
    score: BoardState.score,
    move: memoizedMove,
    startGame: memoizedStartGame,
    logBoard: memoizedlogBoard,
    state,
    moveNumber,
    enableHaptics,
    setEnableHaptics,
    startTimestamp,
    endTimestamp,
    gameOptions,
  };
};
