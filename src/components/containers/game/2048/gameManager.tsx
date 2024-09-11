import { ReactNode, memo, useCallback, useMemo } from "react";
import { GameBoardSize, GameValue, GameMode, useGame } from "./hooks";
import { Game2048Context } from "./gameContext";
interface IProps {
  children: ReactNode;
  finalScore: GameValue;
  mode: GameMode;
  boardSize: GameBoardSize;
  enableHaptics?: boolean;
}

const Game2048Manager = ({ children, finalScore, mode, boardSize, enableHaptics: enableHapticsInitial }: IProps) => {
  const { logBoard, board, move, startGame, state, moveNumber, score, enableHaptics, setEnableHaptics } = useGame({
    finalScore,
    mode,
    boardSize,
    enableHaptics: enableHapticsInitial,
  });

  const toggleHaptics = useCallback(() => setEnableHaptics((haptics) => !haptics), []);

  const gameState = useMemo(
    () => ({ logBoard, board, move, startGame, state, moveNumber, score, enableHaptics, toggleHaptics }),
    [logBoard, board, move, startGame, state, moveNumber, score, enableHaptics, toggleHaptics]
  );
  return (
    <Game2048Context.Provider value={gameState}>{children}</Game2048Context.Provider> // Add the missing angle brackets around the JSX element
  );
};

export default memo(Game2048Manager);
