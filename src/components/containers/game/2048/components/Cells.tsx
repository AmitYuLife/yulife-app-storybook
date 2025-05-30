import { memo } from "react";
import { ZoomIn, ZoomOut } from "react-native-reanimated";
import { useGame2048Context } from "../gameContext";
import Cell from "./Cell";
import { ANIMATION_DURATION } from "../constants";
import { BoardCell, GameBoardSize } from "../game";
import { GameSkin } from "../types";
import { useCellSize } from "../hooks";

const enteringAnimation = ZoomIn.duration(ANIMATION_DURATION);
const exitingAnimation = ZoomOut.duration(ANIMATION_DURATION);

type CellsProps = {
  boardSize: GameBoardSize;
  skin: GameSkin;
};

type CellsDisplayProps = CellsProps & {
  board: BoardCell[];
  cellSize: number;
  margin?: number;
};

export const CellsDisplay = memo(({ skin, board, cellSize, margin }: CellsDisplayProps) => {
  return (
    <>
      {board.map(({ x, y, value, id }) => (
        <Cell
          key={id}
          x={x}
          y={y}
          cellWidth={cellSize}
          margin={margin}
          value={value}
          skin={skin}
          entering={enteringAnimation}
          exiting={exitingAnimation}
        />
      ))}
    </>
  );
});

const CellsWithContext = ({ boardSize, skin }: CellsProps) => {
  const { board } = useGame2048Context();
  const cellWidth = useCellSize(boardSize);

  return <CellsDisplay boardSize={boardSize} skin={skin} board={board} cellSize={cellWidth} />;
};

export default memo(CellsWithContext);
