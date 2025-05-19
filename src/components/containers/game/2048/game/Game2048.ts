import uuid from "react-native-uuid";
import { BoardCell, Direction, GameBoardSize, GameMode, GameValue } from "./types";
import { BoardFilled } from "./boardFilled.error";
import { SPAWN_WEIGHTS, SPAWN_WEIGHTS_4x4 } from "@containers/game/2048/game/constants";

export class Game2048 {
  private board: BoardCell[];
  private score: number;
  private moveNumber: number;

  private boardSize: number;
  private mode: GameMode;

  constructor() {
    this.resetBoard(0, "normal");
  }

  resetBoard(boardSize: number, mode: GameMode) {
    this.board = [];
    this.score = 0;
    this.moveNumber = 0;

    this.boardSize = boardSize;
    this.mode = mode;
  }

  startGame(boardSize: number, mode: GameMode) {
    this.resetBoard(boardSize, mode);
    this.spawnCell();
    this.spawnCell();
  }

  getCellsWithX(x: number) {
    return this.board.filter((cell) => cell.x === x).sort((a, b) => a.y - b.y);
  }

  getCellsWithY(y: number) {
    return this.board.filter((cell) => cell.y === y).sort((a, b) => a.x - b.x);
  }

  hasMoveAvailable() {
    if (this.board.length < this.boardSize * this.boardSize) {
      return true;
    }

    const boardMap: Map<number, Map<number, number>> = new Map(
      Array.from({ length: this.boardSize }).map((_, index) => [index, new Map()])
    );
    for (const cell of this.board) {
      boardMap.get(cell.x)?.set(cell.y, cell.value);
    }

    for (let x = 0; x < this.boardSize; ++x) {
      for (let y = 0; y < this.boardSize; ++y) {
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
  }

  getRandomPosition() {
    const allCells = new Set(
      Array.from({ length: this.boardSize * this.boardSize }, (_, index) => {
        const x = index % this.boardSize;
        const y = Math.floor(index / this.boardSize);
        return `${x},${y}`;
      })
    );

    this.board.forEach((cell) => {
      allCells.delete(`${cell.x},${cell.y}`);
    });

    if (allCells.size === 0) {
      return null; // Board is fully populated
    }

    const unpopulatedCellsArray = Array.from(allCells);

    const randomPosition = unpopulatedCellsArray[Math.floor(Math.random() * unpopulatedCellsArray.length)];

    const [x, y] = randomPosition.split(",").map(Number);

    return { x, y };
  }

  spawnCell() {
    const { x, y } = this.getRandomPosition();

    const spawnWeights = SPAWN_WEIGHTS[this.boardSize as GameBoardSize] || SPAWN_WEIGHTS_4x4;
    const values = spawnWeights[this.mode];
    const index = Math.floor(Math.random() * values.length);
    const value = values[index];

    this.board.push({
      id: uuid.v4().toString(),
      x,
      y,
      value,
    });
  }

  removeCell(cell: BoardCell) {
    const index = this.board.findIndex((c) => c === cell);
    if (index !== -1) {
      this.board.splice(index, 1);
    }
  }

  /**
   * @return true if any of the cells have been merged
   */
  move(direction: Direction): boolean {
    const doubledCells: BoardCell[] = [];
    const removedCells: BoardCell[] = [];
    let hasMoveOccurred = false; // will change to true if any cell moves or merges

    if (!this.hasMoveAvailable()) {
      throw new BoardFilled();
    }

    switch (direction) {
      case "left": {
        for (let x = 0; x < this.boardSize; ++x) {
          const line = this.getCellsWithX(x);
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
        for (let x = 0; x < this.boardSize; ++x) {
          const line = this.getCellsWithX(x).reverse();
          let y = this.boardSize - 1;
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
        for (let y = 0; y < this.boardSize; ++y) {
          const line = this.getCellsWithY(y);
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
        for (let y = 0; y < this.boardSize; ++y) {
          const line = this.getCellsWithY(y).reverse();
          let x = this.boardSize - 1;
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

    removedCells.forEach((cell) => this.removeCell(cell));
    this.score += doubledCells.reduce((acc, cell) => acc + cell.value, 0);
    this.moveNumber += 1;

    if (this.board.length < this.boardSize * this.boardSize) {
      this.spawnCell();
    }

    return removedCells.length > 0;
  }

  public getBoard(): BoardCell[] {
    return this.board;
  }

  public getScore(): number {
    return this.score;
  }

  public getMoveNumber(): number {
    return this.moveNumber;
  }
}
