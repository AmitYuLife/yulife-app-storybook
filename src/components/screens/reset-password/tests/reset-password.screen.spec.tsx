import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ResetPassword from "../reset-password.screen";

const defaultProps = {
    onCancelPress: jest.fn(),
    onSubmitPress: jest.fn()
};

describe("ResetPassword", () => {

    it("should render", () => {
        const actual = shallow(
            <ResetPassword
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
