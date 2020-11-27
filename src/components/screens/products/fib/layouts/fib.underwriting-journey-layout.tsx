import React, { ComponentProps } from "react";
import { Platform, StyleSheet, KeyboardAvoidingView, SafeAreaView, ViewStyle } from "react-native";
import { GenericHeading } from "@atoms";
import { FIBProgressBar } from "@components/organisms";
import { Style } from "@styles";
import { Yugi } from "./yugi";

interface Props {
  heading?: string;
  onClose?: () => void;
  onPreviousQuestion?: () => void | null;
  children: React.ReactNode;
  hideHeadingBorder?: boolean;
  hideProgressBar: boolean;
  yugi?: "default";
  centreLogo?: "yulife";
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
    hideHeadingBorder,
    yugi,
  } = props;

  return (
    <KeyboardAvoidingView behavior={keyboardBehavior} style={styles.wrapper}>
      <SafeAreaView style={styles.safeAreaView}>
        <GenericHeading
          heading={!centreLogo ? heading : null}
          logo={centreLogo}
          rightIcon={RIGHT_ICON}
          onLeftIconPress={onPreviousQuestion}
          onRightIconPress={onClose}
          hideBorder={hideHeadingBorder}
        />
        {hideProgressBar ? null : <FIBProgressBar />}
        {children}
        <Yugi yugi={yugi} />
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
  } as ViewStyle,
  safeAreaView: {
    height: "100%",
    flex: 1,
  } as ViewStyle,
});
