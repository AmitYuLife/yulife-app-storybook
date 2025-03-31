import * as React from "react";
import { memo } from "react";
import { Box, Pad, TextTemplate } from "@atoms";
import { Button, TextInput } from "@molecules";
import { BUTTON_LOGIN, INPUT_LOGIN_PASSWORD } from "@ids";
import { Colours } from "@styles";
import { REGION, t } from "@locale";
import { ServerList } from "../subcomponents/server-list";
import { TextInputPassword } from "@components/molecules/text-input/text-input-password";
import LoginFormWrapper from "../subcomponents/login-form-wrapper";

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

  return (
    <LoginFormWrapper heading={t("screens.login_password.heading")} onPressBack={onPressBack}>
      {regionSelect ? (
        <ServerList onPress={regionSelect.onSelect} restrictToRegions={regionSelect.restrictTo} />
      ) : (
        <>
          <TextInputPassword
            testID={INPUT_LOGIN_PASSWORD(TextInput.Types.PASSWORD)}
            errorMessage={validationError}
            hasError={!!validationError}
            returnKeyType="done"
            onChange={onPasswordChange}
            value={password}
            onSubmitEditing={!isSubmitting && !disableSubmit ? onPressSubmit : undefined}
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
        </>
      )}
    </LoginFormWrapper>
  );
};

export default memo(LoginPasswordScreen);
