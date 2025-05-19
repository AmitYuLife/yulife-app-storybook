import { memo, useEffect, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Counter, Switch } from "@components/molecules";
import { Colours, Style, templateTextStyles } from "@styles";
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
import { GameOptions, useGame2048Context } from "../gameContext";
import Game2048Manager from "../gameManager";
import { Direction, GameBoardSize, GameMode, GameSkin, GameValue } from "../hooks";
import Board from "./Board";
import { TextTemplate } from "@atoms";
import { HAPTIC_TOGGLE } from "@ids";
import { t } from "@locale";
import { useSelector } from "react-redux";
import { getGame2048HighScore } from "@redux/game-2048/game-2048.selectors";
import GameTimer from "./game-timer";

const RESTART_IMG = require("./assets/restart_icon.png");
const STAR_IMG = require("@assets/icons/star.png");

interface IGameScreenProps {
  boardSize: GameBoardSize;
  skin: GameSkin;
}

interface IGameScreenWithStateProps extends IGameScreenProps {
  mode: GameMode;
  finalScore: GameValue;
  enableHaptics?: boolean;
  gameOptions: GameOptions;
}

const GameScreenWithState = ({
  boardSize,
  mode,
  finalScore,
  enableHaptics,
  skin,
  gameOptions,
}: IGameScreenWithStateProps) => {
  return (
    <Game2048Manager
      boardSize={boardSize}
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState]);

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

  const currentScoreStyle = useMemo(
    () => ({
      ...styles.counter,
      color: highScore && score > highScore ? "#FFD600" : Colours.neutral.white,
    }),
    [score, highScore]
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
          <Counter duration={score === 0 ? 0 : 500} value={score || 0} textStyle={currentScoreStyle} />
        </View>
        {!highScore ? null : (
          <View style={styles.scoreItem}>
            <TextTemplate type="b2" color={Colours.secondary.s50S3}>
              {t("2048.high_score")}
            </TextTemplate>
            <View style={styles.starContainer}>
              <Image source={STAR_IMG} style={styles.starIcon} />
              <Counter duration={500} value={highScore} textStyle={styles.counter} />
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
              onPress={startGame}
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
  counter: {
    ...templateTextStyles.b2b,
    color: "#FFD600",
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
