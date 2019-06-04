import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import IntroScreen from "../intro.screen";

const defaultProps = {
    onPressLastCta: jest.fn()
};

describe("IntroScreen", () => {
    it("should render", () => {
        const actual = shallow(<IntroScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
