import React from "react";
import { Platform, StyleSheet, KeyboardAvoidingView, SafeAreaView, View, ViewStyle } from "react-native";
import { GenericHeading } from "@atoms";
import { FIBProgressBar } from "@components/organisms";
import { Style } from "@styles";
import { YugiSvg } from "./assets/yugi-svg";

interface Props {
  heading: string;
  onClose?: () => void;
  onPreviousQuestion?: () => void | null;
  children: React.ReactNode;
  hideHeadingBorder?: boolean;
  progressBar: {
    maxLength: number;
    currentPosition: number;
    isHidden: boolean;
  };
}

export function FibUnderwritingJourneyLayout(props: Props) {
  const { heading, onClose, onPreviousQuestion = null, children, progressBar, hideHeadingBorder } = props;
  return (
    <KeyboardAvoidingView behavior={Platform.select({ ios: "padding", android: null })} style={styles.wrapper}>
      <SafeAreaView style={{ height: "100%", flex: 1 }}>
        <GenericHeading
          heading={heading}
          rightIcon={{ icon: "CLOSE" }}
          onLeftIconPress={onPreviousQuestion}
          onRightIconPress={onClose}
          isBeta={true}
          hideBorder={hideHeadingBorder ?? true}
        />
        {progressBar.isHidden ? null : <FIBProgressBar />}
        {children}
        <View style={styles.yugiWrapper}>
          <YugiSvg />
        </View>
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
  yugiWrapper: {
    position: "absolute",
    top: Style.adjust(120),
    right: 0,
  } as ViewStyle,
});
