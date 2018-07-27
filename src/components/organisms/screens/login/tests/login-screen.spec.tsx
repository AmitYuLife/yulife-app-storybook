import { shallow } from "enzyme";
import * as React from "react";
import { Platform } from "react-native";
import LoginScreen, { IProps } from "../login-screen";

const filler = {
    onForgotPress: (): null => null,
    onLogInPress: (): null => null,
    onSignUpPress: (): null => null,
} as IProps;

describe("LoginScreen", () => {

    it("should render", () => {

        const actual = shallow(<LoginScreen {...filler} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render on Android", () => {

        Platform.OS = "android";
        const actual = shallow(<LoginScreen {...filler} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render when showingKeyboard", () => {

        const actual = shallow(
            <LoginScreen {...filler} />
        );
        actual.setState({ isShowingKeyboard: true });

        expect(actual).toMatchSnapshot();
    });
});
