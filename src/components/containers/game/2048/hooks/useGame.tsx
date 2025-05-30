import { useCallback, useState } from "react";
import * as Haptics from "expo-haptics";
import { BoardFilled, Direction, Game2048, GameBoardSize, GameMode, GameValue } from "../game";
import { ANIMATION_DURATION } from "../constants";
import uuid from "react-native-uuid";

export type GameState = "inactive" | "active" | "failed" | "won";

export interface IGameConfig {
  finalScore: GameValue;
  mode: GameMode;
  boardSize: GameBoardSize;
  enableHaptics?: boolean;
}

export const useGame = ({ finalScore, mode, boardSize, enableHaptics: enableHapticsInitial }: IGameConfig) => {
  const [gameInstance] = useState<Game2048>(new Game2048());
  const [gameId, setGameId] = useState<string>("");
  const [moveNumber, setMoveNumber] = useState(0);
  const [state, setState] = useState<GameState>("inactive");
  const [enableHaptics, setEnableHaptics] = useState(enableHapticsInitial);
  const [startTimestamp, setStartTimestamp] = useState<null | number>(null);
  const [endTimestamp, setEndTimestamp] = useState<null | number>(null);

  const memoizedStartGame = useCallback(() => {
    gameInstance.startGame(boardSize, mode);
    setGameId(uuid.v4().toString());
    setMoveNumber(0);
    setState("active");
    setStartTimestamp(null);
    setEndTimestamp(null);
  }, [gameInstance, boardSize, mode]);

  const memoizedMove = useCallback(
    (direction: Direction) => {
      try {
        const mergeHappened = gameInstance.move(direction);
        setStartTimestamp((prevState) => prevState || Date.now());

        if (enableHaptics && mergeHappened) {
          setTimeout(() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }, ANIMATION_DURATION);
        }
      } catch (err) {
        if (err instanceof BoardFilled) {
          setState("failed");
          setEndTimestamp(Date.now());
        } else {
          throw err;
        }
      }

      if (gameInstance.getBoard().findIndex((cell) => cell.value >= finalScore) !== -1) {
        setState("won");
        setEndTimestamp(Date.now());
      }

      setMoveNumber(gameInstance.getMoveNumber());
    },
    [gameInstance, enableHaptics, memoizedStartGame, finalScore]
  );

  return {
    gameId,
    board: gameInstance.getBoard(),
    score: gameInstance.getScore(),
    moveNumber,
    move: memoizedMove,
    startGame: memoizedStartGame,
    state,
    enableHaptics,
    setEnableHaptics,
    startTimestamp,
    endTimestamp,
  };
};
