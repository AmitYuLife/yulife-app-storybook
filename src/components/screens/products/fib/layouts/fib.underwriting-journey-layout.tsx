import React, { ComponentProps, useState } from "react";
import { Platform, StyleSheet, KeyboardAvoidingView, ViewStyle, View } from "react-native";
import { GenericHeading } from "@atoms";
import { FIBProgressBar } from "@components/organisms";
import { Yugi, YugiType } from "./yugi";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { ProgressBar } from "@components/molecules";
import {
  FIBUnderwritingJourneyOverlayContext,
  FIBUnderwritingJourneyOverlay,
} from "./fib.underwriting-journey-overlay";
import { IOverlay } from "@screens/products/fib/layouts/fib.underwriting-journey-overlay";

interface Props {
  heading?: string;
  onClose?: () => void;
  onPreviousQuestion?: () => void | null;
  children: React.ReactNode;
  progressBarHideType?: ComponentProps<typeof ProgressBar>["hideType"];
  yugi?: YugiType;
  centreLogo?: "yulife";
  wrapperStyle?: ViewStyle;
  hideBorder?: boolean;
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
    progressBarHideType,
    yugi,
    wrapperStyle,
    hideBorder = true,
  } = props;

  const [overlay, setOverlay] = useState(null as IOverlay);

  return (
    <FIBUnderwritingJourneyOverlayContext.Provider value={{ overlay, setOverlay }}>
      <View style={StyleSheet.flatten([styles.wrapper, wrapperStyle])}>
        <GenericHeadingPad />
        <KeyboardAvoidingView behavior={keyboardBehavior} style={styles.kav}>
          <View style={styles.safeAreaView}>
            <FIBProgressBar hideType={progressBarHideType} />
            {children}
            <Yugi wrapperStyle={styles.yugiWrapperStyle} yugi={yugi} />
          </View>
        </KeyboardAvoidingView>
        <GenericHeadingAbsolute
          heading={!centreLogo ? heading : null}
          logo={centreLogo}
          rightIcon={RIGHT_ICON}
          onLeftIconPress={onPreviousQuestion}
          onRightIconPress={onClose}
          hideBorder={hideBorder}
        />
        <FIBUnderwritingJourneyOverlay />
      </View>
    </FIBUnderwritingJourneyOverlayContext.Provider>
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
  yugiWrapperStyle: {
    top: Yugi.DEFAULT_TOP_OFFSET,
  } as ViewStyle,
});
