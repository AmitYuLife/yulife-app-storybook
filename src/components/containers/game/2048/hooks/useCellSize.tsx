import { useWindowDimensions } from "react-native";
import { BOARD_WIDTH_MULTIPLIER, MARGIN } from "../constants";
import { GameBoardSize } from "../game";

export const useCellSize = (boardSize: GameBoardSize) => {
  const { width } = useWindowDimensions();

  const boardWidth = width * BOARD_WIDTH_MULTIPLIER;

  const cellWidth = (boardWidth - 2 * MARGIN) / boardSize - 2 * MARGIN;

  return cellWidth;
};
