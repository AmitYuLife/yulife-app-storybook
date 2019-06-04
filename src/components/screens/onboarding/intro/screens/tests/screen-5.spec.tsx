import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Screen5 from "../screen-5";

const defaultProps = {
    onPressNext: jest.fn(),
    onPressPrevious: jest.fn()
};

describe("Screen5", () => {
    it("should render", () => {
        const actual = shallow(<Screen5 {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
