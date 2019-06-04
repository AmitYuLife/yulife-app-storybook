import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import StarRating from "../star-rating";

const defaultProps = {
    onSelect: jest.fn(),
    rating: 3
};

describe("StarRating", () => {
    it("should render", () => {
        const actual = shallow(<StarRating {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with 5 yellow stars", () => {
        const actual = shallow(<StarRating {...defaultProps} rating={5} />);

        expect(actual).toMatchSnapshot();
    });
});
