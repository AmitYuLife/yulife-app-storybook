import React from "react";
import { Platform, StyleSheet, KeyboardAvoidingView } from "react-native";
import { GenericHeading } from "@atoms";
import { FIBProgressBar } from "@components/organisms";
import { Style } from "@styles";
import {
  FIB_ENTER_YOUR_NAME,
  FIB_ENTER_YOUR_DATE_OF_BIRTH,
} from "@components/containers/products/fib/data/underwriting-journey-data";

interface Props {
  heading: string;
  onNavigateBack: () => void;
  children: React.ReactNode;
  progressBar: {
    maxLength: number;
    currentPosition: number;
    isHidden: boolean;
  };
  activeScreenId?: string;
}

export function FibUnderwritingJourneyLayout(props: Props) {
  const { heading, onNavigateBack, children, activeScreenId, progressBar } = props;
  const iOSKeyboardBehavior = [FIB_ENTER_YOUR_NAME, FIB_ENTER_YOUR_DATE_OF_BIRTH].includes(activeScreenId)
    ? "height"
    : null;
  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ ios: iOSKeyboardBehavior, android: null })}
      style={styles.wrapper}
    >
      <GenericHeading heading={heading} rightIcon={{ icon: "CLOSE" }} onRightIconPress={onNavigateBack} isBeta={true} />
      {progressBar.isHidden ? null : <FIBProgressBar />}
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
