import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { LoginMethod, LoginUser } from "../../../graphql/_core/schema";
import LoginUserMutation, { loginUserGql, LoginUserMutationFunction } from "../../../graphql/user/loginUser.gql";
import { ROUTES } from "../../../navigation/routes";
import { loginUserSuccess, LoginUserSuccessAction } from "../../../redux/user/user.actions";
import { LoginScreen } from "../../screens";
import { validateEmail, validatePassword } from "./login.helpers";

const trimGraphQLError = (message: string) => message.replace(/^GraphQL error: /, "");

const TOKEN_EXPIRATION = 365 * 24 * 60 * 60;

interface IOwnProps {
    componentId: string;
}

interface IConnectedDispatch {
    loginUserSuccess: (results: LoginUser) => LoginUserSuccessAction;
}

export interface IState {
    email: string;
    emailError: string;
    password: string;
    passwordError: string;
}

type Props = IOwnProps & IConnectedDispatch;

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
            <LoginUserMutation mutation={loginUserGql}>
                {(loginUser, { error, loading }) => {
                    return (
                        <LoginScreen
                            email={email}
                            emailError={emailError}
                            isLoggingIn={loading}
                            loginError={error && trimGraphQLError(error.message)}
                            onEmailChange={this.onEmailChange}
                            onResetPasswordPress={this.onResetPassword}
                            onLogInPress={() => this.onLogIn(loginUser)}
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

    private onLogIn = async (loginUser: LoginUserMutationFunction) => {
        const { email, password } = this.state;

        if (this.isFormValid()) {
            try {
                const results = await loginUser({
                    variables: {
                        email,
                        method: LoginMethod.PASSWORD,
                        password,
                        tokenExpiration: TOKEN_EXPIRATION
                    }
                });

                if (results && results.data) {
                    this.props.loginUserSuccess(results.data);
                    await Navigation.push(this.props.componentId, {
                        component: {
                            id: ROUTES.onboardingFitKitConnect,
                            name: ROUTES.onboardingFitKitConnect
                        }
                    });
                }
            } catch (e) {
                // tslint:disable-next-line
                console.log(e);
            }
        }
    }

    private onSignUp = async () => {
        await Navigation.push(this.props.componentId, {
            component: {
                id: ROUTES.signUp,
                name: ROUTES.signUp
            }
        });
    }

    private onResetPassword = async () => {
        await Navigation.push(this.props.componentId, {
            component: {
                id: ROUTES.resetPassword,
                name: ROUTES.resetPassword
            }
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
        let formIsValid = true;
        const { email, password } = this.state;

        if (validateEmail(email) || validatePassword(password)) {
            formIsValid = false;
        }

        return formIsValid;
    }
}

const mapDispatchToProps = {
    loginUserSuccess
};

export default connect<{}, IConnectedDispatch>(
    null,
    mapDispatchToProps
)(LoginContainer);
