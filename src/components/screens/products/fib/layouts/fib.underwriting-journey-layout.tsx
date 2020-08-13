import React from "react";
import { Platform, StyleSheet, KeyboardAvoidingView } from "react-native";
import { GenericHeading } from "@atoms";
import ProgressBar from "@components/molecules/progress-bar/progresss-bar";
import { Style } from "@styles";

interface Props {
  heading: string;
  onNavigateBack: () => void;
  children: React.ReactNode;
}

export function FibUnderwritingJourneyLayout(props: Props) {
  const { heading, onNavigateBack, children } = props;

  return (
    <KeyboardAvoidingView style={styles.wrapper}>
      <GenericHeading heading={heading} rightIcon={{ icon: "CLOSE" }} onRightIconPress={onNavigateBack} />
      <ProgressBar maxLength={30} currentPosition={5} />
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
