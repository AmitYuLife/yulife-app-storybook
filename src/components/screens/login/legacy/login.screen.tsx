import React, { memo } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { UnauthorisedGradient } from "@atoms";
import { CentredScreen } from "@molecules";
import { LoginForm, LoginFormProps } from "./subcomponents/login-form";
import { ServerList } from "../subcomponents/server-list";
import { REGION } from "@locale";
import Animated, { FadeIn } from "react-native-reanimated";
import { TOP_BAR } from "@styles";

type LoginScreenProps = LoginFormProps & {
  regionSelect?: {
    onSelect: (region: REGION) => void;
    restrictTo: REGION[];
  };
};

const behavior = Platform.select({
  ios: "padding" as const,
  android: null,
});

export const LoginScreen = memo((props: LoginScreenProps) => (
  <KeyboardAvoidingView behavior={behavior} style={styles.flex}>
    <Animated.View entering={FadeIn.duration(1000)} style={styles.flex}>
      <CentredScreen
        backgroundImage={require("@assets/centred-screen/forestBackground.png")}
        style={styles.wrapper}
        BackgroundGradient={<UnauthorisedGradient />}
        shouldUseSafeArea={false}
      >
        {props.regionSelect ? (
          <ServerList onPress={props.regionSelect.onSelect} restrictToRegions={props.regionSelect.restrictTo} />
        ) : (
          <LoginForm {...props} />
        )}
      </CentredScreen>
    </Animated.View>
  </KeyboardAvoidingView>
));

export default LoginScreen;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    paddingTop: TOP_BAR.PADDING_TOP,
  },
  flex: {
    flex: 1,
  },
});
