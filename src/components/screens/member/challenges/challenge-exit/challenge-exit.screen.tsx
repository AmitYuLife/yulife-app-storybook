import React from "react";
import { TextTemplate } from "@atoms";
import { Button, SecondaryButton } from "@molecules";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { useBackHandler } from "@hooks";
import styles from "./challenge-exit.styles";
import { Colours } from "@styles";
import { t } from "@locale";

interface IProps {
  onPressExit: () => void;
  onClose: () => void;
  isCancelling: boolean;
}

const ChallengeExitScreen: React.FC<IProps> = ({ onPressExit, onClose, isCancelling }) => {
  useBackHandler(() => {
    onClose();
    return true;
  });
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headingWrapper}>
        <TextTemplate type="h1" textAlign="center" color={Colours.textInput.focus}>
          {t("modals.generic_modal.cancel_challenge.heading")}
        </TextTemplate>
      </View>
      <View style={styles.descriptionWrapper}>
        <TextTemplate type="b2" textAlign="center" color={Colours.textInput.focus}>
          {t("modals.generic_modal.cancel_challenge.subheading")}
        </TextTemplate>
      </View>

      <Button
        wrapperStyle={StyleSheet.flatten([styles.buttonStyle, styles.exitChallengeWrapper])}
        label={t("modals.generic_modal.cancel_challenge.cta_label")}
        onPress={onPressExit}
        isLoading={isCancelling}
      />
      <SecondaryButton
        wrapperStyle={styles.buttonStyle}
        label={t("labels.cta.cancel")}
        onPress={onClose}
      />
    </SafeAreaView>
  );
};

export default ChallengeExitScreen;
