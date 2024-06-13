import { useCallback, useState } from "react";
import { ANIMATION_DURATION } from "../constants";
import * as Haptics from "expo-haptics";

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
}

class BoardFilled extends Error {
  constructor() {
    super();
    this.name = "BoardFilled";
    this.message = "Board has maxmimum number of cells possible";
  }
}

const Board: BoardCell[] = [];

const getCellsWithX = (x: number) => Board.filter((cell) => cell.x === x).sort((a, b) => a.y - b.y);
const getCellsWithY = (y: number) => Board.filter((cell) => cell.y === y).sort((a, b) => a.x - b.x);
const getCellWithXY = (x: number, y: number) => Board.find((cell) => cell.x === x && cell.y === y);

const generateId = () => Math.floor(Math.random() * 1000000).toString();

const getRandomPosition = (boardSize: number) => ({
  x: Math.floor(Math.random() * boardSize),
  y: Math.floor(Math.random() * boardSize),
});

const spawnCell = (direction: Direction, boardSize: number, mode: GameMode): void => {
  if (Board.length === boardSize * boardSize) {
    throw new BoardFilled();
  }

  const { x, y } = getRandomPosition(boardSize);

  const cellWithPosition = getCellWithXY(x, y);

  if (cellWithPosition) {
    return spawnCell(direction, boardSize, mode);
  }

  const values: GameValue[] = mode === "normal" ? [2] : mode === "difficult" ? [2, 4] : [2, 4, 8];
  const index = Math.floor(Math.random() * values.length);
  const value = values[index];
  Board.push({
    id: generateId(),
    x,
    y,
    value,
  });
};

const removeCell = (cell: BoardCell) => {
  for (let i = 0; i < Board.length; ++i) {
    if (Board[i] === cell) {
      Board.splice(i, 1);
    }
  }
};

const resetBoard = () => {
  Board.length = 0;
};

const startGame = (boardSize: number, mode: GameMode) => {
  resetBoard();
  spawnCell("up", boardSize, mode);
  spawnCell("up", boardSize, mode);
};

const logBoard = (boardSize: number) => {
  for (let x = 0; x < boardSize; ++x) {
    const line = getCellsWithX(x);
    const arr = new Array(boardSize).fill(0);
    line.forEach(({ y, value }) => (arr[y] = value));
  }
};

const move = (direction: Direction, boardSize: number, mode: GameMode, enableHaptics: boolean = false) => {
  switch (direction) {
    case "left": {
      for (let x = 0; x < boardSize; ++x) {
        const line = getCellsWithX(x);
        let y = 0;
        const doubledCells: BoardCell[] = [];
        const removedCells: BoardCell[] = [];
        line.forEach((cell, index) => {
          if (index === 0) {
            cell.y = y;
            y++;

            return;
          }

          const prevCell = line[index - 1];
          if (prevCell.value === cell.value && !removedCells.includes(prevCell) && !doubledCells.includes(prevCell)) {
            cell.value = (cell.value * 2) as GameValue;
            cell.x = prevCell.x;
            cell.y = prevCell.y;
            removedCells.push(prevCell);
            doubledCells.push(cell);
          } else {
            cell.y = y;
            y++;
          }
        });

        if (enableHaptics && removedCells.length) {
          setTimeout(() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          }, ANIMATION_DURATION);
        }

        removedCells.forEach((cell) => removeCell(cell));
      }

      break;
    }

    case "right": {
      for (let x = 0; x < boardSize; ++x) {
        const line = getCellsWithX(x).reverse();
        let y = boardSize - 1;
        const doubledCells: BoardCell[] = [];
        const removedCells: BoardCell[] = [];
        line.forEach((cell, index) => {
          if (index === 0) {
            cell.y = y;
            y--;

            return;
          }

          const prevCell = line[index - 1];
          if (prevCell.value === cell.value && !removedCells.includes(prevCell) && !doubledCells.includes(prevCell)) {
            cell.value = (cell.value * 2) as GameValue;
            cell.x = prevCell.x;
            cell.y = prevCell.y;
            removedCells.push(prevCell);
            doubledCells.push(cell);
          } else {
            cell.y = y;
            y--;
          }
        });

        if (enableHaptics && removedCells.length) {
          setTimeout(() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          }, ANIMATION_DURATION);
        }

        removedCells.forEach((cell) => removeCell(cell));
      }

      break;
    }

    case "up": {
      for (let y = 0; y < boardSize; ++y) {
        const line = getCellsWithY(y);
        let x = 0;
        const doubledCells: BoardCell[] = [];
        const removedCells: BoardCell[] = [];
        line.forEach((cell, index) => {
          if (index === 0) {
            cell.x = x;
            x++;

            return;
          }

          const prevCell = line[index - 1];
          if (prevCell.value === cell.value && !removedCells.includes(prevCell) && !doubledCells.includes(prevCell)) {
            cell.value = (cell.value * 2) as GameValue;
            cell.x = prevCell.x;
            cell.y = prevCell.y;
            removedCells.push(prevCell);
            doubledCells.push(cell);
          } else {
            cell.x = x;
            x++;
          }
        });

        if (enableHaptics && removedCells.length) {
          setTimeout(() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          }, ANIMATION_DURATION);
        }

        removedCells.forEach((cell) => removeCell(cell));
      }

      break;
    }

    case "down": {
      for (let y = 0; y < boardSize; ++y) {
        const line = getCellsWithY(y).reverse();
        let x = boardSize - 1;
        const doubledCells: BoardCell[] = [];
        const removedCells: BoardCell[] = [];
        line.forEach((cell, index) => {
          if (index === 0) {
            cell.x = x;
            x--;

            return;
          }

          const prevCell = line[index - 1];
          if (prevCell.value === cell.value && !removedCells.includes(prevCell) && !doubledCells.includes(prevCell)) {
            cell.value = (cell.value * 2) as GameValue;
            cell.x = prevCell.x;
            cell.y = prevCell.y;
            removedCells.push(prevCell);
            doubledCells.push(cell);
          } else {
            cell.x = x;
            x--;
          }
        });

        if (enableHaptics && removedCells.length) {
          setTimeout(() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          }, ANIMATION_DURATION);
        }

        removedCells.forEach((cell) => removeCell(cell));
      }

      break;
    }
  }

  spawnCell(direction, boardSize, mode);
};

export const useGame = ({ finalScore, mode, boardSize, enableHaptics }: IGameConfig) => {
  const [moveNumber, setMoveNumber] = useState(0);
  const [state, setState] = useState<GameState>("inactive");

  const memoizedMove = useCallback(
    (direction: Direction) => {
      try {
        move(direction, boardSize, mode, enableHaptics);
      } catch (err) {
        if (err instanceof BoardFilled) {
          setState("failed");
        } else {
          console.error(err);
          throw err;
        }
      }

      if (Board.findIndex((cell) => cell.value >= finalScore) !== -1) {
        setState("won");
      }

      setMoveNumber((prev) => prev + 1);
    },
    [boardSize, finalScore, mode]
  );

  const memoizedStartGame = useCallback(() => {
    startGame(boardSize, mode);
    setMoveNumber(0);
    setState("active");
  }, [boardSize, mode]);

  const memoizedlogBoard = useCallback(() => {
    logBoard(boardSize);
  }, [boardSize]);

  return {
    board: Board,
    move: memoizedMove,
    startGame: memoizedStartGame,
    logBoard: memoizedlogBoard,
    state,
    moveNumber,
  };
};
