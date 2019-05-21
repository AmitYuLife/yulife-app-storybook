import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import GenericHeading from "../generic-heading";

describe("GenericHeading", () => {
    it("should render", () => {
        const actual = shallow(<GenericHeading heading="TEST" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a subheading", () => {
        const actual = shallow(<GenericHeading heading="TEST" subheading="subheading test" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render without a border", () => {
        const actual = shallow(<GenericHeading heading="TEST" hidesBorder={true} />);

        expect(actual).toMatchSnapshot();
    });
});
