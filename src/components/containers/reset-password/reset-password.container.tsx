import React, { useState, useMemo, FC, useCallback, useEffect } from "react";
import { Navigation } from "@navigation/main";
import { EmailSentScreen, ResetPasswordScreen } from "@screens";
import Logger from "@services/logger/logger";
import { validateEmail } from "@utils/email";
import { useMutatationAllRegions } from "@hooks";
import { CaptchaResponse, gql } from "@graphql/__generated";
import { useCaptcha } from "@organisms/captcha-input";
import { AccessibilityInfo, Alert } from "react-native";
import { t } from "@locale";
import { region } from "@locale";

interface IProps {
  componentId: string;
  email?: string;
}

const ResetPasswordContainer: FC<IProps> = (props) => {
  const { componentId } = props;
  const [{ wasEmailSent, email, emailError }, setState] = useState({
    email: props?.email || "",
    emailError: "",
    wasEmailSent: false,
  });

  const captcha = useCaptcha(region.getCaptchaConfig());

  const {
    mutate: sendMagicLink,
    result: { loading, lastError },
  } = useMutatationAllRegions(gql("SendMagicLinkDocument"));

  const disableSubmit = useMemo(() => email === "" || emailError !== "", [email, emailError]);

  const handleError = useCallback(async (errorMessage: string) => {
    const isScreenReaderEnabled = await AccessibilityInfo.isScreenReaderEnabled();
    if (isScreenReaderEnabled) {
      Alert.alert(t("screens.login.accessibility.alert_error_title"), errorMessage);
    }
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!validateEmail(email)) {
      try {
        const captchaResponse = await captcha.submit();

        const results = await sendMagicLink({
          variables: {
            email,
            isResetPasswordRequest: true,
            captchaResponse: captchaResponse as CaptchaResponse,
          },
        });

        if (results.length > 0) {
          setState({ wasEmailSent: true, emailError, email });
        }
      } catch (e) {
        Logger.notify(e, { file: "reset-password.container" });
      }
    }
  }, [email, emailError, sendMagicLink, captcha]);

  const handleEmailChange = useCallback(
    (newEmail: string) => {
      setState({ email: newEmail, emailError: validateEmail(newEmail), wasEmailSent });
    },
    [wasEmailSent]
  );

  useEffect(() => {
    if (lastError) {
      handleError(lastError);
    }
  }, [lastError, handleError]);

  if (wasEmailSent) {
    return (
      <EmailSentScreen
        email={email}
        onCtaPress={() => Navigation.popToRoot(componentId)}
        onSecondaryCtaPress={() => setState({ wasEmailSent: false, email, emailError })}
      />
    );
  }

  return (
    <ResetPasswordScreen
      disableSubmit={disableSubmit}
      email={email}
      emailError={emailError}
      error={lastError}
      isSubmitting={loading}
      onCancelPress={() => Navigation.pop(componentId)}
      onEmailChange={handleEmailChange}
      onSubmitPress={handleSubmit}
      captcha={captcha}
    />
  );
};

export default ResetPasswordContainer;
