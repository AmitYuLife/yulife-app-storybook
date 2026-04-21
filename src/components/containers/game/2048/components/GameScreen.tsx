import { Ref, memo, useCallback, useEffect, useMemo } from "react";
import { Alert, View } from "react-native";
import { Button, Counter, Switch } from "@components/molecules";
import { Colours, Style, StyleSheet } from "@styles";
import * as Haptics from "expo-haptics";
import { Image } from "expo-image";
import {
  Gesture,
  GestureDetector,
  GestureStateChangeEvent,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";
import { theme } from "../constants";
import { useGame2048Context } from "../gameContext";
import Game2048Manager from "../gameManager";
import Board from "./Board";
import { TextTemplate } from "@atoms";
import { HAPTIC_TOGGLE, SMOKING_GAME_HIGH_SCORE } from "@ids";
import { t } from "@locale";
import { useSelector } from "react-redux";
import { getGame2048HighScore } from "@redux/game-2048/game-2048.selectors";
import GameTimer from "./game-timer";
import { Direction, GameBoardSize, GameMode, GameValue } from "../game";
import { Game2048Options, GameEarlyExitHandle, GameSkin } from "../types";

const RESTART_IMG = require("./assets/restart_icon.png");
const STAR_IMG = require("@assets/icons/star.png");
const COUNTER_ANIMATION_SPEED = 500;

interface IGameScreenProps {
  boardSize: GameBoardSize;
  skin: GameSkin;
}

interface IGameScreenWithStateProps extends IGameScreenProps {
  mode: GameMode;
  finalScore: GameValue;
  enableHaptics?: boolean;
  gameOptions: Game2048Options;
  ref?: Ref<GameEarlyExitHandle>;
}

const GameScreenWithState = ({
  boardSize,
  mode,
  finalScore,
  enableHaptics,
  skin,
  gameOptions,
  ref,
}: IGameScreenWithStateProps) => {
  return (
    <Game2048Manager
      ref={ref}
      boardSize={boardSize}
      skin={skin}
      mode={mode}
      finalScore={finalScore}
      enableHaptics={enableHaptics}
      gameOptions={gameOptions}
    >
      <GameScreen skin={skin} boardSize={boardSize} />
    </Game2048Manager>
  );
};

const GameScreen = ({ boardSize, skin }: IGameScreenProps) => {
  const { move, startGame, state: gameState, score, enableHaptics, toggleHaptics, gameOptions } = useGame2048Context();
  const highScore = useSelector(getGame2048HighScore);

  useEffect(() => {
    if (gameState === "inactive") {
      startGame();
    }
  }, [gameState, startGame]);

  const restartGame = useCallback(() => {
    Alert.alert(
      t("2048.restart_dialog.title"),
      t("2048.restart_dialog.description"),
      [
        { text: t("2048.restart_dialog.no"), style: "cancel" },
        { text: t("2048.restart_dialog.yes"), style: "destructive", onPress: startGame },
      ],
      { cancelable: true }
    );
  }, [startGame]);

  const flingGesture = useMemo(
    () =>
      Gesture.Pan()
        .onBegin(() => {
          if (!enableHaptics) {
            return;
          }

          runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Light);
        })
        .onEnd((e: GestureStateChangeEvent<PanGestureHandlerEventPayload>) => {
          if (gameState !== "active") {
            return;
          }

          const absX = Math.abs(e.translationX);
          const absY = Math.abs(e.translationY);
          let direction: Direction;
          if (absX < absY) {
            if (e.translationY < 0) {
              direction = "up";
            } else {
              direction = "down";
            }
          } else {
            if (e.translationX < 0) {
              direction = "left";
            } else {
              direction = "right";
            }
          }

          runOnJS(move)(direction);
        }),
    [enableHaptics, gameState, move]
  );

  const timerOptions = useMemo(
    () => ({
      ...(gameOptions?.timer || {}),
      enableMinuteHapticsImpact: Boolean(enableHaptics && gameOptions?.timer?.enableMinuteHapticsImpact),
    }),
    [gameOptions?.timer, enableHaptics]
  );

  return (
    <>
      <View style={styles.scores}>
        <View style={styles.scoreItem}>
          <TextTemplate type="b2" color={Colours.secondary.s50S3}>
            {t("2048.current_score")}
          </TextTemplate>
          <Counter
            duration={score === 0 ? 0 : COUNTER_ANIMATION_SPEED}
            value={score || 0}
            type="b2b"
            color={highScore && score > highScore ? Colours.yellow.y100 : Colours.neutral.white}
          />
        </View>
        {!highScore ? null : (
          <View style={styles.scoreItem}>
            <TextTemplate type="b2" color={Colours.secondary.s50S3}>
              {t("2048.high_score")}
            </TextTemplate>
            <View style={styles.starContainer}>
              <Image source={STAR_IMG} style={styles.starIcon} />
              <Counter
                duration={COUNTER_ANIMATION_SPEED}
                value={highScore}
                type="b2b"
                color={Colours.yellow.y100}
                testIDFn={SMOKING_GAME_HIGH_SCORE}
              />
            </View>
          </View>
        )}
        <View style={styles.scoreItem}>
          <TextTemplate type="b2" color={Colours.secondary.s50S3}>
            {t("2048.time")}
          </TextTemplate>
          <GameTimer options={timerOptions} />
        </View>
      </View>
      <GestureDetector gesture={flingGesture}>
        <View style={styles.container}>
          <Board skin={skin} boardSize={boardSize} />
          <View style={styles.buttonContainer}>
            <Button
              leftIcon={<Image source={RESTART_IMG} style={styles.restartIcon} />}
              backgroundColor={Colours.neutral.white}
              textColor={Colours.neutral.n800}
              borderColor={Colours.neutral.white}
              shadowColor={Colours.neutral.n300}
              translationKey="2048.restart"
              onPress={restartGame}
              size="Fill"
            />
            <View style={styles.switch}>
              <TextTemplate type="b2b" color={Colours.neutral.white} testID={HAPTIC_TOGGLE}>
                {t("2048.vibration")}
              </TextTemplate>
              <Switch value={enableHaptics} onPress={toggleHaptics} />
            </View>
          </View>
        </View>
      </GestureDetector>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: theme.backgroundPrimary,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    margin: 0,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  scores: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: Style.adjust(24),
    paddingHorizontal: Style.adjust(24),
    paddingBottom: Style.adjust(24),
  },
  scoreItem: {
    flex: 1,
    width: "auto",
    height: Style.adjust(44),
    alignItems: "center",
  },
  starContainer: {
    flexDirection: "row",
    gap: Style.adjust(4),
  },
  starIcon: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    marginTop: Style.adjust(2),
  },
  buttonContainer: {
    padding: Style.adjust(16),
    alignItems: "flex-end",
    gap: Style.adjust(16),
  },
  restartIcon: {
    width: Style.adjust(32),
    height: Style.adjust(32),
    tintColor: "black",
  },
  switch: {
    flexDirection: "row",
    alignItems: "center",
    gap: Style.adjust(16),
  },
});

export default memo(GameScreenWithState);
