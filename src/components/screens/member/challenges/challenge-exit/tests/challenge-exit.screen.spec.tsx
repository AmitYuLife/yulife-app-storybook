import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ChallengeExitScreen from "../challenge-exit.screen";

const defaultProps = {
    copy: {
        heading: "settings",
        subheading:
            // tslint:disable-next-line
            "Complete a meditation session with Calm, Headspace or any other meditation app that integrates with apple health, within the next hour. Results will be shown here.",
        ctaLabel: "exit challenge",
        ctaLabelSecondary: "Meditation setup tutorial"
    },
    onPressExit: jest.fn(),
    onClose: jest.fn(),
    isCancelling: false,
    onOpenURL: jest.fn()
};

describe("ChallengeExitScreen", () => {
    it("should match snapshot", () => {
        const actual = shallow(<ChallengeExitScreen challengeType="short stroll" {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with subheading & meditation tutorial button", () => {
        const actual = shallow(<ChallengeExitScreen challengeType="meditation" {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
