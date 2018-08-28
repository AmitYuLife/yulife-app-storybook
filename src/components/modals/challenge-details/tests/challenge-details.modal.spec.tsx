import { shallow } from "enzyme";
import * as React from "react";
import ChallengeDetails from "../challenge-details.modal";

const defaultProps = {
    challengeType: "brisk walk",
    duration: "10 mins",
    milestones: [
        {
            reward: 1,
            target: 100
        }
    ],
    onPressClose: jest.fn(),
    onPressCta: jest.fn(),
    unit: "steps"
};

describe("ChallengeDetailsModal", () => {

    it("should render without setup", () => {
        const actual = shallow(
            <ChallengeDetails
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with setup", () => {
        const actual = shallow(
            <ChallengeDetails
                {...defaultProps}
                onPressSetUp={jest.fn()}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
