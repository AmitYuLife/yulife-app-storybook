jest.useFakeTimers();
import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import AnimatedChestScreen from "../animated-chest.screen";

const defaultProps = {
    ctaLabel: "cta",
    heading: "heading",
    isLocked: false,
    onPressCta: jest.fn()
};

describe("AnimatedChestScreen", () => {
    it("should render", () => {
        const actual = shallow(<AnimatedChestScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render a locked chest", () => {
        const actual = shallow(<AnimatedChestScreen {...defaultProps} isLocked={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a secondary button", () => {
        const actual = shallow(<AnimatedChestScreen {...defaultProps} onPressCtaSecondary={jest.fn()} />);

        expect(actual).toMatchSnapshot();
    });
});
