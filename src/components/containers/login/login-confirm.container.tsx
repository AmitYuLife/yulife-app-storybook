import { region, REGION, t } from "@locale";
import { Navigation } from "@navigation/main";
import LoginConfirmScreen from "@components/screens/login/login-confirm/login-confirm.screen";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { gql, IntercomHashMethod, LoginMethod } from "@graphql/__generated";
import { ActionSheetIOS, Alert, Platform } from "react-native";
import { getUniqueDeviceId, isiOS } from "@utils";
import { TOKEN_EXPIRATION } from "@services/constants";
import { applyLoginSession } from "./login.helpers";
import { useDispatch } from "react-redux";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { ROUTES } from "@navigation/constants";
import { useCaptcha } from "@organisms/captcha-input";
import { useSendMagicLink } from "./send-magic-link.hook";
import { handleOpenWebView } from "@navigation/utils";
import Logger from "@services/logging/logger";

interface Props {
  componentId: string;
  email: string;

  // response from the sendMagicLink mutation
  regionResponses?: {
    hasSetPassword: boolean;
    region: REGION;
  }[];

  // these props are set if an OTP was passed in
  otp?: string;
  region?: REGION;
}

const LoginConfirmContainer = ({ componentId, ...props }: Props) => {
  const [loginUser] = useMutation(gql("LoginUserDocument"));
  const dispatch = useDispatch();
  const { loading: fitkitLoading } = useFitKit();
  const captcha = useCaptcha(region.getCaptchaConfig());

  const [isRedeemingOtp, setIsRedeemingOtp] = useState(false);

  const otpRef = useRef<string>("");
  const hasOpenedEmailAppRef = useRef(false);

  const hasNavigatedAwayRef = useRef(false);

  const showLoginWithPassword = props.regionResponses?.some((r) => r.hasSetPassword);

  const onNavigateBack = useCallback(() => {
    if (hasNavigatedAwayRef.current) {
      return;
    }

    hasNavigatedAwayRef.current = true;
    Navigation.pop(componentId);
  }, [componentId]);

  const setHasOpenedEmailApp = useCallback(() => {
    hasOpenedEmailAppRef.current = true;
  }, []);

  const { sendMagicLink, loading: isResending } = useSendMagicLink({
    email: props.email,
    captcha,
    onFailure: (error) => {
      Alert.alert(t("screens.login_confirm.error_title"), error, [
        { text: t("labels.cta.ok"), onPress: onNavigateBack },
      ]);
    },
  });

  useEffect(() => {
    if (!props.otp || !props.email || !props.region) {
      return;
    }

    if (fitkitLoading) {
      // don't redeem the OTP until the fitkit is loaded
      return;
    }

    if (otpRef.current === props.otp) {
      // prevent re-running the mutation
      return;
    }

    otpRef.current = props.otp;

    async function handleOTP(payload: { otp: string; email: string; region: REGION }) {
      setIsRedeemingOtp(true);

      if (isiOS() && hasOpenedEmailAppRef.current) {
        ActionSheetIOS.dismissActionSheet();
        hasOpenedEmailAppRef.current = false;
      }

      let result;

      try {
        // set the region before logging in for the GQL client
        region.setRegion(payload.region);

        const uniqueDeviceId = await getUniqueDeviceId();

        result = await loginUser({
          variables: {
            email: payload.email.toLowerCase(),
            intercomHashMethod: Platform.OS as IntercomHashMethod,
            method: LoginMethod.Otp,
            password: payload.otp,
            tokenExpiration: TOKEN_EXPIRATION,
            uniqueDeviceId,
          },
        });

        if (result.data?.loginUser?.completionUrl) {
          // we need to open the completion URL in the webview
          handleOpenWebView({
            uri: result.data.loginUser.completionUrl,
            title: t("screens.login_confirm.webview_title"),
            onAppHandBack: (appHandbackPayload) => {
              Navigation.dismissModal(ROUTES.webView);

              if (appHandbackPayload.type === "otp") {
                handleOTP({
                  otp: appHandbackPayload.otp,
                  email: appHandbackPayload.email,
                  region: appHandbackPayload.region,
                });
              }
            },
          });
          return;
        }

        if (result.data?.loginUser?.token) {
          await applyLoginSession({
            loginResponse: result,
            region: props.region,
            componentId,
            dispatch,
          });
          hasNavigatedAwayRef.current = true;
        }
      } catch (error) {
        let errorToLog = error;
        const isNetworkError = /Network request failed/.test(error?.message || "");
        if (isNetworkError) {
          // our bugsnag logger filters out errors with that message - let's log it as a separate error
          errorToLog = new Error("Login network error");
        }

        Logger.error(errorToLog, {
          file: "login-confirm.container",
          region: payload.region,
          loginUserSuccess: !!result,
          userId: result?.data?.loginUser?.user?.id,
        });

        // if an error occurs, pop back one screen after closing the native alert
        Alert.alert(t("screens.login_confirm.error_title"), error.message, [
          { text: t("labels.cta.ok"), onPress: onNavigateBack },
        ]);
      } finally {
        setIsRedeemingOtp(false);
      }
    }

    handleOTP({
      otp: props.otp,
      email: props.email,
      region: props.region,
    });
  }, [props.otp, props.email, props.region, loginUser, componentId, onNavigateBack, dispatch, fitkitLoading]);

  return (
    <LoginConfirmScreen
      email={props.email}
      captcha={captcha}
      isResending={isResending}
      isRedeemingOtp={isRedeemingOtp}
      showLoginWithPassword={showLoginWithPassword}
      onPressResend={sendMagicLink}
      onPressBack={onNavigateBack}
      onPressLoginWithPassword={() =>
        Navigation.push(componentId, {
          component: {
            name: ROUTES.loginPassword,
            passProps: {
              email: props.email,
              regions: props.regionResponses?.filter((r) => r.hasSetPassword).map((r) => r.region),
            },
          },
        })
      }
      setHasOpenedEmailApp={setHasOpenedEmailApp}
    />
  );
};

export default memo(LoginConfirmContainer);
