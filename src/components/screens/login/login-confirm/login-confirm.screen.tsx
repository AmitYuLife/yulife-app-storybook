import * as React from "react";
import { memo } from "react";
import { LinkButton } from "@molecules";
import { t } from "@locale";
import { CaptchaInput, useCaptcha } from "@organisms/captcha-input";
import LoginFormWrapper from "../subcomponents/login-form-wrapper";

interface IProps {
  email: string;
  showLoginWithPassword: boolean;
  isResending: boolean;
  onPressBack: () => void;
  onPressLoginWithPassword: () => void;
  onPressResend: () => void;
  captcha: ReturnType<typeof useCaptcha>;
}

const LoginConfirmScreen = ({
  email,
  showLoginWithPassword,
  onPressBack,
  onPressLoginWithPassword,
  captcha,
  onPressResend,
  isResending,
}: IProps) => {
  return (
    <LoginFormWrapper heading={t("screens.login_confirm.heading", { email })} onPressBack={onPressBack}>
      {showLoginWithPassword ? (
        <LinkButton translationKey="labels.cta.login_with_password" onPress={onPressLoginWithPassword} />
      ) : null}

      <LinkButton
        translationKey={isResending ? "screens.login_confirm.resending_link" : "screens.login_confirm.resend_link"}
        onPress={onPressResend}
        disabled={isResending}
      />

      <CaptchaInput {...captcha} />
    </LoginFormWrapper>
  );
};

export default memo(LoginConfirmScreen);
