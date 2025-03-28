import LoginHeroScreen from "@components/screens/login/login-hero/login-hero.screen";
import { REGION, t } from "@locale";
import { ROUTES } from "@navigation/constants";
import { memo, useCallback, useEffect } from "react";
import { Alert } from "react-native";
import { Navigation } from "react-native-navigation";

interface Props {
  componentId: string;

  // if true, the user will be shown a session expired error
  hasSessionExpiredError?: boolean;
}

const LoginHeroContainer = ({ componentId, hasSessionExpiredError }: Props) => {
  const navigateToLoginEmail = useCallback(
    async (props?: { otp?: string; region?: REGION; email?: string }) => {
      await Navigation.push(componentId, {
        component: {
          id: ROUTES.loginEmail,
          name: ROUTES.loginEmail,
          passProps: props,
        },
      });
    },
    [componentId]
  );

  useEffect(() => {
    if (hasSessionExpiredError) {
      Alert.alert(
        // TODO - strings!
        t("screens.login-hero.session-expired-error-title"),
        t("screens.login-hero.session-expired-error-message")
      );
    }
  }, [hasSessionExpiredError]);

  return <LoginHeroScreen onLoginEmailPress={navigateToLoginEmail} />;
};

export default memo(LoginHeroContainer);
