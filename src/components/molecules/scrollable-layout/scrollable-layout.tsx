import React from "react";
import { Colours, Style } from "@styles";
import { SafeAreaView, ScrollView, View, ViewStyle, StyleSheet, Platform, KeyboardAvoidingView } from "react-native";
import { GenericHeading } from "@atoms";
import { Logo } from "../../atoms/generic-heading/generic-heading.types";
import { CTA } from "./cta";

interface Props {
  children: React.ReactNode;
  buttonTitle: string;
  isBeta?: boolean;
  isButtonDisabled?: boolean;
  isButtonLoading?: boolean;
  buttonAction: () => void;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  logo?: Logo;
  heading?: string;
  shouldCenterContent?: boolean;
  secondButtonAction?: () => void;
  secondButtonLabel?: string;
  hideFirstButton?: boolean;
  isInlineCTA?: boolean;
}

export function ScrollableLayout(props: Props) {
  const {
    children,
    buttonTitle,
    logo,
    heading,
    buttonAction,
    onLeftIconPress,
    onRightIconPress,
    isBeta = true,
    isButtonDisabled = false,
    isButtonLoading = false,
    shouldCenterContent = false,
    hideFirstButton = false,
    secondButtonLabel,
    secondButtonAction,
  } = props;

  const contentContainerStyle: ViewStyle = shouldCenterContent
    ? { flexGrow: 1, alignItems: "center", justifyContent: "center" }
    : {};

  return (
    <KeyboardAvoidingView style={styles.keyboardWrapper} behavior={Platform.OS === "ios" ? "padding" : null}>
      <SafeAreaView style={styles.wrapper}>
        <GenericHeading
          isBeta={isBeta}
          logo={logo}
          heading={heading}
          onLeftIconPress={onLeftIconPress}
          onRightIconPress={onRightIconPress}
        />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={contentContainerStyle}>
          <View style={styles.padTop} />
          {children}
          <View style={styles.padBot} />
        </ScrollView>
        <CTA
          buttonTitle={buttonTitle}
          buttonAction={buttonAction}
          isButtonDisabled={isButtonDisabled}
          isButtonLoading={isButtonLoading}
          hideFirstButton={hideFirstButton}
          secondButtonAction={secondButtonAction}
          secondButtonLabel={secondButtonLabel}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardWrapper: {
    flex: 1,
  } as ViewStyle,
  heading: {
    color: Colours.products.fib.n800,
    justifyContent: "center",
  },
  wrapper: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
  },
  padTop: {
    height: 16,
  } as ViewStyle,
  padBot: {
    height: CTA.height / 1.5,
  } as ViewStyle,
});
