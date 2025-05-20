import { useCallback, useState } from "react";
import * as Haptics from "expo-haptics";
import { useDispatch } from "react-redux";
import { updateGame2048HighScore } from "@redux/game-2048/game-2048.actions";
import { showGameOverModal } from "../gameOver.modal";
import { showGameVictoryModal } from "../gameVictory.modal";
import { GameOptions } from "../gameContext";
import { BoardFilled, Direction, Game2048, GameBoardSize, GameMode, GameValue } from "../game";
import { ANIMATION_DURATION } from "../constants";
import uuid from "react-native-uuid";

export type GameState = "inactive" | "active" | "failed" | "won";

export interface IGameConfig {
  finalScore: GameValue;
  mode: GameMode;
  boardSize: GameBoardSize;
  enableHaptics?: boolean;
  gameOptions?: GameOptions;
}

export const useGame = ({
  finalScore,
  mode,
  boardSize,
  enableHaptics: enableHapticsInitial,
  gameOptions,
}: IGameConfig) => {
  const [gameInstance] = useState<Game2048>(new Game2048());
  const [gameId, setGameId] = useState<string>("");
  const [moveNumber, setMoveNumber] = useState(0);
  const dispatch = useDispatch();
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
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          }, ANIMATION_DURATION);
        }
      } catch (err) {
        if (err instanceof BoardFilled) {
          setState("failed");
          setEndTimestamp(Date.now());
          showGameOverModal(memoizedStartGame);
          dispatch({ type: updateGame2048HighScore, payload: gameInstance.getScore() });
        } else {
          throw err;
        }
      }

      if (gameInstance.getBoard().findIndex((cell) => cell.value >= finalScore) !== -1) {
        setState("won");
        setEndTimestamp(Date.now());
        showGameVictoryModal(memoizedStartGame);
        dispatch({ type: updateGame2048HighScore, payload: gameInstance.getScore() });
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
    gameOptions,
  };
};
