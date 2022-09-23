import React, { memo, useCallback, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import { UnauthorisedGradient } from "@atoms";
import { CentredScreen } from "@molecules";
import { LoginForm, LoginFormProps } from "./subcomponents/login-form";
import { getIsAppFreshlyInstalled } from "@redux/device/device.selectors";
import { markAppAsInstalled } from "@redux/device/device.actions";
import { ServerList } from "./subcomponents/server-list";

type LoginScreenProps = LoginFormProps;

type Page = "region" | "login";

const LoginScreen = memo((props: LoginScreenProps) => {
  const dispatch = useDispatch();
  const isAppFreshlyInstalled = useSelector(getIsAppFreshlyInstalled);
  const [activePage, setActivePage] = useState<Page>(isAppFreshlyInstalled ? "region" : "login");

  const setLoginAsActive = useCallback(() => {
    setActivePage("login");
    dispatch(markAppAsInstalled());
  }, []);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.flex}>
      <Animatable.View duration={1000} animation="fadeIn" style={styles.flex} useNativeDriver={true}>
        <CentredScreen footerImage="forest" BackgroundGradient={<UnauthorisedGradient />}>
          {activePage === "region" ? <ServerList onPress={setLoginAsActive} /> : <LoginForm {...props} />}
        </CentredScreen>
      </Animatable.View>
    </KeyboardAvoidingView>
  );
});

export default LoginScreen;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
