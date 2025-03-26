import { bottomTabs, ROUTES } from "@navigation/constants";
import { SESSION_EXPIRED_ERROR, TOKEN_EXPIRATION } from "@services/constants";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AccessibilityInfo, Alert, Platform } from "react-native";
import { useDispatch } from "react-redux";
import { LoginScreen } from "@screens";
import { applyLoginSession, validatePassword } from "../login.helpers";
import { REGION, t } from "@locale";
import { Navigation } from "@navigation/main";
import { validateEmail } from "@utils/email";
import { useMutatationAllRegions } from "@hooks";
import DeviceInfo from "react-native-device-info";
import { gql, IntercomHashMethod, LoginMethod } from "@graphql/__generated";

const trimGraphQLError = (message: string = "") => message.replace(/^GraphQL error: /, "");

interface Props {
  componentId: string;
  otp?: string;
  region?: REGION;
  email?: string;
  hasSessionExpiredError?: boolean;
}

const LoginContainer: React.FC<Props> = ({
  componentId,
  otp,
  email: incomingEmail,
  hasSessionExpiredError = false,
  region,
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
  const {
    mutate: loginUser,
    result: { lastError, loading, data: logins },
  } = useMutatationAllRegions(
    gql("LoginUserDocument"),
    {
      fetchPolicy: "no-cache",
    },
    region ? [region] : undefined
  );

  const handleError = useCallback(
    async (errorMessage: string) => {
      if (isUsingOtp) {
        setWasLogginCalled(false);
        setIsUsingOtp(false);
      }

      const isScreenReaderEnabled = await AccessibilityInfo.isScreenReaderEnabled();
      if (isScreenReaderEnabled) {
        Alert.alert(t("screens.login.accessibility.alert_error_title"), errorMessage);
      }
    },
    [isUsingOtp]
  );

  const onLogIn = useCallback(async () => {
    const uniqueDeviceId = await DeviceInfo.getUniqueId();

    if (isFormValid || isUsingOtp) {
      try {
        const results = await loginUser({
          variables: {
            email: email.toLowerCase(),
            intercomHashMethod: Platform.OS as IntercomHashMethod,
            method: isUsingOtp ? LoginMethod.Otp : LoginMethod.Password,
            password: isUsingOtp ? otp : password,
            tokenExpiration: TOKEN_EXPIRATION,
            uniqueDeviceId,
          },
        });

        // only 1 hit, login for this region
        if (results.length === 1) {
          await applyLoginSession(results[0], results[0].region, componentId, dispatch, fitkitAuthorised);
          return;
        }
      } catch (e) {
        handleError(trimGraphQLError(e?.message));
      }
    }
  }, [email, isUsingOtp, password, otp, handleError, isFormValid, loginUser, componentId, dispatch, fitkitAuthorised]);

  const onResetPassword = useCallback(async () => {
    await Navigation.push(componentId, {
      component: {
        id: ROUTES.resetPassword,
        name: ROUTES.resetPassword,
        passProps: { email },
        options: { bottomTabs },
      },
    });
  }, [componentId, email]);

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

  // OTP in use, trigger a login
  // checking for !fitkitLoading to wait until authorised will be assigned,
  // otherwise it will be assigned with undefined
  // that will lead to infinite loading on FitKitConnect screen.
  useEffect(() => {
    if (isUsingOtp && !fitkitLoading && !wasLoginCalled) {
      setWasLogginCalled(true);
      onLogIn();
    }
  }, [isUsingOtp, fitkitLoading, wasLoginCalled, setWasLogginCalled]);

  // manage errors
  useEffect(() => {
    if (lastError) {
      handleError(lastError);
    }
  }, [lastError, handleError]);

  // if there's more than 1 results, return
  const regionSelect = useMemo(
    () =>
      logins.length > 1
        ? {
            restrictTo: logins.map((d) => d.region),
            onSelect: (r: REGION) =>
              applyLoginSession(
                logins.find((d) => d.region === r),
                r,
                componentId,
                dispatch,
                fitkitAuthorised
              ).catch((err) => handleError(err.message)),
          }
        : undefined,
    // Logins is mutated (it's a ref)! Don't change the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [logins.length, componentId, dispatch, fitkitAuthorised]
  );

  return (
    <LoginScreen
      regionSelect={regionSelect}
      disabled={!isFormValid || wasLoginCalled}
      email={email}
      emailError={emailError}
      isLoggingIn={loading || wasLoginCalled}
      loginError={trimGraphQLError(lastError) || sessionExpiredError}
      onEmailChange={onEmailChange}
      onResetPasswordPress={onResetPassword}
      onLogInPress={() => onLogIn()}
      onPasswordChange={onPasswordChange}
      password={password}
      passwordError={passwordError}
    />
  );
};

export default LoginContainer;
