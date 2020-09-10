import React from "react";
import { Colours, Style } from "@styles";
import { SafeAreaView, ScrollView, View, ViewStyle, StyleSheet, Platform, KeyboardAvoidingView } from "react-native";
import { GenericHeading, Button } from "@atoms";
import { Logo } from "../../atoms/generic-heading/generic-heading.types";

interface Props {
  children: React.ReactNode;
  buttonTitle: string;
  isBeta?: boolean;
  isButtonDisabled?: boolean;
  buttonAction: () => void;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  logo?: Logo;
  heading?: string;
  shouldCenterContent?: boolean;
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
    shouldCenterContent = false,
  } = props;

  const contentContainerStyle: ViewStyle = shouldCenterContent
    ? { flexGrow: 1, alignItems: "center", justifyContent: "center" }
    : {};

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null}>
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
        </ScrollView>
      </SafeAreaView>
      <View style={styles.button}>
        <Button disabled={isButtonDisabled} label={buttonTitle} onPress={buttonAction} type="Primary" />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: Colours.products.fib.n800,
    justifyContent: "center",
  },
  wrapper: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
  },
  button: {
    width: Style.DEVICE_WIDTH - 70,
    alignSelf: "center",
    height: 90,
  } as ViewStyle,
  padTop: {
    height: 16,
  } as ViewStyle,
});
