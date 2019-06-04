import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import SectionHeading from "../section-heading";

describe("SectionHeading", () => {
    it("should render", () => {
        const actual = shallow(<SectionHeading heading="heading" />);

        expect(actual).toMatchSnapshot();
    });
});
