import LoginEmailScreen from "@components/screens/login/login-email/login-email.screen";
import { CaptchaResponse, gql } from "@graphql/__generated";
import { useMutatationAllRegions } from "@hooks";
import { region, t } from "@locale";
import { ROUTES } from "@navigation/constants";
import { useCaptcha } from "@organisms/captcha-input";
import Logger from "@services/logging/logger";
import { memo, useCallback, useState } from "react";
import { AccessibilityInfo, Alert } from "react-native";
import { Navigation } from "react-native-navigation";

interface Props {
  componentId: string;
  email?: string;
}

const LoginEnterEmailContainer = ({ componentId, ...props }: Props) => {
  const [email, setEmail] = useState(props.email || "");

  const navigateToConfirmation = useCallback(
    async (passProps?: { hasSetPassword?: boolean; email: string }) => {
      await Navigation.push(componentId, {
        component: {
          id: ROUTES.loginConfirm,
          name: ROUTES.loginConfirm,
          passProps,
        },
      });
    },
    [componentId]
  );

  const {
    mutate: sendMagicLink,
    result: { lastError: magicLinkError, loading: isSubmitting },
  } = useMutatationAllRegions(gql("SendMagicLinkDocument"));

  const captcha = useCaptcha(region.getCaptchaConfig());

  const handleError = useCallback(async (errorMessage: string) => {
    const isScreenReaderEnabled = await AccessibilityInfo.isScreenReaderEnabled();
    if (isScreenReaderEnabled) {
      Alert.alert(t("screens.login.accessibility.alert_error_title"), errorMessage);
    }
  }, []);

  const handleSubmit = useCallback(async () => {
    try {
      const captchaResponse = await captcha.submit();

      const results = await sendMagicLink({
        variables: {
          email,
          isResetPasswordRequest: false,
          captchaResponse: captchaResponse as CaptchaResponse,
        },
      });

      if (results.length > 0) {
        // if any of the regions had a set password, show the field on the next screen
        const hasSetPassword = results.some((result) => result.data?.sendMagicLink.hasSetPassword);

        await navigateToConfirmation({
          hasSetPassword,
          email,
        });
      }
    } catch (e) {
      // error display to user is handled via lastError
      handleError(e);
      Logger.error(e, { file: "login-email.container" });
    }
  }, [email, sendMagicLink, handleError, captcha, navigateToConfirmation]);

  return (
    <LoginEmailScreen
      email={email}
      emailError={""} // TODO - validation errors
      isSubmitting={isSubmitting}
      onPressBack={() => Navigation.pop(componentId)}
      onPressSubmit={handleSubmit}
      onEmailChange={setEmail}
      captcha={captcha}
      magicLinkError={magicLinkError}
    />
  );
};

export default memo(LoginEnterEmailContainer);
