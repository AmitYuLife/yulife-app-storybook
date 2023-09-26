import React, { memo } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { UnauthorisedGradient } from "@atoms";
import { CentredScreen } from "@molecules";
import { LoginForm, LoginFormProps } from "./subcomponents/login-form";
import { ServerList } from "./subcomponents/server-list";
import { Style } from "@styles";
import { REGION } from "@locale";

type LoginScreenProps = LoginFormProps & {
  regionSelect?: {
    onSelect: (region: REGION) => void;
    restrictTo: REGION[];
  };
};

export const LoginScreen = memo((props: LoginScreenProps) => (
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.flex}>
    <Animatable.View duration={1000} animation="fadeIn" style={styles.flex} useNativeDriver={true}>
      <CentredScreen
        backgroundImage={require("@assets/centred-screen/forestBackground.png")}
        style={styles.wrapper}
        BackgroundGradient={<UnauthorisedGradient />}
      >
        {props.regionSelect ? (
          <ServerList onPress={props.regionSelect.onSelect} restrictToRegions={props.regionSelect.restrictTo} />
        ) : (
          <LoginForm {...props} />
        )}
      </CentredScreen>
    </Animatable.View>
  </KeyboardAvoidingView>
));

export default LoginScreen;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: Style.adjust(265),
  },
  flex: {
    flex: 1,
  },
});
