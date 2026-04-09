import { Ref, memo, ReactNode, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { GameState, useGame } from "./hooks";
import { Game2048Context } from "./gameContext";
import { GameBoardSize, GameMode, GameValue } from "./game";
import { showGameStateModal } from "./gameState.modal";
import { Game2048GameState, Game2048Options, Game2048StateModal, GameEarlyExitHandle, GameSkin } from "./types";
import { DEFAULT_GAME_STATE_MODALS } from "@containers/game/2048/constants";
import { completeGame2048 } from "@redux/game-2048/game-2048.actions";
import { useDispatch } from "react-redux";

interface IProps {
  children: ReactNode;
  finalScore: GameValue;
  mode: GameMode;
  boardSize: GameBoardSize;
  skin: GameSkin;
  enableHaptics?: boolean;
  gameOptions?: Game2048Options;
  ref?: Ref<GameEarlyExitHandle>;
}

const Game2048Manager = ({
  children,
  finalScore,
  mode,
  boardSize,
  skin,
  enableHaptics: enableHapticsInitial,
  gameOptions,
  ref,
}: IProps) => {
  const dispatch = useDispatch();

  const {
    gameId,
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
  } = useGame({
    finalScore,
    mode,
    boardSize,
    enableHaptics: enableHapticsInitial,
  });

  const toggleHaptics = useCallback(() => setEnableHaptics((haptics) => !haptics), []);
  const [isExiting, setIsExiting] = useState(false);

  const gameState = useMemo(
    () => ({
      gameId,
      board,
      skin,
      move,
      startGame,
      state,
      moveNumber,
      score,
      enableHaptics,
      toggleHaptics,
      startTimestamp,
      endTimestamp,
      isExiting,
      gameOptions,
    }),
    [
      gameId,
      board,
      skin,
      move,
      startGame,
      state,
      moveNumber,
      score,
      enableHaptics,
      toggleHaptics,
      startTimestamp,
      endTimestamp,
      isExiting,
      gameOptions,
    ]
  );

  const lastHandledStateRef = useRef<GameState | null>(null);

  useEffect(() => {
    lastHandledStateRef.current = null;
    setIsExiting(false);
  }, [gameId]);

  const showModal = useCallback(
    (modalProps: Game2048StateModal) => {
      showGameStateModal({
        board,
        skin,
        restartGame: startGame,
        ...modalProps,
      });
    },
    [moveNumber, board, skin, startGame]
  );

  const getSecondsElapsed = useCallback(() => {
    const timeElapsedMs = startTimestamp ? (endTimestamp || Date.now()) - startTimestamp : 0;
    return Math.floor(timeElapsedMs / 1000);
  }, [startTimestamp, endTimestamp]);

  const findModalToDisplay = useCallback(
    (game2048GameState: Game2048GameState) =>
      (gameOptions?.screens?.overlays || []).find((overlay) => {
        if (overlay.state !== game2048GameState) {
          return false;
        }

        const secondsElapsed = getSecondsElapsed();

        if (overlay.timer?.min && secondsElapsed < overlay.timer.min) {
          return false;
        }

        if (overlay.timer?.max && secondsElapsed > overlay.timer.max) {
          return false;
        }

        return true;
      }),
    [gameOptions?.screens?.overlays, startTimestamp, endTimestamp]
  );

  useEffect(() => {
    if (!["won", "failed"].includes(state) || state === lastHandledStateRef.current) {
      return;
    }

    dispatch(
      completeGame2048({
        boardSize,
        difficulty: mode,
        score,
        completedInSeconds: getSecondsElapsed(),
      })
    );

    lastHandledStateRef.current = state;

    const gameEndState = state === "won" ? Game2048GameState.Win : Game2048GameState.Lose;
    const modalProps = findModalToDisplay(gameEndState) || DEFAULT_GAME_STATE_MODALS[gameEndState];
    if (modalProps) {
      showModal(modalProps);
    }
  }, [state, gameId, findModalToDisplay, showModal, score, getSecondsElapsed, boardSize, mode]);

  const onEarlyExit = useCallback((): boolean => {
    const modalProps = findModalToDisplay(Game2048GameState.Exiting);

    if (modalProps) {
      setIsExiting(true);
      showModal(modalProps);
    }

    return !!modalProps;
  }, [findModalToDisplay, showModal]);

  useImperativeHandle(ref, () => ({
    onEarlyExit,
  }));

  return <Game2048Context value={gameState}>{children}</Game2048Context>;
};

export default memo(Game2048Manager);
