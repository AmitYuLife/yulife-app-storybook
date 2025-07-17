import * as React from "react";
import { memo } from "react";
import { Box, Pad, TextTemplate } from "@atoms";
import { Button, LinkButton, TextInput } from "@molecules";
import { BUTTON_LOGIN, INPUT_LOGIN_PASSWORD } from "@ids";
import { Colours, Style } from "@styles";
import { region, REGION, t } from "@locale";
import { ServerList } from "../subcomponents/server-list";
import { TextInputPassword } from "@components/molecules/text-input/text-input-password";
import LoginFormWrapper from "../subcomponents/login-form-wrapper";
import { StyleSheet } from "react-native";
import { handleOpenWebView } from "@navigation/utils";

interface IProps {
  password: string;
  validationError: string;
  loginError: string;
  isSubmitting: boolean;
  onPressBack: () => void;
  onPressSubmit: () => void;
  onPasswordChange: (password: string) => void;
  regionSelect: {
    onSelect: (region: REGION) => void;
    restrictTo: REGION[];
  };
}

const LoginPasswordScreen = ({
  password,
  validationError,
  loginError,
  isSubmitting,
  onPressBack,
  onPressSubmit,
  onPasswordChange,
  regionSelect,
}: IProps) => {
  const disableSubmit = !!validationError || isSubmitting;

  const handleForgotPassword = React.useCallback(() => {
    handleOpenWebView({
      uri: region.getConfig("urls").forgotPassword,
      title: t("screens.login_password.forgot.title"),
    });
  }, []);

  if (regionSelect) {
    return (
      <LoginFormWrapper onPressBack={onPressBack}>
        <ServerList onPress={regionSelect.onSelect} restrictToRegions={regionSelect.restrictTo} />
      </LoginFormWrapper>
    );
  }

  return (
    <LoginFormWrapper heading={t("screens.login_password.heading")} onPressBack={onPressBack}>
      <TextInputPassword
        testID={INPUT_LOGIN_PASSWORD(TextInput.Types.PASSWORD)}
        errorMessage={validationError}
        hasError={!!validationError}
        returnKeyType="done"
        onChange={onPasswordChange}
        value={password}
        onSubmitEditing={!isSubmitting && !disableSubmit ? onPressSubmit : undefined}
        style={styles.input}
        autoComplete="current-password"
      />

      <Pad height={15} />

      {!loginError ? null : (
        <Box pl={30} pr={30} pb={10} pt={10}>
          <TextTemplate type={"l2"} color={Colours.lightRed} textAlign="center">
            {loginError}
          </TextTemplate>
        </Box>
      )}

      <Pad height={15} />

      <Button
        testID={BUTTON_LOGIN(disableSubmit)}
        isLoading={isSubmitting}
        disabled={disableSubmit}
        translationKey={isSubmitting ? "screens.login_password.submitting" : "screens.login_password.cta_label"}
        onPress={onPressSubmit}
      />
      <LinkButton
        wrapperStyle={styles.forgot}
        translationKey="screens.login_password.forgot.cta"
        onPress={handleForgotPassword}
      />
    </LoginFormWrapper>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: Style.adjust(30),
  },
  forgot: {
    alignSelf: "flex-start",
    paddingLeft: Style.adjust(30),
    marginTop: Style.adjust(24),
  },
});

export default memo(LoginPasswordScreen);
