import { Button, SecondaryButton, Text } from "@atoms/index";
import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { getChallengeExitCopy } from "@redux/copy/copy.selectors";
import styles from "./challenge-exit.styles";

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
      <Text style={styles.headingText} bold={true}>
        {copy.heading}
      </Text>
      <Text style={styles.descriptionText}>{copy.subheading}</Text>

      <Button
        wrapperStyle={StyleSheet.flatten([styles.buttonStyle, styles.exitChallengeWrapper])}
        type="Primary"
        label={copy.ctaLabel}
        onPress={onClose}
      />
      <SecondaryButton
        wrapperStyle={styles.buttonStyle}
        label={copy.ctaLabelSecondary}
        onPress={onPressExit}
        isLoading={isCancelling}
      />
    </SafeAreaView>
  );
};

export default ChallengeExitScreen;
