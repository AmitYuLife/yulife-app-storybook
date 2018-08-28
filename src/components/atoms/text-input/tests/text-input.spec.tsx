import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import TextInput from "../text-input";

describe("TextInput", () => {

    it("should render email textinput", () => {
        const actual = shallow(
            <TextInput
                value="test"
                onChange={jest.fn()}
                type={TextInput.Types.EMAIL}
            />
        );
        expect(actual).toMatchSnapshot();
    });

    it("should render password textinput", () => {
        const actual = shallow(
            <TextInput
                value="test"
                onChange={jest.fn()}
                type={TextInput.Types.PASSWORD}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with error message", () => {
        const actual = shallow(
            <TextInput
                value="test"
                onChange={jest.fn()}
                type={TextInput.Types.PASSWORD}
                errorMessage="error"
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should handle focus", () => {
        const actual = shallow(
            <TextInput
                value="test"
                onChange={jest.fn()}
                type={TextInput.Types.PASSWORD}
                errorMessage="error"
            />
        );
        /*tslint:disable-next-line*/
        const instance = actual.instance() as any;
        const a = instance.handleFocus();

        expect(typeof a === "function").toBe(true);
    });
});
