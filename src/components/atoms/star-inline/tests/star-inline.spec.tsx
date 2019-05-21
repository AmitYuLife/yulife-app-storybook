import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import StarInline from "../star-inline";

describe("Star Inline SVG", () => {
    it("should render without props", () => {
        const actual = shallow(<StarInline />);

        expect(actual).toMatchSnapshot();
    });

    it("should render filled star", () => {
        const actual = shallow(<StarInline filled={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render filled star with height of 50", () => {
        const actual = shallow(<StarInline filled={true} style={{ height: 50 }} />);

        expect(actual).toMatchSnapshot();
    });
});
