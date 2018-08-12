import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ResetPassword from "../reset-password";

const filler = {
    onCancelPress: (): null => null,
    onSubmitPress: (): null => null,
};

describe("ResetPassword", () => {

    it("should render", () => {

        const actual = shallow(
            <ResetPassword {...filler} />
        );

        expect(actual).toMatchSnapshot();
    });
});
