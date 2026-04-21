/* eslint-disable react-compiler/react-compiler -- has other React ESLint rules disabled */
import LoginPasswordScreen from "@components/screens/login/login-password/login-password.screen";
import { gql, IntercomHashMethod, LoginMethod } from "@graphql/__generated";
import { useBackHandler, useMutatationAllRegions } from "@hooks";
import { REGION, t } from "@locale";
import { TOKEN_EXPIRATION } from "@services/constants";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import Logger from "@services/logging/logger";
import { memo, useCallback, useMemo, useState } from "react";
import { AccessibilityInfo, Alert, Keyboard, Platform } from "react-native";
import { getUniqueDeviceId } from "@utils";
import { Navigation } from "@navigation/main";
import { applyLoginSession } from "./login.helpers";
import { useDispatch } from "react-redux";
import { first } from "lodash";

interface Props {
  componentId: string;
  email: string;

  // we pass in which regions returned hasSetPassword: true
  // so we minimize how many regions we need to query to attempt login
  regions: REGION[];
}

const LoginPasswordContainer = ({ componentId, email, regions }: Props) => {
  "use no memo";
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading: fitkitLoading } = useFitKit();

  const handlePressBack = useCallback(() => {
    Keyboard.dismiss();
    Navigation.pop(componentId);
    return true;
  }, [componentId]);

  useBackHandler(handlePressBack);

  const {
    mutate: loginUser,
    result: { lastError: loginError, loading: isSubmitting, data: loginResponses },
  } = useMutatationAllRegions(gql("LoginUserDocument"), undefined, regions);

  const handleError = useCallback(async (errorMessage: string) => {
    const isScreenReaderEnabled = await AccessibilityInfo.isScreenReaderEnabled();
    if (isScreenReaderEnabled) {
      Alert.alert(t("screens.login.accessibility.alert_error_title"), errorMessage);
    }
  }, []);

  const handleSubmit = useCallback(async () => {
    try {
      // TODO - consider adding captcha?

      const uniqueDeviceId = await getUniqueDeviceId();

      const results = await loginUser({
        variables: {
          email: email.toLowerCase(),
          intercomHashMethod: Platform.OS as IntercomHashMethod,
          method: LoginMethod.Password,
          password,
          tokenExpiration: TOKEN_EXPIRATION,
          uniqueDeviceId,
        },
      });

      if (results.length === 1) {
        const result = first(results);
        await applyLoginSession({
          loginResponse: result,
          region: result?.region,
          componentId,
          dispatch,
        });
        Keyboard.dismiss();
        return;
      }

      // if more than one result is returned, the `regionSelect` memo outside will handle the region selection
    } catch (e) {
      // error display to user is handled via lastError
      handleError(e);
      Logger.error(e, { file: "login-password.container" });
    }
  }, [email, password, loginUser, handleError, componentId, dispatch]);

  // if there's more than 1 results, return
  const regionSelect = useMemo(
    () =>
      loginResponses.length > 1
        ? {
            restrictTo: loginResponses.map((d) => d.region),
            onSelect: (r: REGION) => {
              return applyLoginSession({
                loginResponse: loginResponses.find((d) => d.region === r),
                region: r,
                componentId,
                dispatch,
              }).catch((err) => handleError(err.message));
            },
          }
        : undefined,
    // loginResponses is mutated (it's a ref)! Don't change the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loginResponses.length, componentId, dispatch]
  );

  return (
    <LoginPasswordScreen
      password={password}
      validationError={""} // TODO - validation errors
      isSubmitting={isSubmitting || fitkitLoading}
      onPressBack={handlePressBack}
      onPressSubmit={handleSubmit}
      onPasswordChange={setPassword}
      loginError={loginError}
      regionSelect={regionSelect}
      // TODO - consider adding captcha?
    />
  );
};

export default memo(LoginPasswordContainer);
