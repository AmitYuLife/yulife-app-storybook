import LoginHeroScreen from "@components/screens/login/login-hero/login-hero.screen";
import { REGION, t } from "@locale";
import { ROUTES } from "@navigation/constants";
import { debounce } from "lodash";
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
    () =>
      debounce(async (props?: { otp?: string; region?: REGION; email?: string }) => {
        await Navigation.push(componentId, {
          component: {
            id: ROUTES.loginEmail,
            name: ROUTES.loginEmail,
            passProps: props,
          },
        });
      }, 1000),
    [componentId]
  );

  useEffect(() => {
    if (hasSessionExpiredError) {
      Alert.alert(
        t("screens.login_hero.session-expired-error-title"),
        t("screens.login_hero.session-expired-error-message")
      );
    }
  }, [hasSessionExpiredError]);

  return <LoginHeroScreen onLoginEmailPress={navigateToLoginEmail} />;
};

export default memo(LoginHeroContainer);
