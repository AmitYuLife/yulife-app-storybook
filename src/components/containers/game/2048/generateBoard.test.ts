import { BoardCell, GameValue } from "./game";
import { ALL_GAME_VALUES, generatePreviewBoard } from "./generateBoard";
import { range, sampleSize } from "lodash";

/**
 * Display of [1, 2, 3, 4] in 2x2 board is:
 * [1] [2]
 * [3] [4]
 */

const PREDEFINED_BOARD = [4, 2, 2, 16];

describe("generateBoard", () => {
  it("should generate a predefined board if board is undefined", () => {
    const board = generateBoardInternalTest();
    expect(boardToCellValues(board)).toEqual(PREDEFINED_BOARD);
    expect(getBoardValidityError(board, 16)).toBeNull();
  });

  it("should generate a predefined board if board is empty", () => {
    const board = generateBoardInternalTest([]);
    expect(boardToCellValues(board)).toEqual(PREDEFINED_BOARD);
    expect(getBoardValidityError(board, 16)).toBeNull();
  });

  it("should generate a predefined board if board max value is 16 or lower", () => {
    const board = generateBoardInternalTest([16, 4, 2, 2, 4, 2]);
    expect(boardToCellValues(board)).toEqual(PREDEFINED_BOARD);
    expect(getBoardValidityError(board, 16)).toBeNull();
  });

  it("should generate a valid board", () => {
    const inputNumbers = [128, 16, 2, 4, 32, 2, 4, 16];
    const board = generateBoardInternalTest(inputNumbers);
    expect(getBoardValidityError(board, Math.max(...inputNumbers))).toBeNull();
  });

  range(10).forEach((_, idx) => {
    it(`should generate a valid board -- ${idx}`, () => {
      const inputNumbers = [...sampleSize(ALL_GAME_VALUES, 5), 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 8, 8, 8, 8];
      const board = generateBoardInternalTest(inputNumbers);
      expect(getBoardValidityError(board, Math.max(...inputNumbers))).toBeNull();
    });
  });
});

const getBoardValidityError = (board: BoardCell[], maxValue: number): string | null => {
  if (board.length !== 4) {
    return "Board has to have exactly 4 cells";
  }

  const cellValues = board.map((x) => x.value);

  // Has to have 1 max value
  if (cellValues.filter((x) => x === maxValue).length !== 1) {
    return "Board has more than 1 max value";
  }

  // Should not have a higher value
  const maxCellValue = Math.max(...cellValues);
  if (maxCellValue > maxValue) {
    return "Board has a max value higher than max value in the input";
  }

  const uniqueCellValues = new Set(cellValues);
  if (uniqueCellValues.size !== 3) {
    return "Board has to have exactly 3 unique cell values";
  }

  // Coordinates
  const positionsToCheck = [
    [0, 0, 1, 0], // {0, 0} and {1, 0}
    [0, 0, 0, 1], // {0, 0} and {0, 1}
    [1, 1, 0, 1], // {1, 1} and {1, 0}
    [1, 1, 1, 0], // {1, 1} and {0, 1}
  ];

  for (const [x, y, x1, y1] of positionsToCheck) {
    const cell1 = board.find((b) => b.x === x && b.y === y);
    const cell2 = board.find((b) => b.x === x1 && b.y === y1);

    if (!cell1) {
      return `Board does not have a cell in position: {${x}, ${y}`;
    }

    if (!cell2) {
      return `Board does not have a cell in position: {${x1}, ${y1}`;
    }

    if (cell1.value === cell2.value) {
      return `Board should have adjacent cells with same value. {${x}, ${y}} & {${x1}, ${y1} -- value=${cell1.value}}`;
    }
  }

  return null;
};

const generateBoardInternalTest = (boardCells?: number[]): BoardCell[] => {
  const board: BoardCell[] = boardCells ? boardCells.map((value) => ({ value } as BoardCell)) : undefined;
  return generatePreviewBoard(board);
};

const boardToCellValues = (board: BoardCell[]): GameValue[] => (board || []).map((x) => x.value);
