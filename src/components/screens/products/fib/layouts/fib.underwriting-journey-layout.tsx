import React from "react";
import { Platform, StyleSheet, KeyboardAvoidingView } from "react-native";
import { GenericHeading } from "@atoms";
import ProgressBar from "@components/molecules/progress-bar/progresss-bar";
import { Style } from "@styles";

interface Props {
  heading: string;
  onNavigateBack: () => void;
  children: React.ReactNode;
  progressBar?: {
    maxLength: number;
    currentPosition: number;
  };
}

export function FibUnderwritingJourneyLayout(props: Props) {
  const { heading, onNavigateBack, children, progressBar } = props;

  return (
    <KeyboardAvoidingView style={styles.wrapper}>
      <GenericHeading heading={heading} rightIcon={{ icon: "CLOSE" }} onRightIconPress={onNavigateBack} />
      <ProgressBar maxLength={progressBar.maxLength} currentPosition={progressBar.currentPosition} />
      {children}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
    height: "100%",
  },
});
