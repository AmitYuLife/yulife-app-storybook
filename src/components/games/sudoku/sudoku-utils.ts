import {
  SUDOKU_TIME_FORMAT,
  SUDOKU_TIME_FORMAT_LONG,
} from "@components/screens/games/sudoku/sudoku-game/sudoku.config";
import moment from "moment";

export const getDuration = (seconds: number) => {
  const formatString = seconds > 60 * 60 ? SUDOKU_TIME_FORMAT_LONG : SUDOKU_TIME_FORMAT;
  return moment.utc(seconds * 1000).format(formatString);
};
