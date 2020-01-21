import { bottomTabs, ROUTES } from "@navigation/constants";
import { setAuthenticatedRoot } from "@navigation/root";
import { TOKEN_EXPIRATION } from "@services/constants";
import { FitKitAvailable } from "@services/fitkit/fitkit.service";
import { Style } from "@styles/index";
import React, { Component } from "react";
import { Keyboard, Platform } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import {
    GetMobileCopy_getMobileCopy_screens_login as LoginCopy,
    IntercomHashMethod,
    LoginMethod
} from "../../../graphql/_core/schema";
import LoginUserMutation, { loginUserGql, LoginUserMutationFunction } from "../../../graphql/user/loginUser.gql";
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

const initialState = {
    email: "",
    emailError: "",
    isUsingOtp: false,
    password: "",
    passwordError: "",
    wasLoginCalled: false
};

type State = typeof initialState;

export class LoginContainer extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        const otpState = {
            email: props.email,
            emailError: "",
            isUsingOtp: true,
            password: "PASSWORD", // show a better formatted password instead of a 200 length OTP
            passwordError: "",
            wasLoginCalled: false
        };

        this.state = props.otp && props.otp.length > 10 ? otpState : initialState;
    }

    public render() {
        const { wasLoginCalled, isUsingOtp, email, emailError, passwordError, password } = this.state;
        const { copy } = this.props;

        return (
            <FitKitAvailable>
                {({ authorised, loading: fitkitLoading }) => (
                    <LoginUserMutation mutation={loginUserGql}>
                        {(loginUser, { error, loading }) => {
                            // checking for !fitkitLoading to wait until authorised will be assigned,
                            // otherwise it will be assigned with undefined
                            // that will lead to infinite loading on FitKitConnect screen.
                            if (isUsingOtp && !fitkitLoading && !wasLoginCalled) {
                                this.setState({ wasLoginCalled: true }, () => this.onLogIn(loginUser, authorised));
                            }

                            return (
                                <LoginScreen
                                    disabled={!this.isFormValid() || wasLoginCalled}
                                    email={email}
                                    emailError={emailError}
                                    isLoggingIn={loading || wasLoginCalled}
                                    loginError={error && trimGraphQLError(error.message)}
                                    onEmailChange={this.onEmailChange}
                                    onResetPasswordPress={this.onResetPassword}
                                    onLogInPress={() => this.onLogIn(loginUser, authorised)}
                                    onPasswordChange={this.onPasswordChange}
                                    password={password}
                                    passwordError={passwordError}
                                    copy={copy}
                                />
                            );
                        }}
                    </LoginUserMutation>
                )}
            </FitKitAvailable>
        );
    }

    private navigateToNext = async (authorised: boolean, onboarded: boolean) => {
        const { componentId } = this.props;
        const navigateToNext = () => {
            if (!onboarded) {
                const route = ROUTES.onboardingSignUpReward;
                Navigation.push(componentId, {
                    component: {
                        id: route,
                        name: route,
                        options: { bottomTabs }
                    }
                });
                return;
            }

            setAuthenticatedRoot(this.props.setAuthenticated); // TODO: use setNextRoot when the right intro's ready
        };

        Keyboard.dismiss();

        if (!authorised) {
            const route = ROUTES.onboardingFitKitConnect;
            Navigation.push(componentId, {
                component: {
                    id: route,
                    name: route,
                    passProps: {
                        navigateToNext
                    },
                    options: { bottomTabs }
                }
            });
            return;
        }

        navigateToNext();
    };

    private onLogIn = async (loginUser: LoginUserMutationFunction, authorised: boolean) => {
        const { email, isUsingOtp, password } = this.state;

        const handleError = () => {
            if (isUsingOtp) {
                this.setState({ wasLoginCalled: false, isUsingOtp: false });
            }
        };

        if (this.isFormValid() || isUsingOtp) {
            try {
                const results = await loginUser({
                    variables: {
                        email: email.toLowerCase(),
                        intercomHashMethod: Platform.OS as IntercomHashMethod,
                        method: isUsingOtp ? LoginMethod.OTP : LoginMethod.PASSWORD,
                        password: isUsingOtp ? this.props.otp : password,
                        tokenExpiration: TOKEN_EXPIRATION
                    }
                });

                if (results && results.data && results.data.loginUser && results.data.loginUser.token) {
                    await setToken(results.data.loginUser.token);
                    this.props.loginUserSuccess(results.data);

                    // no need to send the user to healthkit-connect if device is an ipad
                    await this.navigateToNext(
                        Style.isIPad() ? true : authorised,
                        results.data.loginUser.user.redeemedOnboarding
                    );
                } else {
                    handleError();
                }
            } catch (e) {
                handleError();
            }
        }
    };

    private onResetPassword = async () => {
        await Navigation.push(this.props.componentId, {
            component: {
                id: ROUTES.resetPassword,
                name: ROUTES.resetPassword,
                options: { bottomTabs }
            }
        });
    };

    private onEmailChange = (email: string) => {
        const emailError = validateEmail(email);

        this.setState({ email, emailError });
    };

    private onPasswordChange = (password: string) => {
        const passwordError = validatePassword(password);

        this.setState({ password, passwordError });
    };

    private isFormValid = () => {
        let formIsValid = true;
        const { email, password } = this.state;

        if (validateEmail(email) || validatePassword(password)) {
            formIsValid = false;
        }

        return formIsValid;
    };
}

const mapStateToProps = (state: IReduxState) => ({
    copy: getCopy(state, "login") as LoginCopy
});

const mapDispatchToProps = {
    loginUserSuccess,
    setAuthenticated
};

export default connect<ConnectedState, ConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
