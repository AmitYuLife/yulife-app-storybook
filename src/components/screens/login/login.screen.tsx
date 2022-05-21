import * as React from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { BUTTON_LOGIN, INPUT_LOGIN_EMAIL, INPUT_LOGIN_PASSWORD } from "@ids";
import { Pad, TextTemplate, UnauthorisedGradient } from "@atoms";
import region from "@services/region";
import { Button, CentredScreen, LinkGroup, TextInput, TextInputError } from "@molecules";
import styles from "./login.screen.styles";
import { ServerDropdown } from "./subcomponents/server-dropdown";
import { useTranslation, useKeyboardListeners } from "@hooks";

export interface IProps {
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
}

const LoginScreen = React.memo(
  ({
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
  }: IProps) => {
    const isShowingKeyboard = useKeyboardListeners();
    const t = useTranslation(["screens.login.help", "screens.login.heading", "screens.login.ctaLabel"]);
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
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.flex}>
        <Animatable.View duration={1000} animation="fadeIn" style={styles.flex} useNativeDriver={true}>
          <CentredScreen footerImage="forest" BackgroundGradient={<UnauthorisedGradient />}>
            {isShowingKeyboard ? null : (
              <View style={styles.headingWrapper}>
                <Pad height={100} />
                {region.ARE_MULTIPLE_REGIONS_ENABLED ? (
                  <View style={styles.headingInnerWrapper}>
                    <TextTemplate type="h2">{t["screens.login.heading"]}</TextTemplate>
                    <ServerDropdown />
                  </View>
                ) : (
                  <TextTemplate textAlign="center" type="h1">
                    {t["screens.login.heading"]}
                  </TextTemplate>
                )}
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
            {!loginError ? null : <TextInputError>{loginError}</TextInputError>}
            <Pad height={44} />

            <Button
              testID={BUTTON_LOGIN}
              isLoading={isLoggingIn}
              disabled={isLoggingIn || disabled}
              label={t["screens.login.ctaLabel"]}
              onPress={onLogInPress}
              size="Large"
            />

            <Pad height={15} />
            <LinkGroup data={links} />
          </CentredScreen>
        </Animatable.View>
      </KeyboardAvoidingView>
    );
  }
);

export default LoginScreen;
