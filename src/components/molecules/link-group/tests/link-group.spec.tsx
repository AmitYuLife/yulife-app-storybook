import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import LinkGroup from "../link-group";

const data = [
    {
        label: "Forgot password",
        onPress: jest.fn()
    },
    {
        label: "Sign up",
        onPress: jest.fn()
    }
];

describe("LinkGroup", () => {

    it("should render", () => {
        const actual = shallow(
            <LinkGroup
                data={data}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
