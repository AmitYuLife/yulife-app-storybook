import React from "react";
import { Platform, StyleSheet, KeyboardAvoidingView } from "react-native";
import { GenericHeading } from "@atoms";
import { FIBProgressBar } from "@components/organisms";
import { Style } from "@styles";

interface Props {
  heading: string;
  onNavigateBack: () => void;
  children: React.ReactNode;
  progressBar: {
    maxLength: number;
    currentPosition: number;
  };
}

export function FibUnderwritingJourneyLayout(props: Props) {
  const { heading, onNavigateBack, children } = props;

  return (
    <KeyboardAvoidingView behavior={Platform.select({ ios: "height", android: null })} style={styles.wrapper}>
      <GenericHeading heading={heading} rightIcon={{ icon: "CLOSE" }} onRightIconPress={onNavigateBack} isBeta={true} />
      <FIBProgressBar />
      {children}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
    flex: 1,
  },
});
