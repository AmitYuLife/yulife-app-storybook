import { Button } from "@components/molecules";
import { Colours } from "@styles";
import * as Haptics from "expo-haptics";
import { Image } from "expo-image";
import React, { memo, useEffect, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  GestureStateChangeEvent,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";
import { theme } from "../constants";
import { useGame2048Context } from "../gameContext";
import Game2048Manager from "../gameManager";
import { Direction, GameBoardSize, GameValue, GameMode, GameSkin } from "../hooks";
import Board from "./Board";
import GameInfoScreen from "./GameInfoScreen";

const RESTART_IMG = require("./assets/restart_icon.png");

interface IGameScreenProps {
  boardSize: GameBoardSize;
  enableHaptics?: boolean;
  skin: GameSkin;
}

interface IGameScreenWithStateProps {
  boardSize: GameBoardSize;
  mode: GameMode;
  finalScore: GameValue;
  enableHaptics?: boolean;
  skin: GameSkin;
}

const GameScreenWithState = ({ boardSize, mode, finalScore, enableHaptics, skin }: IGameScreenWithStateProps) => {
  return (
    <Game2048Manager boardSize={boardSize} mode={mode} finalScore={finalScore} enableHaptics={enableHaptics}>
      <GameScreen skin={skin} boardSize={boardSize} enableHaptics={enableHaptics} />
    </Game2048Manager>
  );
};

const GameScreen = ({ boardSize, enableHaptics, skin }: IGameScreenProps) => {
  const { move, startGame, state: gameState } = useGame2048Context();

  useEffect(() => {
    if (gameState === "inactive") {
      startGame();
    }
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
  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={flingGesture}>
        <View style={styles.container}>
          <Board skin={skin} boardSize={boardSize} />
          <Button
            leftIcon={<Image source={RESTART_IMG} style={styles.icon} />}
            backgroundColor={Colours.neutral.white}
            textColor={Colours.neutral.n800}
            borderColor={Colours.neutral.white}
            shadowColor={Colours.neutral.n300}
            translationKey="2048.restart"
            onPress={startGame}
          />

          <GameInfoScreen />
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
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
  icon: {
    width: 32,
    height: 32,
    tintColor: "black",
  },
});

export default memo(GameScreenWithState);
