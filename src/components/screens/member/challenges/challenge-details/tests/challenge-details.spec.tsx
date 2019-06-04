import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ChallengeDetailsScreen from "../challenge-details.screen";

const defaultProps = {
    challengeType: "meditation",
    currentWorld: 0,
    duration: "50 seconds",
    isLoading: false,
    error: "",
    onPressClose: jest.fn(),
    onPressCta: jest.fn(),
    unit: "seconds",
    milestones: [
        {
            target: 5,
            reward: 2
        }
    ]
};

describe("ChallengeDetailsScreen", () => {
    it("should render", () => {
        const actual = shallow(<ChallengeDetailsScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a secondary button", () => {
        const actual = shallow(<ChallengeDetailsScreen {...defaultProps} onPressSetUp={jest.fn()} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with an error", () => {
        const actual = shallow(
            <ChallengeDetailsScreen {...defaultProps} error="Something happened. Try again later" />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with an image for brisk walk", () => {
        const actual = shallow(
            <ChallengeDetailsScreen {...defaultProps} challengeType="brisk walk" currentWorld={2} unit="steps" />
        );

        expect(actual).toMatchSnapshot();
    });
});
