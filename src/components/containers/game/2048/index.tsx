import { Navigation } from "@navigation/main";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import React, { memo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { GameScreen } from "./components";
import { theme } from "./constants";
import { TextTemplate } from "@atoms";
import { t } from "@locale";
import { GameBoardSize, GameValue, GameMode, GameSkin, DEFAULT_GAME_CONFIG } from "./hooks";
import { Colours, Style } from "@styles";

interface IPlayGroundProps {
  componentId: string;
  boardSize?: GameBoardSize;
  finalScore?: GameValue;
  mode?: GameMode;
  enableHaptics?: boolean;
  skin?: GameSkin;
}
export const PlayGround = ({
  componentId,
  boardSize = DEFAULT_GAME_CONFIG.boardSize,
  finalScore = DEFAULT_GAME_CONFIG.finalScore,
  mode = DEFAULT_GAME_CONFIG.mode,
  enableHaptics = DEFAULT_GAME_CONFIG.enableHaptics,
  skin = "symbols",
}: IPlayGroundProps) => {
  return (
    <View style={styles.wrapper}>
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

export default memo(PlayGround);
