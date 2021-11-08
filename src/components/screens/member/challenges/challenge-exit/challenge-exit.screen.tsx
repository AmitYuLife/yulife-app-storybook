import React from "react";
import { Button, SecondaryButton, TextTemplate } from "@atoms";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { getChallengeExitCopy } from "@redux/copy/copy.selectors";
import styles from "./challenge-exit.styles";
import { Colours } from "@styles";

interface IProps {
  onPressExit: () => void;
  onClose: () => void;
  isCancelling: boolean;
}

const ChallengeExitScreen: React.FC<IProps> = ({ onPressExit, onClose, isCancelling }) => {
  const copy = useSelector(getChallengeExitCopy);

  useBackHandler(() => {
    onClose();
    return true;
  });
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headingWrapper}>
        <TextTemplate type="h1" textAlign="center" color={Colours.textInput.focus}>
          {copy.heading}
        </TextTemplate>
      </View>
      <View style={styles.descriptionWrapper}>
        <TextTemplate type="b2" textAlign="center" color={Colours.textInput.focus}>
          {copy.subheading}
        </TextTemplate>
      </View>

      <Button
        wrapperStyle={StyleSheet.flatten([styles.buttonStyle, styles.exitChallengeWrapper])}
        label={copy.ctaLabelSecondary}
        onPress={onPressExit}
        isLoading={isCancelling}
      />
      <SecondaryButton wrapperStyle={styles.buttonStyle} label={copy.ctaLabel} onPress={onClose} />
    </SafeAreaView>
  );
};

export default ChallengeExitScreen;
