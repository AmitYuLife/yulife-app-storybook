import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Image } from "expo-image";
import React, { memo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { GameScreen } from "./components";
import { theme } from "./constants";
import { TextTemplate } from "@atoms";
import { t } from "@locale";
import { GameBoardSize, GameValue, GameMode, GameSkin } from "./hooks";

const TITLE_IMG = require("./components/assets/yunity_swipe_title.png");

interface IPlayGroundProps {
  componentId: string;
  boardSize: GameBoardSize;
  finalScore: GameValue;
  mode: GameMode;
  enableHaptics: boolean;
  skin: GameSkin;
}
export const PlayGround = ({ boardSize, finalScore, mode, enableHaptics, skin }: IPlayGroundProps) => {
  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <View style={styles.imageContainer}>
        <Image source={TITLE_IMG} style={styles.image} />
      </View>
      <View style={styles.instructionsContainer}>
        <TextTemplate type="b1b" textAlign="center">
          {t("2048.instructions")}
        </TextTemplate>
      </View>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <GameScreen
          skin={skin}
          boardSize={boardSize}
          mode={mode}
          finalScore={finalScore}
          enableHaptics={enableHaptics}
        />
      </ScrollView>
      <GenericHeadingAbsolute
        backgroundColor={theme.backgroundSecondary}
        logo="yulife"
        color="white"
        onLeftIconPress={() => Navigation.pop(ROUTES.debug)}
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
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: 100,
    paddingVertical: 20,
  },
  instructionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: 80,
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
    padding: 0,
    margin: 0,
  },
  highScoreIcon: {
    width: 16,
    height: 16,
  },
});

export default memo(PlayGround);
