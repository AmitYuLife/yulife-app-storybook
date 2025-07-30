import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

export const BOARD_1 = {
  type: "mongo",
  modelName: "sudokuboards",
  data: {
    _id: generateRandomMongoId(),
    date: moment().format("YYYY-MM-DD"),
    difficulty: "easy",
    puzzle: [
      [5, 1, 8, 3, 6, 7, 9, 4, 2],
      [6, 2, 4, 5, 9, 8, 1, 3, 7],
      [3, 9, 7, 2, 1, 4, 6, 8, 5],
      [2, 5, 6, 8, 3, 1, 7, 9, 4],
      [7, 8, 9, 6, 4, 5, 3, 2, 1],
      [1, 4, 3, 7, 2, 9, 8, 5, 6],
      [4, 7, 1, 9, 8, 2, 5, 6, 3],
      [8, 3, 5, 4, 7, 6, 2, 1, 9],
      [9, 6, 2, 1, 5, 3, 0, 0, 0],
    ],
    solution: [
      [5, 1, 8, 3, 6, 7, 9, 4, 2],
      [6, 2, 4, 5, 9, 8, 1, 3, 7],
      [3, 9, 7, 2, 1, 4, 6, 8, 5],
      [2, 5, 6, 8, 3, 1, 7, 9, 4],
      [7, 8, 9, 6, 4, 5, 3, 2, 1],
      [1, 4, 3, 7, 2, 9, 8, 5, 6],
      [4, 7, 1, 9, 8, 2, 5, 6, 3],
      [8, 3, 5, 4, 7, 6, 2, 1, 9],
      [9, 6, 2, 1, 5, 3, 4, 7, 8],
    ],
  },
};
