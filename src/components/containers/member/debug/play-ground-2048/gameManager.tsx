import { ReactNode, memo, useMemo } from "react";
import { GameBoardSize, GameValue, GameMode, useGame } from "./hooks";
import { Game2048Context } from "./gameContext";
interface IProps {
  children: ReactNode;
  finalScore: GameValue;
  mode: GameMode;
  boardSize: GameBoardSize;
  enableHaptics?: boolean;
}

const Game2048Manager = ({ children, finalScore, mode, boardSize, enableHaptics }: IProps) => {
  const { logBoard, board, move, startGame, state, moveNumber } = useGame({
    finalScore,
    mode,
    boardSize,
    enableHaptics,
  });
  const gameState = useMemo(
    () => ({ logBoard, board, move, startGame, state, moveNumber }),
    [logBoard, board, move, startGame, state, moveNumber]
  );
  return (
    <Game2048Context.Provider value={gameState}>{children}</Game2048Context.Provider> // Add the missing angle brackets around the JSX element
  );
};

export default memo(Game2048Manager);
