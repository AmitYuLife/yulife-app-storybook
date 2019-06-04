import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Screen2 from "../screen-2";

const defaultProps = {
    onPressNext: jest.fn(),
    onPressPrevious: jest.fn()
};

describe("Screen2", () => {
    it("should render", () => {
        const actual = shallow(<Screen2 {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
