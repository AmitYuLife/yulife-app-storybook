import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ResetPassword from "../reset-password.screen";

const defaultProps = {
    disableSubmit: false,
    email: "",
    emailError: "",
    isSubmitting: false,
    onCancelPress: jest.fn(),
    onEmailChange: jest.fn(),
    onSubmitPress: jest.fn()
};

describe("ResetPassword", () => {

    it("should render as default", () => {
        const actual = shallow(
            <ResetPassword
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render as submitting", () => {
        const actual = shallow(
            <ResetPassword
                {...defaultProps}
                isSubmitting={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render as submit button is disabled", () => {
        const actual = shallow(
            <ResetPassword
                {...defaultProps}
                disableSubmit={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
