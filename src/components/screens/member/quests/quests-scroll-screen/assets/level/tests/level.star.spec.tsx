import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Star from "../level.star";

describe("Star", () => {
    it("should render", () => {
        const actual = shallow(<Star />);

        expect(actual).toMatchSnapshot();
    });
});
