import { shallow } from "enzyme";
import * as React from "react";
import { Platform } from "react-native";
import LoginScreen, { IProps } from "../login.screen";

const defaultProps = {
    disabled: false,
    email: "",
    emailError: "",
    isLoggingIn: false,
    loginError: "",
    onEmailChange: jest.fn(),
    onForgotPress: jest.fn(),
    onLogInPress: jest.fn(),
    onPasswordChange: jest.fn(),
    onResetPasswordPress: jest.fn(),
    onSignUpPress: jest.fn(),
    password: "",
    passwordError: ""
} as IProps;

describe("LoginScreen", () => {

    it("should render", () => {
        const actual = shallow(
            <LoginScreen
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render on Android", () => {
        Platform.OS = "android";
        const actual = shallow(
            <LoginScreen
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render when showingKeyboard", () => {
        const actual = shallow(
            <LoginScreen
                {...defaultProps}
            />
        );
        actual.setState({ isShowingKeyboard: true });

        expect(actual).toMatchSnapshot();
    });

    it("should render with login error", () => {
        const actual = shallow(
            <LoginScreen
                {...defaultProps}
                loginError="Bergatron error"
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render as logging in", () => {
        const actual = shallow(
            <LoginScreen
                {...defaultProps}
                isLoggingIn={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
