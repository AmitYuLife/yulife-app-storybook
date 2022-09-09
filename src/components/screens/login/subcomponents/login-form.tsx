import * as React from "react";
import { View, Keyboard, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { BUTTON_LOGIN, INPUT_LOGIN_EMAIL, INPUT_LOGIN_PASSWORD } from "@ids";
import { Pad, TextTemplate } from "@atoms";
import { Button, LinkGroup, PressableWithDelay, TextInput, TextInputError } from "@molecules";
import { ServerDropdown } from "./server-dropdown";
import { useTranslation, useKeyboardListeners } from "@hooks";
import { Style } from "@styles";

export type LoginFormProps = {
  disabled: boolean;
  email: string;
  emailError: string;
  isLoggingIn: boolean;
  loginError: string;
  onEmailChange: (email: string) => void;
  onResetPasswordPress: () => void;
  onLogInPress: () => void;
  onPasswordChange: (password: string) => void;
  password: string;
  passwordError: string;
};

export const LoginForm = (props: LoginFormProps) => {
  const {
    disabled,
    email,
    emailError,
    isLoggingIn,
    loginError,
    onEmailChange,
    onLogInPress,
    onPasswordChange,
    password,
    passwordError,
    onResetPasswordPress,
  } = props;

  const t = useTranslation(["screens.login.help", "screens.login.heading", "screens.login.ctaLabel"]);
  const isShowingKeyboard = useKeyboardListeners();
  const links = React.useMemo(
    () => [
      {
        label: t["screens.login.help"],
        onPress: onResetPasswordPress,
      },
    ],
    []
  );

  return (
    <Animatable.View duration={1000} animation="fadeIn" style={styles.flex} useNativeDriver={true}>
      <PressableWithDelay style={styles.fullScreenWrapper} onPress={isShowingKeyboard ? Keyboard.dismiss : () => null}>
        <View />
      </PressableWithDelay>
      {isShowingKeyboard ? null : (
        <View style={styles.headingWrapper}>
          <Pad height={100} />
          <View style={styles.headingInnerWrapper}>
            <TextTemplate type="h2">{t["screens.login.heading"]}</TextTemplate>
            <ServerDropdown />
          </View>
        </View>
      )}
      <Pad height={44} />
      <TextInput
        testID={INPUT_LOGIN_EMAIL}
        errorMessage={emailError}
        hasError={!!emailError}
        onChange={onEmailChange}
        type={TextInput.Types.EMAIL}
        value={email}
      />
      <Pad height={12} />
      <TextInput
        testID={INPUT_LOGIN_PASSWORD(TextInput.Types.PASSWORD)}
        errorMessage={passwordError}
        hasError={!!passwordError}
        onChange={onPasswordChange}
        value={password}
        type={TextInput.Types.PASSWORD}
      />
      {!loginError ? null : (
        <View style={styles.centerWrapper}>
          <TextInputError>{loginError}</TextInputError>
        </View>
      )}
      <Pad height={44} />

      <Button
        testID={BUTTON_LOGIN(disabled)}
        isLoading={isLoggingIn}
        disabled={isLoggingIn || disabled}
        label={t["screens.login.ctaLabel"]}
        onPress={onLogInPress}
        size="Large"
      />

      <Pad height={15} />
      <LinkGroup data={links} />
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  centerWrapper: {
    alignItems: "center",
  },
  headingWrapper: {
    width: Style.DEVICE_WIDTH,
    paddingHorizontal: Style.adjust(40),
  },
  headingInnerWrapper: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" },
  fullScreenWrapper: {
    ...StyleSheet.absoluteFillObject,
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  },
});
