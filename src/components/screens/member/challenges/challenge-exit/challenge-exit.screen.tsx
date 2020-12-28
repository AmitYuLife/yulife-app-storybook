import { Button, Text } from "@atoms/index";
import { GetMobileCopy_getMobileCopy_screens_challenges_newExitChallenge } from "@graphql/_core/schema";
import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import styles from "./challenge-exit.styles";
import { useBackHandler } from "@services/hooks/useBackHandler";

interface IProps {
  copy: GetMobileCopy_getMobileCopy_screens_challenges_newExitChallenge;
  onPressExit: () => void;
  onClose: () => void;
  isCancelling: boolean;
}

const ChallengeExitScreen: React.FC<IProps> = ({ onPressExit, onClose, copy, isCancelling }) => {
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
      <Button
        wrapperStyle={styles.buttonStyle}
        type="Secondary"
        label={copy.ctaLabelSecondary}
        onPress={onPressExit}
        isLoading={isCancelling}
      />
    </SafeAreaView>
  );
};

export default ChallengeExitScreen;
