import { region, REGION, t } from "@locale";
import { Navigation } from "react-native-navigation";
import LoginConfirmScreen from "@components/screens/login/login-confirm/login-confirm.screen";
import { memo, useEffect, useRef } from "react";
import { useMutation } from "@apollo/client";
import { gql, IntercomHashMethod, LoginMethod } from "@graphql/__generated";
import { Alert, Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import { TOKEN_EXPIRATION } from "@services/constants";
import { applyLoginSession } from "./login.helpers";
import { useDispatch } from "react-redux";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { ROUTES } from "@navigation/constants";

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
  const { authorised: fitkitAuthorised, loading: fitkitLoading } = useFitKit();

  const otpRef = useRef<string>("");

  const showLoginWithPassword = props.regionResponses?.some((r) => r.hasSetPassword);

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

    async function handleOTP() {
      try {
        // set the region before logging in for the GQL client
        region.setRegion(props.region);

        const uniqueDeviceId = await DeviceInfo.getUniqueId();

        const result = await loginUser({
          variables: {
            email: props.email.toLowerCase(),
            intercomHashMethod: Platform.OS as IntercomHashMethod,
            method: LoginMethod.Otp,
            password: props.otp,
            tokenExpiration: TOKEN_EXPIRATION,
            uniqueDeviceId,
          },
        });

        if (result.data?.loginUser?.token) {
          await applyLoginSession(result, props.region, componentId, dispatch, fitkitAuthorised);
        }
      } catch (error) {
        // if an error occurs, pop back one screen after closing the native alert
        Alert.alert(t("screens.login-confirm.error-title"), error.message, [
          { text: t("labels.cta.ok"), onPress: () => Navigation.pop(componentId) },
        ]);
      }
    }

    handleOTP();
  }, [props.otp, props.email, props.region, loginUser, componentId, dispatch, fitkitAuthorised, fitkitLoading]);

  return (
    <LoginConfirmScreen
      email={props.email}
      showLoginWithPassword={showLoginWithPassword}
      onPressBack={() => Navigation.pop(componentId)}
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
    />
  );
};

export default memo(LoginConfirmContainer);
