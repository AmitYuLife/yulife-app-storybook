import { shallow } from "enzyme";
import * as React from "react";
import ChallengeDetails from "../challenge-details";

const filler = {
    challengeType: "brisk walk",
    duration: "10 mins",
    milestones: [
        {
            reward: 1,
            target: 100,
        },
    ],
    onPressClose: (): null => null,
    onPressCta: (): null => null,
    unit: "steps",
};

describe("ChallengeDetailsModal", () => {

    it("should render without setup", () => {

        const actual = shallow(
            <ChallengeDetails
                {...filler}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with setup", () => {

        const actual = shallow(
            <ChallengeDetails
                {...filler}
                onPressSetUp={jest.fn()}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
