import { TextTemplate } from "@atoms";
import { Button } from "@components/molecules";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useGame2048Context } from "../gameContext";
import Modal from "./Modal";
import { t } from "@locale";
import { Colours, Style } from "@styles";

const RESTART_IMG = require("./assets/restart_icon.png");

const GameInfoScreen = () => {
  const { startGame, state: gameState } = useGame2048Context();

  if (gameState === "active") {
    return null;
  }

  return (
    <Modal>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          {gameState !== "won" ? null : <TextTemplate type="h2">{t("2048.victory.title")}</TextTemplate>}
          {gameState !== "failed" ? null : <TextTemplate type="h2"> {t("2048.lost.title")}</TextTemplate>}
        </View>
        <View style={styles.subTitleContainer}>
          {gameState !== "won" ? null : <TextTemplate type="b2">{t("2048.victory.info")}</TextTemplate>}
          {gameState !== "failed" ? null : <TextTemplate type="b2"> {t("2048.lost.info")}</TextTemplate>}
        </View>
        <View style={styles.buttonContainer}>
          <Button
            leftIcon={<Image source={RESTART_IMG} style={styles.icon} />}
            translationKey="2048.restart"
            onPress={startGame}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  titleContainer: {
    paddingVertical: Style.adjust(20),
  },
  subTitleContainer: {
    paddingVertical: Style.adjust(20),
  },
  buttonContainer: {
    paddingVertical: Style.adjust(20),
  },
  icon: {
    width: Style.adjust(32),
    height: Style.adjust(32),
    tintColor: Colours.neutral.white,
  },
});

export default GameInfoScreen;
