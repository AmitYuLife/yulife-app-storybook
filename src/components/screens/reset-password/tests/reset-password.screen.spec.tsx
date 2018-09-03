import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ResetPassword from "../reset-password.screen";

const defaultProps = {
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
});
