import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Screen3 from "../screen-3";

const defaultProps = {
    onPressNext: jest.fn(),
    onPressPrevious: jest.fn()
};

describe("Screen3", () => {
    it("should render", () => {
        const actual = shallow(<Screen3 {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
