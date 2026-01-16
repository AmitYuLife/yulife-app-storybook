import moment from "moment";
import { ISudokuPosition } from "./sudoku.interface";
import { t } from "@locale";

const SECONDS_IN_HOUR = 60 * 60;
const SECONDS_IN_DAY = SECONDS_IN_HOUR * 24;

export const getDuration = (seconds: number) => {
  if (seconds >= SECONDS_IN_DAY) {
    return moment.utc(seconds * 1000).format(t("format.duration_longer"));
  }

  if (seconds >= SECONDS_IN_HOUR) {
    return moment.utc(seconds * 1000).format(t("format.duration_long"));
  }

  return moment.utc(seconds * 1000).format(t("format.duration"));
};

export const getPositionHash = (position: ISudokuPosition): string => {
  return `${position.row}-${position.column}`;
};
