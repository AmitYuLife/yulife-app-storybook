import { memo, ReactNode, useCallback, useMemo } from "react";
import { useGame } from "./hooks";
import { Game2048Context, GameOptions } from "./gameContext";
import { GameBoardSize, GameMode, GameValue } from "./game";

interface IProps {
  children: ReactNode;
  finalScore: GameValue;
  mode: GameMode;
  boardSize: GameBoardSize;
  enableHaptics?: boolean;
  gameOptions?: GameOptions;
}

const Game2048Manager = ({
  children,
  finalScore,
  mode,
  boardSize,
  enableHaptics: enableHapticsInitial,
  gameOptions: gameOptionsInitial,
}: IProps) => {
  const {
    board,
    move,
    startGame,
    state,
    moveNumber,
    score,
    enableHaptics,
    setEnableHaptics,
    startTimestamp,
    endTimestamp,
    gameOptions,
  } = useGame({
    finalScore,
    mode,
    boardSize,
    enableHaptics: enableHapticsInitial,
    gameOptions: gameOptionsInitial,
  });

  const toggleHaptics = useCallback(() => setEnableHaptics((haptics) => !haptics), []);

  const gameState = useMemo(
    () => ({
      board,
      move,
      startGame,
      state,
      moveNumber,
      score,
      enableHaptics,
      toggleHaptics,
      startTimestamp,
      endTimestamp,
      gameOptions,
    }),
    [
      board,
      move,
      startGame,
      state,
      moveNumber,
      score,
      enableHaptics,
      toggleHaptics,
      startTimestamp,
      endTimestamp,
      gameOptions,
    ]
  );
  return (
    <Game2048Context.Provider value={gameState}>{children}</Game2048Context.Provider> // Add the missing angle brackets around the JSX element
  );
};

export default memo(Game2048Manager);
