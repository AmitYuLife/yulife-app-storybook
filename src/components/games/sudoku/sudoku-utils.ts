import moment from "moment";
import { ISudokuPosition } from "./sudoku.interface";
import { t } from "@locale";

export const getDuration = (seconds: number) => {
  const formatString = seconds > 60 * 60 ? t("format.duration_long") : t("format.duration");
  return moment.utc(seconds * 1000).format(formatString);
};

export const getPositionHash = (position: ISudokuPosition): string => {
  return `${position.row}-${position.column}`;
};
