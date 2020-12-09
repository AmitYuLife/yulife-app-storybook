import React, { RefObject } from "react";
import { Colours } from "@styles";
import { ScrollView, View, ViewStyle, StyleSheet, Platform, KeyboardAvoidingView } from "react-native";
import { Logo } from "../../atoms/generic-heading/generic-heading.types";
import { CTA } from "./cta";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";

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
  scrollViewForwardRef?: RefObject<ScrollView>;
  removeCtaFade?: boolean;
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
    scrollViewForwardRef,
    removeCtaFade,
  } = props;

  const contentContainerStyle: ViewStyle = shouldCenterContent
    ? { flexGrow: 1, alignItems: "center", justifyContent: "center" }
    : {};

  return (
    <KeyboardAvoidingView style={styles.keyboardWrapper} behavior={Platform.OS === "ios" ? "padding" : null}>
      <View style={styles.wrapper}>
        <GenericHeadingPad />
        <ScrollView
          ref={scrollViewForwardRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={contentContainerStyle}
        >
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
          removeCtaFade={removeCtaFade}
        />
      </View>
      <GenericHeadingAbsolute
        isBeta={isBeta}
        logo={logo}
        heading={heading}
        onLeftIconPress={onLeftIconPress}
        onRightIconPress={onRightIconPress}
      />
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
  },
  padTop: {
    height: 16,
  } as ViewStyle,
  padBot: {
    height: CTA.height / 1.5,
  } as ViewStyle,
});
