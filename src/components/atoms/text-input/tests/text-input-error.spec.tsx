import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import TextInputError from "../text-input-error";

describe("TextInputError", () => {

    it("should render email textinput", () => {

        const actual = shallow(
            <TextInputError>Testing Error Message</TextInputError>
        );

        expect(actual).toMatchSnapshot();
    });
});
