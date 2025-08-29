import LoginHeroScreen from "@components/screens/login/login-hero/login-hero.screen";
import { REGION, t } from "@locale";
import { ROUTES } from "@navigation/constants";
import { debounce } from "lodash";
import { memo, useCallback, useEffect, useMemo } from "react";
import { Alert } from "react-native";
import { Navigation } from "@navigation/main";

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

  const debouncedNavigateToLoginEmail = useMemo(
    () => debounce(navigateToLoginEmail, 500, { leading: true, trailing: false }),
    [navigateToLoginEmail]
  );

  useEffect(() => {
    // On component unmount, cancel the debounced function
    return () => {
      debouncedNavigateToLoginEmail.cancel();
    };
  }, [debouncedNavigateToLoginEmail]);

  useEffect(() => {
    if (hasSessionExpiredError) {
      Alert.alert(t("screens.login_hero.session_expired_error_message"));
    }
  }, [hasSessionExpiredError]);

  return <LoginHeroScreen onLoginEmailPress={debouncedNavigateToLoginEmail} />;
};

export default memo(LoginHeroContainer);
