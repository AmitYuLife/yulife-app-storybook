import LoginEmailScreen from "@components/screens/login/login-email/login-email.screen";
import { REGION, region, t } from "@locale";
import { ROUTES } from "@navigation/constants";
import { useCaptcha } from "@organisms/captcha-input";
import { memo, useCallback, useState } from "react";
import { AccessibilityInfo, Alert, Keyboard } from "react-native";
import { Navigation } from "react-native-navigation";
import { useSendMagicLink } from "./send-magic-link.hook";
import { validateEmail } from "@utils/email";
import { useBackHandler } from "@hooks";

interface Props {
  componentId: string;
  email?: string;
}

const LoginEnterEmailContainer = ({ componentId, ...props }: Props) => {
  const [email, setEmail] = useState(props.email || "");
  const [magicLinkError, setMagicLinkError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handlePressBack = useCallback(() => {
    Keyboard.dismiss();
    Navigation.pop(componentId);
    return true;
  }, [componentId]);

  useBackHandler(handlePressBack);

  const onChange = useCallback((userInput: string) => {
    setEmail(userInput);
    setEmailError(validateEmail(userInput));
  }, []);

  const navigateToConfirmation = useCallback(
    async (passProps: { regionResponses: { hasSetPassword: boolean; region: REGION }[]; email: string }) => {
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

  const captcha = useCaptcha(region.getCaptchaConfig());

  const handleError = useCallback(async (errorMessage: string) => {
    setMagicLinkError(errorMessage);

    const isScreenReaderEnabled = await AccessibilityInfo.isScreenReaderEnabled();
    if (isScreenReaderEnabled) {
      Alert.alert(t("screens.login.accessibility.alert_error_title"), errorMessage);
    }
  }, []);

  const { sendMagicLink, loading: isSubmitting } = useSendMagicLink({
    email,
    captcha,
    onSuccess: async (results: { hasSetPassword: boolean; region: REGION }[]) => {
      setMagicLinkError(null);

      await navigateToConfirmation({
        regionResponses: results,
        email,
      });
      Keyboard.dismiss();
    },
    onFailure: (error: string) => {
      handleError(error);
    },
  });

  return (
    <LoginEmailScreen
      email={email}
      emailError={emailError}
      isSubmitting={isSubmitting}
      onPressBack={handlePressBack}
      onPressSubmit={sendMagicLink}
      onEmailChange={onChange}
      captcha={captcha}
      magicLinkError={magicLinkError}
    />
  );
};

export default memo(LoginEnterEmailContainer);
