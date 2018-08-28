import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Heading from "../heading";

describe("Heading", () => {

    it("should render the default size without passing props", () => {
        const actual = shallow(
            <Heading
                label="test"
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render the large size", () => {
        const actual = shallow(
            <Heading
                size={Heading.Sizes.LARGE}
                label="test"
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render as bold", () => {
        const actual = shallow(
            <Heading
                bold={true}
                label="test"
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
