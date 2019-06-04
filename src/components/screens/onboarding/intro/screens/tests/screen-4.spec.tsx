import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Screen4 from "../screen-4";

const defaultProps = {
    onPressNext: jest.fn(),
    onPressPrevious: jest.fn()
};

describe("Screen4", () => {
    it("should render", () => {
        const actual = shallow(<Screen4 {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
