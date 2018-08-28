import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ResetPasswordSuccessScreen from "../reset-password-success.screen";

describe("ResetPassword", () => {

    it("should render", () => {
        const actual = shallow(
            <ResetPasswordSuccessScreen
                onLogInPress={jest.fn()}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
