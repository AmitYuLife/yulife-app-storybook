import React from "react";
import { Platform, StyleSheet, KeyboardAvoidingView, SafeAreaView } from "react-native";
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
    isHidden: boolean;
  };
}

export function FibUnderwritingJourneyLayout(props: Props) {
  const { heading, onNavigateBack, children } = props;
  return (
    <KeyboardAvoidingView behavior={Platform.select({ ios: "padding", android: null })} style={styles.wrapper}>
      <SafeAreaView style={{ height: "100%" }}>
        <GenericHeading
          heading={heading}
          rightIcon={{ icon: "CLOSE" }}
          onRightIconPress={onNavigateBack}
          isBeta={true}
        />
        <FIBProgressBar />
        {children}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
    flex: 1,
    height: "100%",
    backgroundColor: "white",
  },
});
