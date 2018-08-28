import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ChallengeProgressScreen, { ChallengeType } from "../challenge-progress.screen";

const defaultProps = {
    challengeType: "brisk walk" as ChallengeType
};

describe("ChallengeProgressScreen", () => {

    it("should match snapshot", () => {
        const actual = shallow(
            <ChallengeProgressScreen
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
