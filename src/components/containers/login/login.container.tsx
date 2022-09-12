import { useMutation } from "@apollo/react-hooks";
import { GQL_MUTATION_LOGIN_USER, LoginUserMutationTuple } from "@graphql/user";
import { bottomTabs, ROUTES } from "@navigation/constants";
import { setAuthenticatedRoot } from "@navigation/root";
import { TOKEN_EXPIRATION, SESSION_EXPIRED_ERROR } from "@services/constants";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { Style } from "@styles/index";
import React, { useState, useCallback, useMemo } from "react";
import { AccessibilityInfo, Alert, Keyboard, Platform } from "react-native";
import { Navigation } from "react-native-navigation";
import { useDispatch } from "react-redux";
import { LoginMethod, IntercomHashMethod } from "@graphql/_core/schema/globalTypes";
import { setAuthenticated } from "@redux/app/app.actions";
import { loginUserSuccess } from "@redux/user/user.actions";
import { setToken } from "@services/storage";
import { LoginScreen } from "@screens";
import { validateEmail, validatePassword } from "./login.helpers";
import { t } from "@locale";

const trimGraphQLError = (message: string) => message.replace(/^GraphQL error: /, "");

interface Props {
  componentId: string;
  otp?: string;
  email?: string;
  hasSessionExpiredError?: boolean;
}

const LoginContainer: React.FC<Props> = ({
  componentId,
  otp,
  email: incomingEmail,
  hasSessionExpiredError = false,
}) => {
  const dispatch = useDispatch();
  const { authorised: fitkitAuthorised, loading: fitkitLoading } = useFitKit();
  const [isUsingOtp, setIsUsingOtp] = useState(otp && otp.length > 10);
  const [email, setEmail] = useState(isUsingOtp ? incomingEmail : "");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState(isUsingOtp ? "PASSWORD" : "");
  const [passwordError, setPasswordError] = useState("");
  const [sessionExpiredError, setSessionExpiredError] = useState(hasSessionExpiredError ? SESSION_EXPIRED_ERROR : "");
  const [wasLoginCalled, setWasLogginCalled] = useState(false);

  const isFormValid = useMemo(() => !(validateEmail(email) || validatePassword(password)), [email, password]);
  const [loginUser, { error, loading }]: LoginUserMutationTuple = useMutation(GQL_MUTATION_LOGIN_USER);

  const goToNext = useCallback(
    async (authorised: boolean, onboarded: boolean) => {
      const navigateToNext = () => {
        if (!onboarded) {
          const route = ROUTES.onboardingSignUpReward;
          Navigation.push(componentId, {
            component: {
              id: route,
              name: route,
              options: { bottomTabs },
            },
          });
          return;
        }

        setAuthenticatedRoot(() => dispatch(setAuthenticated())); // TODO: use setNextRoot when the right intro's ready
      };

      Keyboard.dismiss();

      if (!authorised) {
        const route = ROUTES.onboardingFitKitConnect;
        Navigation.push(componentId, {
          component: {
            id: route,
            name: route,
            passProps: {
              navigateToNext,
            },
            options: { bottomTabs },
          },
        });
        return;
      }

      navigateToNext();
    },
    [componentId, dispatch]
  );

  const handleError = useCallback(
    async (errorMessage: string) => {
      if (isUsingOtp) {
        setWasLogginCalled(false);
        setIsUsingOtp(false);
      }

      const isScreenReaderEnabled = await AccessibilityInfo.isScreenReaderEnabled();
      if (isScreenReaderEnabled) {
        Alert.alert(t("screens.login.accessibility.alertErrorTitle"), errorMessage);
      }
    },
    [isUsingOtp]
  );

  const onLogIn = useCallback(
    async (authorised: boolean) => {
      if (isFormValid || isUsingOtp) {
        try {
          const results = await loginUser({
            variables: {
              email: email.toLowerCase(),
              intercomHashMethod: Platform.OS as IntercomHashMethod,
              method: isUsingOtp ? LoginMethod.OTP : LoginMethod.PASSWORD,
              password: isUsingOtp ? otp : password,
              tokenExpiration: TOKEN_EXPIRATION,
            },
          });

          if (results?.data?.loginUser?.token) {
            await setToken(results.data.loginUser.token);
            dispatch(loginUserSuccess(results.data));

            // no need to send the user to healthkit-connect if device is an ipad
            await goToNext(Style.isIPad() ? true : authorised, results.data.loginUser.user.redeemedOnboarding);
          } else {
            handleError(t("screens.login.accessibility.alertErrorDefaultMessage"));
          }
        } catch (e) {
          handleError(trimGraphQLError(e?.message));
        }
      }
    },
    [email, isUsingOtp, password, otp, dispatch, goToNext, isFormValid, loginUser]
  );

  const onResetPassword = useCallback(async () => {
    await Navigation.push(componentId, {
      component: {
        id: ROUTES.resetPassword,
        name: ROUTES.resetPassword,
        options: { bottomTabs },
      },
    });
  }, [componentId]);

  const onEmailChange = useCallback((input: string) => {
    setEmailError(validateEmail(input));
    setEmail(input);
    setSessionExpiredError("");
  }, []);

  const onPasswordChange = useCallback((input: string) => {
    setPasswordError(validatePassword(input));
    setPassword(input);
    setSessionExpiredError("");
  }, []);

  // checking for !fitkitLoading to wait until authorised will be assigned,
  // otherwise it will be assigned with undefined
  // that will lead to infinite loading on FitKitConnect screen.
  if (isUsingOtp && !fitkitLoading && !wasLoginCalled) {
    setWasLogginCalled(true);
    onLogIn(fitkitAuthorised);
  }

  return (
    <LoginScreen
      disabled={!isFormValid || wasLoginCalled}
      email={email}
      emailError={emailError}
      isLoggingIn={loading || wasLoginCalled}
      loginError={(error && trimGraphQLError(error.message)) || sessionExpiredError}
      onEmailChange={onEmailChange}
      onResetPasswordPress={onResetPassword}
      onLogInPress={() => onLogIn(fitkitAuthorised)}
      onPasswordChange={onPasswordChange}
      password={password}
      passwordError={passwordError}
    />
  );
};

export default LoginContainer;
