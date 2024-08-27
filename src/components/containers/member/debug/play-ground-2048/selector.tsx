import { Button, SelectInput, Switch } from "@components/molecules";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Image } from "expo-image";
import React, { memo, useCallback, useMemo, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { theme } from "./constants";
import { GameBoardSize, GameValue, GameMode, GameSkin } from "./hooks";
import { TextTemplate } from "@atoms";
import { BOARD_SIZE_INPUT, DIFFICULTY_INPUT, HAPTIC_TOGGLE, SKIN_INPUT, START_GAME_BUTTON, TARGET_SCORE_INPUT, YUNITY_SWIPE_SETTINGS } from "@ids";

const TITLE_IMG = require("./components/assets/yunity_swipe_title.png");

interface IPlayGroundSelectorProps {
  componentId: string;
}
export const PlayGroundSelector = ({ componentId }: IPlayGroundSelectorProps) => {
  const [mode, setMode] = useState<GameMode>("normal");
  const [boardSize, setBoardSize] = useState<GameBoardSize>(4);
  const [finalScore, setFinalScore] = useState<GameValue>(512);
  const [hapticsEnabled, setHapticsEnabled] = useState<boolean>(true);
  const [skin, setSkin] = useState<GameSkin>("symbols");

  const skins = useMemo(() => {
    const gameSkins: GameSkin[] = ["numerical", "symbols"];
    return gameSkins.map((gameSkin) => ({
      label: gameSkin,
      value: gameSkin,
      onPress: () => setSkin(gameSkin),
    }));
  }, []);

  const modes = useMemo(() => {
    const gameModes: GameMode[] = ["normal", "difficult", "hard"];
    return gameModes.map((gameMode) => ({
      label: gameMode,
      value: gameMode,
      onPress: () => setMode(gameMode),
    }));
  }, []);

  const boardSizes = useMemo(() => {
    const sizes: GameBoardSize[] = [4, 5, 6];
    return sizes.map((size) => ({
      label: size.toString(),
      value: size,
      onPress: () => setBoardSize(size),
    }));
  }, []);

  const finalScores = useMemo(() => {
    const scores: GameValue[] = [512, 1024, 2048];
    return scores.map((score) => ({
      label: score.toString(),
      value: score,
      onPress: () => setFinalScore(score),
    }));
  }, []);

  const startGame = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        id: ROUTES.debugPlayground2048,
        name: ROUTES.debugPlayground2048,
        passProps: {
          mode,
          boardSize,
          finalScore,
          enableHaptics: hapticsEnabled,
          skin,
        },
      },
    });
  }, [boardSize, componentId, finalScore, hapticsEnabled, mode, skin]);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <View style={styles.imageContainer}>
        <Image source={TITLE_IMG} style={styles.image} />
      </View>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer} testID={YUNITY_SWIPE_SETTINGS}>
        <TextTemplate type="b1b" color={"white"}>
          Skin
        </TextTemplate>
        <View style={styles.instructionsContainer} testID={SKIN_INPUT}>
          <SelectInput
            placeholder={skin}
            modalPlaceHolder={"Game Skin"}
            options={skins}
            onChange={(value) => setSkin(value as GameSkin)}
          />
        </View>
        <TextTemplate type="b1b" color={"white"}>
          Difficulty
        </TextTemplate>
        <View style={styles.instructionsContainer} testID={DIFFICULTY_INPUT}>
          <SelectInput
            placeholder={mode}
            modalPlaceHolder={"Game difficulty"}
            options={modes}
            onChange={(value) => setMode(value as GameMode)}
          />
        </View>
        <TextTemplate type="b1b" color={"white"}>
          Board Size{" "}
        </TextTemplate>
        <View style={styles.instructionsContainer} testID={BOARD_SIZE_INPUT}>
          <SelectInput
            placeholder={boardSize.toString()}
            modalPlaceHolder={"Board Size"}
            options={boardSizes}
            onChange={(value) => setBoardSize(value as GameBoardSize)}
          />
        </View>
        <TextTemplate type="b1b" color={"white"}>
          Target Score{" "}
        </TextTemplate>
        <View style={styles.instructionsContainer} testID={TARGET_SCORE_INPUT}>
          <SelectInput
            placeholder={finalScore.toString()}
            modalPlaceHolder={"Final Score"}
            options={finalScores}
            onChange={(value) => setFinalScore(value as GameValue)}
          />
        </View>
        <TextTemplate type="b1b" color={"white"} testID={HAPTIC_TOGGLE}>
          Haptics{" "}
        </TextTemplate>
        <View style={styles.instructionsContainer}>
          <Switch value={hapticsEnabled} onPress={() => setHapticsEnabled((enabled) => !enabled)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button testID={START_GAME_BUTTON} onPress={startGame} translatedLabel="Start Game" />
        </View>
      </ScrollView>
      <GenericHeadingAbsolute
        backgroundColor={theme.backgroundSecondary}
        logo="yulife"
        color="white"
        onLeftIconPress={() => Navigation.pop(componentId)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.backgroundSecondary,
    alignItems: "stretch",
    flexDirection: "column",
    padding: 0,
    margin: 0,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: 100,
    paddingVertical: 20,
  },
  instructionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  scrollView: {
    flex: 1,
    flexDirection: "column",
    padding: 0,
    margin: 0,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  highScoreIcon: {
    width: 16,
    height: 16,
  },
});

export default memo(PlayGroundSelector);
