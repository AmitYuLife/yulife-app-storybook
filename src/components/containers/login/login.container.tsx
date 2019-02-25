import { ROUTES } from "@navigation/constants";
import { setNextRoot } from "@navigation/root";
import React, { Component } from "react";
import { Platform } from "react-native";
import { FitKitAvailable } from "react-native-fitkit";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { IntercomHashMethod, LoginMethod } from "../../../graphql/_core/schema";
import LoginUserMutation, { loginUserGql, LoginUserMutationFunction } from "../../../graphql/user/loginUser.gql";
import { loginUserSuccess } from "../../../redux/user/user.actions";
import { setToken } from "../../../services/storage";
import { LoginScreen } from "../../screens";
import { validateEmail, validatePassword } from "./login.helpers";

const trimGraphQLError = (message: string) => message.replace(/^GraphQL error: /, "");

const TOKEN_EXPIRATION = 365 * 24 * 60 * 60;

interface IOwnProps {
    componentId: string;
}

type ConnectedDispatch = typeof mapDispatchToProps;

export interface IState {
    email: string;
    emailError: string;
    password: string;
    passwordError: string;
}

type Props = IOwnProps & ConnectedDispatch;

export class LoginContainer extends Component<Props, IState> {
    public state: IState = {
        email: "",
        emailError: "",
        password: "",
        passwordError: ""
    };

    // public componentDidMount() {
    //     // TODO logging
    //     Logger.logEvent("Page View", { "Page Name": "Login" });
    // }

    public render() {
        const { email, emailError, passwordError, password } = this.state;

        return (
            <FitKitAvailable>
                {({ authorised }) => (
                    <LoginUserMutation mutation={loginUserGql}>
                        {(loginUser, { error, loading }) => {
                            return (
                                <LoginScreen
                                    disabled={!this.isFormValid()}
                                    email={email}
                                    emailError={emailError}
                                    isLoggingIn={loading}
                                    loginError={error && trimGraphQLError(error.message)}
                                    onEmailChange={this.onEmailChange}
                                    onResetPasswordPress={this.onResetPassword}
                                    onLogInPress={() => this.onLogIn(loginUser, authorised)}
                                    onPasswordChange={this.onPasswordChange}
                                    onSignUpPress={this.onSignUp}
                                    password={password}
                                    passwordError={passwordError}
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
                        name: route
                    }
                });
                return;
            }

            setNextRoot();
        };

        if (!authorised) {
            const route = ROUTES.onboardingFitKitConnect;
            Navigation.push(componentId, {
                component: {
                    id: route,
                    name: route,
                    passProps: {
                        navigateToNext
                    }
                }
            });
            return;
        }

        navigateToNext();
    };

    private onLogIn = async (loginUser: LoginUserMutationFunction, authorised: boolean) => {
        const { email, password } = this.state;

        if (this.isFormValid()) {
            try {
                const results = await loginUser({
                    variables: {
                        email: email.toLowerCase(),
                        intercomHashMethod: Platform.OS as IntercomHashMethod,
                        method: LoginMethod.PASSWORD,
                        password,
                        tokenExpiration: TOKEN_EXPIRATION
                    }
                });

                if (results && results.data && results.data.loginUser && results.data.loginUser.token) {
                    await setToken(results.data.loginUser.token);
                    this.props.loginUserSuccess(results.data);

                    await this.navigateToNext(authorised, results.data.loginUser.user.redeemedOnboarding);
                }
            } catch (e) {
                // tslint:disable-next-line
                console.log(e);
            }
        }
    };

    private onSignUp = async () => {
        await Navigation.push(this.props.componentId, {
            component: {
                id: ROUTES.signUp,
                name: ROUTES.signUp
            }
        });
    };

    private onResetPassword = async () => {
        await Navigation.push(this.props.componentId, {
            component: {
                id: ROUTES.resetPassword,
                name: ROUTES.resetPassword
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

const mapDispatchToProps = {
    loginUserSuccess
};

export default connect<{}, ConnectedDispatch>(
    null,
    mapDispatchToProps
)(LoginContainer);
