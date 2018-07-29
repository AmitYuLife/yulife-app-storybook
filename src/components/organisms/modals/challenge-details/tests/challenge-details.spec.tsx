import { shallow } from "enzyme";
import * as React from "react";
import ChallengeDetails, { ChallengeType } from "../challenge-details";

const filler = {
    challengeType: "brisk walk" as ChallengeType,
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

    it("should match snapshot", () => {

        const actual = shallow(
            <ChallengeDetails
                {...filler}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
