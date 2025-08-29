import { Button, SelectInput, Switch } from "@components/molecules";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Image } from "expo-image";
import React, { memo, useCallback, useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import { DEFAULT_GAME_CONFIG, DEFAULT_GAME_STATE_MODALS, theme } from "./constants";
import { TextTemplate } from "@atoms";
import {
  BOARD_SIZE_INPUT,
  DIFFICULTY_INPUT,
  HAPTIC_TOGGLE,
  SKIN_INPUT,
  START_GAME_BUTTON,
  TARGET_SCORE_INPUT,
  YUNITY_SWIPE_SETTINGS,
} from "@ids";
import { t } from "@locale";
import { Style, StyleSheet } from "@styles";
import { GameBoardSize, GameMode, GameValue } from "./game";
import { GameSkin } from "./types";

const TITLE_IMG = require("./components/assets/yunity_swipe_title.png");

interface IPlayGroundSelectorProps {
  componentId: string;
}
export const PlayGroundSelector = ({ componentId }: IPlayGroundSelectorProps) => {
  const [mode, setMode] = useState<GameMode>(DEFAULT_GAME_CONFIG.mode);
  const [boardSize, setBoardSize] = useState<GameBoardSize>(DEFAULT_GAME_CONFIG.boardSize);
  const [finalScore, setFinalScore] = useState<GameValue>(DEFAULT_GAME_CONFIG.finalScore);
  const [hapticsEnabled, setHapticsEnabled] = useState<boolean>(DEFAULT_GAME_CONFIG.enableHaptics);
  const [skin, setSkin] = useState<GameSkin>("symbols");

  const skins = useMemo(() => {
    const gameSkins: GameSkin[] = ["numerical", "symbols"];
    return gameSkins.map((gameSkin) => ({
      label: t(`2048_selector.skin.options.${gameSkin}`),
      value: gameSkin,
      onPress: () => setSkin(gameSkin),
    }));
  }, []);

  const modes = useMemo(() => {
    const gameModes: GameMode[] = ["normal", "hard", "extreme"];
    return gameModes.map((gameMode) => ({
      label: t(`2048_selector.difficulty.options.${gameMode}`),
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
    const scores: GameValue[] = [256, 512, 1024, 2048];
    return scores.map((score) => ({
      label: score.toString(),
      value: score,
      onPress: () => setFinalScore(score),
    }));
  }, []);

  const startGame = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        id: ROUTES.game2048,
        name: ROUTES.game2048,
        passProps: {
          mode,
          boardSize,
          finalScore,
          enableHaptics: hapticsEnabled,
          skin,
          gameOptions: {
            screens: {
              overlays: Object.entries(DEFAULT_GAME_STATE_MODALS).map(([state, modalProps]) => ({
                state,
                ...modalProps,
              })),
            },
          },
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
      <ScrollView contentContainerStyle={styles.contentContainer} testID={YUNITY_SWIPE_SETTINGS}>
        <TextTemplate type="b1b" color={"white"}>
          {t("2048_selector.skin.label")}
        </TextTemplate>
        <View style={styles.instructionsContainer} testID={SKIN_INPUT}>
          <SelectInput
            placeholder={skin}
            modalPlaceHolder={t("2048_selector.skin.title")}
            options={skins}
            onChange={(value) => setSkin(value as GameSkin)}
          />
        </View>
        <TextTemplate type="b1b" color={"white"}>
          {t("2048_selector.difficulty.label")}
        </TextTemplate>
        <View style={styles.instructionsContainer} testID={DIFFICULTY_INPUT}>
          <SelectInput
            placeholder={mode}
            modalPlaceHolder={t("2048_selector.difficulty.title")}
            options={modes}
            onChange={(value) => setMode(value as GameMode)}
          />
        </View>
        <TextTemplate type="b1b" color={"white"}>
          {t("2048_selector.size")}
        </TextTemplate>
        <View style={styles.instructionsContainer} testID={BOARD_SIZE_INPUT}>
          <SelectInput
            placeholder={boardSize.toString()}
            modalPlaceHolder={t("2048_selector.size")}
            options={boardSizes}
            onChange={(value) => setBoardSize(value as GameBoardSize)}
          />
        </View>
        <TextTemplate type="b1b" color={"white"}>
          {t("2048_selector.final_score")}
        </TextTemplate>
        <View style={styles.instructionsContainer} testID={TARGET_SCORE_INPUT}>
          <SelectInput
            placeholder={finalScore.toString()}
            modalPlaceHolder={t("2048_selector.final_score")}
            options={finalScores}
            onChange={(value) => setFinalScore(value as GameValue)}
          />
        </View>
        <TextTemplate type="b1b" color={"white"} testID={HAPTIC_TOGGLE}>
          {t("2048_selector.haptics")}
        </TextTemplate>
        <View style={styles.instructionsContainer}>
          <Switch value={hapticsEnabled} onPress={() => setHapticsEnabled((enabled) => !enabled)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button testID={START_GAME_BUTTON} onPress={startGame} translationKey="2048_selector.start_game" />
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
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: Style.adjust(100),
    paddingVertical: Style.adjust(20),
  },
  instructionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: Style.adjust(20),
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
  contentContainer: {
    padding: Style.adjust(10),
  },
  highScoreIcon: {
    width: Style.adjust(16),
    height: Style.adjust(16),
  },
});

export default memo(PlayGroundSelector);
