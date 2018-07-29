import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import { LoginScreen } from "../../organisms/screens";
import { validateEmail, validatePassword } from "./login.helpers";

// const TOKEN_EXPIRATION = 365 * 24 * 60 * 60;

interface IOwnProps {
    componentId: string;
}

export interface IState {
    email: string;
    emailError: string;
    loggingIn: boolean;
    loginError: string;
    password: string;
    passwordError: string;
}

type Props = IOwnProps;

export class LoginContainer extends Component<Props, IState> {

    public state: IState = {
        email: "",
        emailError: "",
        loggingIn: false,
        loginError: "",
        password: "",
        passwordError: "",
    };

    // public componentDidMount() {
    //     // TODO logging
    //     Logger.logEvent("Page View", { "Page Name": "Login" });

    //     this.checkLoggedIn(this.props.isLoggedIn);
    // }

    // public componentDidUpdate(prevProps: Props) {
    //     this.checkLoggedIn(this.props.isLoggedIn);

    //     if (this.props.loginError !== prevProps.loginError) {
    //         this.setState({ loginError: this.props.loginError, loggingIn: false });
    //     }
    // }

    public render() {
        const {
            email,
            emailError,
            loggingIn,
            loginError,
            passwordError,
            password,
        } = this.state;

        return (
            <LoginScreen
                email={email}
                emailError={emailError}
                isLoggingIn={loggingIn}
                loginError={loginError}
                onEmailChange={this.onEmailChange}
                onForgotPress={this.onForgotPasswordPress}
                onLogInPress={this.onLogInPress}
                onPasswordChange={this.onPasswordChange}
                onSignUpPress={this.onSignUpPress}
                password={password}
                passwordError={passwordError}
            />
        );
    }

    private onLogInPress = () => {
        if (this.isFormValid()) {
            const { email, password } = this.state;

            this.setState({ loggingIn: true, loginError: "" });
            // this.props.loginUser({
            //     email,
            //     method: LoginMethod.PASSWORD,
            //     password,
            //     tokenExpiration: TOKEN_EXPIRATION,
            // });
            Navigation.push(this.props.componentId, {
                component: {
                    name: "yulife.onboarding.FitKitConnect"
                }
            });
        }
    }

    private onSignUpPress = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "yulife.SignUp"
            }
        });
    }

    // TODO update this path when this screen exists
    private onForgotPasswordPress = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "yulife.ResetPassword"
            }
        });
    }

    // private checkLoggedIn(isLoggedIn: boolean) {
    //     if (isLoggedIn) {
    //         this.props.history.replace("/connect-kit");
    //     }
    // }

    private onEmailChange = (email: string) => {
        const emailError = validateEmail(email);

        this.setState({ email, emailError, loginError: "" });
    }

    private onPasswordChange = (password: string) => {
        const passwordError = validatePassword(password);

        this.setState({ password, passwordError, loginError: "" });
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
