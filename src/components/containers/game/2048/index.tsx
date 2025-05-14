import { Navigation } from "@navigation/main";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import React, { memo, useCallback, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { GameScreen } from "./components";
import { theme } from "./constants";
import { TextTemplate } from "@atoms";
import { t } from "@locale";
import { DEFAULT_GAME_CONFIG, GameBoardSize, GameMode, GameSkin, GameValue } from "./hooks";
import { Colours, Style } from "@styles";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { showGameIntroModal, ShowGameIntroModalProps } from "@containers/game/2048/gameIntro.modal";
import { usePressedInWithDelay } from "@hooks";
import { useCreateSduiActionDispatcher } from "@components/sdui/_hooks/useCreateSduiActionDispatcher";
import { VoidFunction } from "@utils";
import { SduiAction } from "@redux/user/user.types";

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
}

export const Game2048 = ({
  componentId,
  boardSize = DEFAULT_GAME_CONFIG.boardSize,
  finalScore = DEFAULT_GAME_CONFIG.finalScore,
  mode = DEFAULT_GAME_CONFIG.mode,
  enableHaptics = DEFAULT_GAME_CONFIG.enableHaptics,
  skin = "symbols",
  gameIntroModal,
}: IGame2048Props) => {
  const { createSduiActionDispatcher } = useCreateSduiActionDispatcher();

  const onDismiss = useCallback(() => {
    if (gameIntroModal?.onDismiss) {
      createSduiActionDispatcher(gameIntroModal.onDismiss)();
    }
  }, [createSduiActionDispatcher, gameIntroModal?.onDismiss]);

  const { handlePress: gameIntroModalSafeOnDismiss } = usePressedInWithDelay({ onPress: onDismiss, delay: 10000 });

  useEffect(() => {
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
        <ScrollView contentContainerStyle={styles.contentContainer} contentInsetAdjustmentBehavior="never">
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
            skin={skin}
            boardSize={boardSize}
            mode={mode}
            finalScore={finalScore}
            enableHaptics={enableHaptics}
          />
          <View style={styles.footerScrollPadding} />
        </ScrollView>
      </GestureHandlerRootView>
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
    justifyContent: "space-between",
  },
  header: {
    gap: Style.adjust(16),
    padding: Style.adjust(20),
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
