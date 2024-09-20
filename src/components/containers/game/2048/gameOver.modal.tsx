import { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import { TextTemplate } from "@atoms";
import { Button, SecondaryButton } from "@molecules";
import { showFloatingModal } from "@modals";
import { Colours, Style } from "@styles";
import { VoidFunction } from "@utils";
import { t } from "@locale";

const RESTART_IMG = require("./components/assets/restart_icon.png");

interface IGameOverProps {
  restartGame: VoidFunction;
}

const GameOverModal = memo(({ restartGame }: IGameOverProps) => {
  const onPress = useCallback(() => {
    restartGame();
    Navigation.dismissOverlayWithChild();
  }, [restartGame]);

  const onSecondaryPress = useCallback(() => {
    Navigation.dismissOverlayWithChild();
    Navigation.pop(ROUTES.game2048);
  }, []);

  return (
    <View style={styles.container}>
      <TextTemplate type="h2"> {t("2048.lost.title")}</TextTemplate>
      <View style={styles.buttonContainer}>
        <Button
          leftIcon={<Image source={RESTART_IMG} style={styles.icon} />}
          translationKey="2048.restart"
          onPress={onPress}
        />
        <SecondaryButton
          translationKey="labels.cta.exit"
          onPress={onSecondaryPress}
          borderColor={Colours.neutral.white}
        />
      </View>
    </View>
  );
});

export const showGameOverModal = (restartGame: VoidFunction) => {
  showFloatingModal({
    modalId: MODALS.game2048GameOver,
    showButton: false,
    showCloseIcon: false,
    closeOnBlur: false,
    height: Style.adjust(280),
    paddingTop: Style.adjust(10),
    children: <GameOverModal restartGame={restartGame} />,
  });
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    padding: Style.adjust(24),
    gap: Style.adjust(24),
  },
  buttonContainer: {
    marginTop: "auto",
    gap: Style.adjust(8),
  },
  icon: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    tintColor: Colours.neutral.white,
  },
});
