import { useMutation } from "@apollo/react-hooks";
import { GQL_MUTATION_LOGIN_USER, LoginUserMutationTuple } from "@graphql/user";
import { bottomTabs, ROUTES } from "@navigation/constants";
import { setAuthenticatedRoot } from "@navigation/root";
import { TOKEN_EXPIRATION } from "@services/constants";
import { FitKitAvailable } from "@services/fitkit/fitkit.service";
import { Style } from "@styles/index";
import React, { useState, useCallback, useMemo } from "react";
import { Keyboard, Platform } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetMobileCopy_getMobileCopy_screens_login as LoginCopy } from "@graphql/_core/schema";
import { LoginMethod, IntercomHashMethod } from "@graphql/_core/schema/globalTypes";
import { IReduxState } from "../../../redux/_core/reducers";
import { setAuthenticated } from "../../../redux/app/app.actions";
import { getCopy } from "../../../redux/copy/copy.selectors";
import { loginUserSuccess } from "../../../redux/user/user.actions";
import { setToken } from "../../../services/storage";
import { LoginScreen } from "../../screens";
import { validateEmail, validatePassword } from "./login.helpers";

const trimGraphQLError = (message: string) => message.replace(/^GraphQL error: /, "");

interface IOwnProps {
  componentId: string;
  otp?: string;
  email?: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IOwnProps & ConnectedState & ConnectedDispatch;

const LoginContainer: React.FC<Props> = ({
  componentId,
  copy,
  otp,
  email: incomingEmail,
  setAuthenticated: dispatchSetAuthenticated,
  loginUserSuccess: dispatchLoginUserSuccess,
}) => {
  const [isUsingOtp, setIsUsingOtp] = useState(otp && otp.length > 10);
  const [email, setEmail] = useState(isUsingOtp ? incomingEmail : "");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState(isUsingOtp ? "PASSWORD" : "");
  const [passwordError, setPasswordError] = useState("");
  const [wasLoginCalled, setWasLogginCalled] = useState(false);

  const isFormValid = useMemo(() => !(validateEmail(email) || validatePassword(password)), [email, password]);
  const [loginUser, { error, loading }]: LoginUserMutationTuple = useMutation(GQL_MUTATION_LOGIN_USER);

  const goToNext = useCallback(async (authorised: boolean, onboarded: boolean) => {
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

      setAuthenticatedRoot(dispatchSetAuthenticated); // TODO: use setNextRoot when the right intro's ready
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
  }, []);

  const onLogIn = useCallback(
    async (authorised: boolean) => {
      const handleError = () => {
        if (isUsingOtp) {
          setWasLogginCalled(false);
          setIsUsingOtp(false);
        }
      };

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

          if (results && results.data && results.data.loginUser && results.data.loginUser.token) {
            await setToken(results.data.loginUser.token);
            dispatchLoginUserSuccess(results.data);

            // no need to send the user to healthkit-connect if device is an ipad
            await goToNext(Style.isIPad() ? true : authorised, results.data.loginUser.user.redeemedOnboarding);
          } else {
            handleError();
          }
        } catch (e) {
          handleError();
        }
      }
    },
    [email, isUsingOtp, password, otp]
  );

  const onResetPassword = useCallback(async () => {
    await Navigation.push(componentId, {
      component: {
        id: ROUTES.resetPassword,
        name: ROUTES.resetPassword,
        options: { bottomTabs },
      },
    });
  }, []);

  const onEmailChange = useCallback((input: string) => {
    setEmailError(validateEmail(input));
    setEmail(input);
  }, []);

  const onPasswordChange = useCallback((input: string) => {
    setPasswordError(validatePassword(input));
    setPassword(input);
  }, []);

  return (
    <FitKitAvailable>
      {({ authorised, loading: fitkitLoading }) => {
        // checking for !fitkitLoading to wait until authorised will be assigned,
        // otherwise it will be assigned with undefined
        // that will lead to infinite loading on FitKitConnect screen.
        if (isUsingOtp && !fitkitLoading && !wasLoginCalled) {
          setWasLogginCalled(true);
          onLogIn(authorised);
        }

        return (
          <LoginScreen
            disabled={!isFormValid || wasLoginCalled}
            email={email}
            emailError={emailError}
            isLoggingIn={loading || wasLoginCalled}
            loginError={error && trimGraphQLError(error.message)}
            onEmailChange={onEmailChange}
            onResetPasswordPress={onResetPassword}
            onLogInPress={() => onLogIn(authorised)}
            onPasswordChange={onPasswordChange}
            password={password}
            passwordError={passwordError}
            copy={copy}
          />
        );
      }}
    </FitKitAvailable>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  copy: getCopy(state, "login") as LoginCopy,
});

const mapDispatchToProps = {
  loginUserSuccess,
  setAuthenticated,
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(LoginContainer);
