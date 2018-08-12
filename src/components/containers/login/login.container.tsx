import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import { LoginMethod, loginUser_loginUser } from "../../../graphql/_core/schema";
import LoginUserMutation, { loginUserGql } from "../../../graphql/user/loginUser.gql";
import { setToken, setUser } from "../../../services/storage";
import { LoginScreen } from "../../screens";
import { validateEmail, validatePassword } from "./login.helpers";

const trimGraphQLError = (message: string) => message.replace(/^GraphQL error: /, "");

const TOKEN_EXPIRATION = 365 * 24 * 60 * 60;

interface IOwnProps {
    componentId: string;
}

export interface IState {
    email: string;
    emailError: string;
    loggingIn: boolean;
    password: string;
    passwordError: string;
}

type Props = IOwnProps;

export class LoginContainer extends Component<Props, IState> {
    public state: IState = {
        email: "",
        emailError: "",
        loggingIn: false,
        password: "",
        passwordError: "",
    };

    // public componentDidMount() {
    //     // TODO logging
    //     Logger.logEvent("Page View", { "Page Name": "Login" });
    // }

    public render() {
        const { email, emailError, loggingIn, passwordError, password } = this.state;

        return (
            <LoginUserMutation mutation={loginUserGql}>
                {(loginUser, { error }) => {
                    const handleSubmit = async () => {
                        if (this.isFormValid()) {
                            try {
                                const result = await loginUser({
                                    variables: {
                                        email,
                                        method: LoginMethod.PASSWORD,
                                        password,
                                        tokenExpiration: TOKEN_EXPIRATION,
                                    },
                                });

                                if (result && result.data && result.data.loginUser) {
                                    await this.onLogIn(result.data.loginUser);
                                }
                            } catch (e) {
                                // tslint:disable-next-line
                                console.log(e);
                            }
                        }
                    };

                    return (
                        <LoginScreen
                            email={email}
                            emailError={emailError}
                            isLoggingIn={loggingIn}
                            loginError={error && trimGraphQLError(error.message)}
                            onEmailChange={this.onEmailChange}
                            onResetPasswordPress={this.onResetPassword}
                            onLogInPress={handleSubmit}
                            onPasswordChange={this.onPasswordChange}
                            onSignUpPress={this.onSignUp}
                            password={password}
                            passwordError={passwordError}
                        />
                    );
                }}
            </LoginUserMutation>
        );
    }

    private onLogIn = async (result: loginUser_loginUser) => {
        this.setState({ loggingIn: true }, async () => {
            await setUser(result.user);
            await setToken(result.token);
            await Navigation.push(this.props.componentId, {
                component: {
                    name: "yulife.onboarding.FitKitConnect",
                },
            });
        });
    }

    private onSignUp = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "yulife.SignUp",
            },
        });
    }

    private onResetPassword = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "yulife.ResetPassword",
            },
        });
    }

    private onEmailChange = (email: string) => {
        const emailError = validateEmail(email);

        this.setState({ email, emailError });
    }

    private onPasswordChange = (password: string) => {
        const passwordError = validatePassword(password);

        this.setState({ password, passwordError });
    }

    private isFormValid = () => {
        const { email, password } = this.state;
        let formIsValid = true;

        const emailErrorMessage = validateEmail(email);
        const passwordErrorMessage = validatePassword(password);

        if (emailErrorMessage || passwordErrorMessage) {
            formIsValid = false;
        }

        return formIsValid;
    }
}

export default LoginContainer;
