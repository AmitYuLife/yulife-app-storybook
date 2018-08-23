import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import SignUpScreen from "../sign-up.screen";

const filler = {
    error: "",
    loading: false,
    onError: jest.fn(),
    onLoad: jest.fn(),
    onLoadEnd: jest.fn(),
    onLoadStart: jest.fn(),
    onMessage: jest.fn(),
};

describe("SignUpScreen", () => {

    it("should render default props", () => {

        const actual = shallow(
            <SignUpScreen
                {...filler}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with loading", () => {

        const actual = shallow(
            <SignUpScreen
                {...filler}
                loading={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with error", () => {

        const actual = shallow(
            <SignUpScreen
                {...filler}
                error="There was an error"
            />
        );

        expect(actual).toMatchSnapshot();
    });

});
