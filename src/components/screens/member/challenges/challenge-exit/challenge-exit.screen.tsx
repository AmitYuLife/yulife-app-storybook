import React from "react";
import { Box, TextTemplate } from "@atoms";
import { Button, SecondaryButton } from "@molecules";
import { SafeAreaView, View } from "react-native";
import { useBackHandler } from "@hooks";
import styles from "./challenge-exit.styles";
import { Colours, StyleSheet } from "@styles";
import { t } from "@locale";
import { CANCEL_CANCEL_CHALLENGE } from "@ids";

interface IProps {
  onPressExit: () => void;
  onClose: () => void;
  challengeType?: string;
  isCancelling: boolean;
}

const ChallengeExitScreen: React.FC<IProps> = ({ onPressExit, challengeType, onClose, isCancelling }) => {
  useBackHandler(() => {
    onClose();
    return true;
  });

  return (
    <Box flex={1} bg={Colours.overlay.white90}>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.headingWrapper}>
          <TextTemplate type="h1" textAlign="center" color={Colours.textInput.focus}>
            {t("modals.generic_modal.cancel_challenge.heading")}
          </TextTemplate>
        </View>
        <View style={styles.descriptionWrapper}>
          <TextTemplate type="b2" textAlign="center" color={Colours.textInput.focus}>
            {challengeType === "sudoku"
              ? t("sudoku.cancel.message")
              : t("modals.generic_modal.cancel_challenge.subheading")}
          </TextTemplate>
        </View>

        <Button
          wrapperStyle={StyleSheet.flatten([styles.buttonStyle, styles.exitChallengeWrapper])}
          translationKey="modals.generic_modal.cancel_challenge.cta_label"
          onPress={onPressExit}
          isLoading={isCancelling}
        />
        <SecondaryButton
          wrapperStyle={styles.buttonStyle}
          translationKey="labels.cta.cancel"
          onPress={onClose}
          testID={CANCEL_CANCEL_CHALLENGE}
        />
      </SafeAreaView>
    </Box>
  );
};

export default ChallengeExitScreen;
