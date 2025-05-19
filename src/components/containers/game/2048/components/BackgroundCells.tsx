import React, { memo, useMemo } from "react";
import { BOARD_SIZE } from "../constants";
import BackgroundCell from "./BackgroundCell";
import { GameBoardSize } from "../game";

interface IProps {
  boardSize: GameBoardSize;
}
const BackgroundCells = ({ boardSize }: IProps) => {
  const backgroundCells = useMemo(() => {
    return new Array(BOARD_SIZE * BOARD_SIZE)
      .fill(0)
      .map((_, index) => <BackgroundCell boardSize={boardSize} key={index.toString()} />);
  }, []);

  return <>{backgroundCells}</>;
};

export default memo(BackgroundCells, () => true);
