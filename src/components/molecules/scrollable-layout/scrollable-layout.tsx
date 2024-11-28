import React, { RefObject } from "react";
import { Colours, Style } from "@styles";
import { ScrollView, View, ViewStyle, StyleSheet, Platform, KeyboardAvoidingView } from "react-native";
import { CTA } from "./cta";
import { SCROLLABLE_LAYOUT } from "@ids";
import { GenericHeadingAbsolute, GenericHeadingLogo, GenericHeadingPad } from "@organisms/generic-heading";

interface Props {
  children: React.ReactNode;
  buttonTitle?: string;
  isButtonDisabled?: boolean;
  isButtonLoading?: boolean;
  buttonAction?: () => void;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  logo?: GenericHeadingLogo;
  heading?: string;
  shouldCenterContent?: boolean;
  secondButtonAction?: () => void;
  secondButtonLabel?: string;
  hideFirstButton?: boolean;
  isInlineCTA?: boolean;
  scrollViewForwardRef?: RefObject<ScrollView>;
  removeCtaFade?: boolean;
  hideTopBarBorder?: boolean;
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
    isButtonDisabled = false,
    isButtonLoading = false,
    shouldCenterContent = false,
    hideFirstButton = false,
    secondButtonLabel,
    secondButtonAction,
    scrollViewForwardRef,
    removeCtaFade,
    hideTopBarBorder = true,
  } = props;

  const contentContainerStyle: ViewStyle = shouldCenterContent
    ? { flexGrow: 1, alignItems: "center", justifyContent: "center" }
    : {};

  return (
    <KeyboardAvoidingView style={styles.keyboardWrapper} behavior={Platform.OS === "ios" ? "padding" : null}>
      <View style={styles.wrapper}>
        <GenericHeadingPad />
        <ScrollView
          testID={SCROLLABLE_LAYOUT}
          ref={scrollViewForwardRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={contentContainerStyle}
        >
          <View style={styles.padTop} />
          {children}
          <View style={styles.padBot} />
        </ScrollView>
        {!buttonAction ? null : (
          <View style={styles.buttonWrapper}>
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
        )}
      </View>
      <GenericHeadingAbsolute
        logo={logo}
        heading={heading}
        onLeftIconPress={onLeftIconPress}
        onRightIconPress={onRightIconPress}
        hideBorder={hideTopBarBorder}
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
  buttonWrapper: {
    marginBottom: Style.adjust(17),
  } as ViewStyle,
});
