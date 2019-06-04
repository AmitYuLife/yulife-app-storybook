import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import StreaksScreen from "../streaks.screen";

const defaultProps = {
    isLoading: false,
    heading: "heading test",
    subHeading: "subheading test",
    timeRemaining: "05:30",
    streakAwardId: "",
    streakCompleted: 0,
    streakMax: 4,
    primaryButtonLabel: "go to challenge",
    reward: "6",
    onSubmit: jest.fn(),
    onPressCtaPrimary: jest.fn(),
    onPressCtaSecondary: jest.fn()
};

describe("StreaksScreen", () => {
    it("should render & show time remaining for next challenge", () => {
        const actual = shallow(<StreaksScreen {...defaultProps} streakCompleted={4} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render without secondary button", () => {
        const actual = shallow(<StreaksScreen {...defaultProps} onPressCtaSecondary={null} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render streak text", () => {
        const actual = shallow(
            <StreaksScreen {...defaultProps} onPressCtaSecondary={null} streakCompleted={2} streakMax={4} />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with streak image of full coins", () => {
        const actual = shallow(
            <StreaksScreen {...defaultProps} onPressCtaSecondary={null} streakCompleted={4} streakMax={4} />
        );

        expect(actual).toMatchSnapshot();
    });
});
