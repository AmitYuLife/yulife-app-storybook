import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Intro from "../intro";

const defaultProps = {
    isShowingTopBar: true,
    navBarIndex: 0,
    onMomentumScrollEnd: jest.fn(),
    onPressNext: jest.fn(),
    onPressPrevious: jest.fn(),
    onSetRef: jest.fn()
};

describe("Intro", () => {
    it("should render", () => {
        const actual = shallow(<Intro {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render w/o topbar", () => {
        const actual = shallow(<Intro {...defaultProps} isShowingTopBar={false} />);

        expect(actual).toMatchSnapshot();
    });
});
