import { memo } from "react";
import { ZoomIn, ZoomOut } from "react-native-reanimated";
import { useGame2048Context } from "../gameContext";
import Cell from "./Cell";
import { ANIMATION_DURATION } from "../constants";
import { GameBoardSize } from "../game";
import { GameSkin } from "../types";
import { useCellSize } from "../hooks";

const enteringAnimation = ZoomIn.duration(ANIMATION_DURATION);
const exitingAnimation = ZoomOut.duration(ANIMATION_DURATION);

interface IProps {
  boardSize: GameBoardSize;
  skin: GameSkin;
}

const Cells = ({ boardSize, skin }: IProps) => {
  const { board } = useGame2048Context();
  const cellWidth = useCellSize(boardSize);

  return (
    <>
      {board.map(({ x, y, value, id }) => (
        <Cell
          key={id}
          x={x}
          y={y}
          cellWidth={cellWidth}
          value={value}
          skin={skin}
          entering={enteringAnimation}
          exiting={exitingAnimation}
        />
      ))}
    </>
  );
};

export default memo(Cells);
