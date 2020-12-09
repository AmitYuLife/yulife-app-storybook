import React, { ComponentProps } from "react";
import { Platform, StyleSheet, KeyboardAvoidingView, ViewStyle, View } from "react-native";
import { GenericHeading } from "@atoms";
import { FIBProgressBar } from "@components/organisms";
import { Yugi, YugiType } from "./yugi";
import { useBackHandler } from "@services/hooks/useBackHandler";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";

interface Props {
  heading?: string;
  onClose?: () => void;
  onPreviousQuestion?: () => void | null;
  children: React.ReactNode;
  hideProgressBar: boolean;
  yugi?: YugiType;
  centreLogo?: "yulife";
  wrapperStyle?: ViewStyle;
}

const RIGHT_ICON = { icon: "CLOSE" } as ComponentProps<typeof GenericHeading>["rightIcon"];

const keyboardBehavior = Platform.select({ ios: "padding" as "padding", android: null });

export function FibUnderwritingJourneyLayout(props: Props) {
  const {
    centreLogo,
    heading,
    onClose,
    onPreviousQuestion = null,
    children,
    hideProgressBar,
    yugi,
    wrapperStyle,
  } = props;

  useBackHandler(() => {
    onPreviousQuestion();
    return true;
  });

  return (
    <View style={StyleSheet.flatten([styles.wrapper, wrapperStyle])}>
      <GenericHeadingPad />
      <KeyboardAvoidingView behavior={keyboardBehavior} style={styles.kav}>
        <View style={styles.safeAreaView}>
          {hideProgressBar ? null : <FIBProgressBar />}
          {children}
          <Yugi yugi={yugi} />
        </View>
      </KeyboardAvoidingView>
      <GenericHeadingAbsolute
        heading={!centreLogo ? heading : null}
        logo={centreLogo}
        rightIcon={RIGHT_ICON}
        onLeftIconPress={onPreviousQuestion}
        onRightIconPress={onClose}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  kav: {
    flex: 1,
    height: "100%",
  } as ViewStyle,
  safeAreaView: {
    height: "100%",
    flex: 1,
  } as ViewStyle,
});
