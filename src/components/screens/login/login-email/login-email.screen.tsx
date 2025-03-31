import * as React from "react";
import { memo } from "react";
import { Box, Pad, TextTemplate } from "@atoms";
import { Button, TextInput } from "@molecules";
import { BUTTON_LOGIN, INPUT_LOGIN_EMAIL } from "@ids";
import { CaptchaInput, useCaptcha } from "@organisms/captcha-input";
import { Colours } from "@styles";
import { t } from "@locale";
import { LoginFormWrapper } from "../subcomponents/login-form-wrapper";

interface IProps {
  email: string;
  emailError: string;
  isSubmitting: boolean;
  onPressBack: () => void;
  onPressSubmit: () => void;
  onEmailChange: (email: string) => void;
  captcha: ReturnType<typeof useCaptcha>;
  magicLinkError: string;
}

const LoginEmailScreen = ({
  email,
  emailError,
  magicLinkError,
  isSubmitting,
  onPressBack,
  onPressSubmit,
  onEmailChange,
  captcha,
}: IProps) => {
  const disableSubmit = !!emailError || isSubmitting;

  return (
    <LoginFormWrapper heading={t("screens.login_email.heading")} onPressBack={onPressBack}>
      <TextInput
        testID={INPUT_LOGIN_EMAIL}
        errorMessage={emailError}
        hasError={!!emailError}
        onChange={onEmailChange}
        type={TextInput.Types.EMAIL}
        value={email}
      />

      <Pad height={15} />

      {!magicLinkError ? null : (
        <Box pl={30} pr={30} pb={10} pt={10}>
          <TextTemplate type={"l2"} color={Colours.lightRed} textAlign="center">
            {magicLinkError}
          </TextTemplate>
        </Box>
      )}

      <Pad height={15} />

      <Button
        testID={BUTTON_LOGIN(disableSubmit)}
        isLoading={isSubmitting}
        disabled={disableSubmit || isSubmitting}
        translationKey={isSubmitting ? "screens.login_email.submitting" : "screens.login_email.cta_label"}
        onPress={onPressSubmit}
      />

      <Pad height={10} />

      <CaptchaInput {...captcha} />
    </LoginFormWrapper>
  );
};

export default memo(LoginEmailScreen);
