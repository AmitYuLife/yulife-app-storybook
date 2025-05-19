import { memo, useMemo } from "react";
import { useGame2048Context } from "../gameContext";
import Cell from "./Cell";
import { ZoomIn, ZoomOut } from "react-native-reanimated";
import { ANIMATION_DURATION } from "../constants";
import { GameBoardSize } from "../game";
import { GameSkin } from "../types";

interface IProps {
  boardSize: GameBoardSize;
  skin: GameSkin;
}

const Cells = ({ boardSize, skin }: IProps) => {
  const { board, moveNumber, state: gameState } = useGame2048Context();
  const cells = useMemo(
    () =>
      board.map(({ x, y, value, id }) => (
        <Cell
          x={x}
          y={y}
          value={value}
          skin={skin}
          key={id}
          boardSize={boardSize}
          entering={ZoomIn.duration(ANIMATION_DURATION)}
          exiting={ZoomOut.duration(ANIMATION_DURATION)}
        />
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [moveNumber, board, gameState]
  );
  return <>{cells}</>;
};

export default memo(Cells);
