import { bottomTabs, ROUTES } from "@navigation/constants";
import { setAuthenticatedRoot } from "@navigation/root";
import { SESSION_EXPIRED_ERROR, TOKEN_EXPIRATION } from "@services/constants";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { Style } from "@styles/index";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AccessibilityInfo, Alert, Keyboard, Platform } from "react-native";
import { useDispatch } from "react-redux";
import { setAuthenticated, setRegionConfig } from "@redux/app/app.actions";
import { loginUserSuccess } from "@redux/user/user.actions";
import { setToken } from "@services/storage";
import { LoginScreen } from "@screens";
import { navigateToRoute, toLoginUserSuccessPayload, validatePassword } from "./login.helpers";
import { REGION, region as regionService, t } from "@locale";
import { Navigation } from "@navigation/main";
import { validateEmail } from "@utils/email";
import { useMutatationAllRegions } from "@hooks";
import DeviceInfo from "react-native-device-info";
import client from "@graphql/_core/client";
import { gql, IntercomHashMethod, LoginMethod } from "@graphql/__generated";
import { IFeature } from "@redux/user/user.types";
import { reduceUserFeatures } from "@redux/user/user.helpers";
import { VoidFunction } from "@utils";

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

  const goToNext = useCallback(
    async ({
      authorised,
      onboarded,
      userFeatures,
    }: {
      authorised: boolean;
      onboarded: boolean;
      userFeatures: IFeature;
    }) => {
      const { tempGameEnableReleaseYuHealthV3, tempShowSignUpRewardFirst } = userFeatures || {};

      Keyboard.dismiss();

      const onFinalDone = async () => {
        await setAuthenticatedRoot(() => dispatch(setAuthenticated()));
      };

      const onboardingNavigationBuilder = (next?: VoidFunction) => () => {
        return navigateToRoute(componentId, ROUTES.onboardingSignUpReward, next);
      };

      const connectNavigationBuilder = (next?: VoidFunction) => () => {
        const route = tempGameEnableReleaseYuHealthV3 ? ROUTES.yuHealthConnect : ROUTES.onboardingFitKitConnect;

        return navigateToRoute(componentId, route, next);
      };

      const actionOrder: (VoidFunction | ((next?: VoidFunction) => VoidFunction))[] = [];

      if (!onboarded && tempShowSignUpRewardFirst) {
        actionOrder.push(onboardingNavigationBuilder);
      }

      if (!authorised || (tempGameEnableReleaseYuHealthV3 && !Style.isIPad())) {
        actionOrder.push(connectNavigationBuilder);
      }

      if (!onboarded && !tempShowSignUpRewardFirst) {
        actionOrder.push(onboardingNavigationBuilder);
      }

      actionOrder.push(onFinalDone);

      const action = actionOrder.reduceRight((acc, curr) => (acc === null ? curr : curr(acc)), null) as VoidFunction;

      action();
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
        Alert.alert(t("screens.login.accessibility.alert_error_title"), errorMessage);
      }
    },
    [isUsingOtp]
  );

  const loginForRegion = useCallback(
    async (r: REGION, loginOptions = logins) => {
      // let's persist the region and config
      regionService.setRegion(r);

      // fetch the config

      const response = await client().query({
        query: gql("GetPublicYuApiConfigDocument"),
        fetchPolicy: "no-cache",
      });

      if (response?.data?.config?.mixpanelKey) {
        await regionService.setConfig(response.data.config);
      }

      dispatch(setRegionConfig({ shouldFetchConfig: false }));

      const needle = loginOptions.find((d) => d.region === r);
      if (needle?.data?.loginUser?.token) {
        const features = needle?.data?.loginUser?.user?.userFeatures;

        await setToken(needle.data.loginUser.token);
        dispatch(loginUserSuccess(toLoginUserSuccessPayload(needle.data)));

        const showHealthConnect =
          !features.some((f) => f.name === "tempGameEnableReleaseYuHealthV3") && fitkitAuthorised;
        // no need to send the user to healthkit-connect if device is an ipad
        await goToNext({
          authorised: Style.isIPad() ? true : showHealthConnect,
          onboarded: needle?.data?.loginUser?.user?.redeemedOnboarding,
          userFeatures: features.reduce(reduceUserFeatures, {}),
        });
      } else {
        handleError(t("screens.login.accessibility.alert_error_default_message"));
      }
    },
    [logins, fitkitAuthorised, dispatch, goToNext, handleError]
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
          await loginForRegion(results[0].region, results);
          return;
        }
      } catch (e) {
        handleError(trimGraphQLError(e?.message));
      }
    }
  }, [email, isUsingOtp, password, otp, handleError, isFormValid, loginUser, loginForRegion]);

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
            onSelect: (r: REGION) => loginForRegion(r),
          }
        : undefined,
    // Logins is mutated (it's a ref)! Don't change the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [logins.length, loginForRegion]
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
