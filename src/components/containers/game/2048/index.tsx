/* eslint-disable react-compiler/react-compiler -- has other React ESLint rules disabled */
import { Navigation } from "@navigation/main";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import React, { memo, useCallback, useEffect, useMemo, useRef } from "react";
import { View } from "react-native";
import { GameScreen } from "./components";
import { DEFAULT_GAME_CONFIG, DEFAULT_GAME_OPTIONS, theme } from "./constants";
import { TextTemplate } from "@atoms";
import { t } from "@locale";
import { Colours, Style, StyleSheet } from "@styles";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { showGameIntroModal, ShowGameIntroModalProps } from "@containers/game/2048/gameIntro.modal";
import { usePressedInWithDelay } from "@hooks";
import { useCreateSduiActionDispatcher } from "@components/sdui/_hooks/useCreateSduiActionDispatcher";
import { VoidFunction } from "@utils";
import { SduiAction } from "@redux/user/user.types";
import { cloneDeep, mergeWith } from "lodash";
import { Game2048Options, GameEarlyExitHandle, GameSkin } from "./types";
import { GameBoardSize, GameMode, GameValue } from "./game";
import { useDispatch } from "react-redux";
import { fetchGame2048HighScore } from "@redux/game-2048/game-2048.actions";

interface IGame2048Props {
  componentId: string;
  boardSize?: GameBoardSize;
  finalScore?: GameValue;
  mode?: GameMode;
  enableHaptics?: boolean;
  skin?: GameSkin;
  gameIntroModal?: ShowGameIntroModalProps & {
    onDismiss?: SduiAction;
  };
  gameOptions?: Game2048Options;
}

export const Game2048 = ({
  componentId,
  boardSize = DEFAULT_GAME_CONFIG.boardSize,
  finalScore = DEFAULT_GAME_CONFIG.finalScore,
  mode = DEFAULT_GAME_CONFIG.mode,
  enableHaptics = DEFAULT_GAME_CONFIG.enableHaptics,
  skin = "symbols",
  gameIntroModal,
  gameOptions: gameOptionsParams,
}: IGame2048Props) => {
  "use no memo";
  const dispatch = useDispatch();
  const gameScreenRef = useRef<GameEarlyExitHandle>(null);

  const gameOptions = useMemo(
    () =>
      mergeWith(
        cloneDeep(gameOptionsParams || {}),
        DEFAULT_GAME_OPTIONS,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (oldVal: any) => (oldVal === false ? oldVal : undefined)
      ) as Game2048Options,
    [gameOptionsParams]
  );

  const { createSduiActionDispatcher } = useCreateSduiActionDispatcher();

  const onBackPress = useCallback(() => {
    const earlyExitHandled = gameScreenRef.current?.onEarlyExit?.();
    if (!earlyExitHandled) {
      Navigation.pop(componentId);
    }
  }, [componentId]);

  const onDismiss = useCallback(() => {
    if (gameIntroModal?.onDismiss) {
      createSduiActionDispatcher(gameIntroModal.onDismiss)();
    }
  }, [createSduiActionDispatcher, gameIntroModal?.onDismiss]);

  const { handlePress: gameIntroModalSafeOnDismiss } = usePressedInWithDelay({ onPress: onDismiss, delay: 10000 });

  useEffect(() => {
    dispatch(fetchGame2048HighScore({ boardSize, difficulty: mode }));

    if (!gameIntroModal) {
      return;
    }

    showGameIntroModal({
      ...gameIntroModal,
      onDismiss: gameIntroModalSafeOnDismiss as VoidFunction,
    });
    // Once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.wrapper}>
      <GestureHandlerRootView>
        <ScrollView
          bounces={false}
          contentContainerStyle={styles.contentContainer}
          contentInsetAdjustmentBehavior="never"
        >
          <GenericHeadingPad />
          <View style={styles.header}>
            <TextTemplate type="h3" textAlign="center" color={Colours.neutral.white}>
              {t("2048.title", { finalScore })}
            </TextTemplate>
            <TextTemplate type="b2" textAlign="center" color={Colours.neutral.white}>
              {t("2048.subtext", { finalScore })}
            </TextTemplate>
          </View>
          <GameScreen
            ref={gameScreenRef}
            skin={skin}
            boardSize={boardSize}
            mode={mode}
            finalScore={finalScore}
            enableHaptics={enableHaptics}
            gameOptions={gameOptions}
          />
          <View style={styles.footerScrollPadding} />
        </ScrollView>
      </GestureHandlerRootView>
      <GenericHeadingAbsolute
        backgroundColor={theme.backgroundSecondary}
        logo="yulife"
        color="white"
        onLeftIconPress={onBackPress}
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
    justifyContent: "space-between",
  },
  header: {
    gap: Style.adjust(8),
    paddingVertical: Style.adjust(16),
    paddingHorizontal: Style.adjust(24),
  },
  contentContainer: {
    flexGrow: 1,
  },
  // adds colour after the content to make overscroll prettier
  footerScrollPadding: {
    height: 1000,
    marginBottom: -1000,
    backgroundColor: theme.backgroundPrimary,
  },
});

export default memo(Game2048);
