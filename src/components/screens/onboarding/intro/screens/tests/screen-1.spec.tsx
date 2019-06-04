import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Screen1 from "../screen-1";

const defaultProps = {
    onPressNext: jest.fn(),
    onPressPrevious: jest.fn()
};

describe("Screen1", () => {
    it("should render", () => {
        const actual = shallow(<Screen1 {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
