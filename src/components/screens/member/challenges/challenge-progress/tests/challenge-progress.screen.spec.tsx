import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { ILabel } from "../../../../../molecules";
import ChallengeProgressScreen, { ChallengeType } from "../challenge-progress.screen";

const defaultProps = {
    challengeType: "brisk walk" as ChallengeType,
    endDateTime: "2020-12-31T23:59:59",
    labels: [] as ILabel[],
    onLeftMenuPress: jest.fn(),
    progressTargets: [2000, 4000, 6000],
    totalCoins: 1234,
    unit: "steps" as "steps",
    userProgress: 1000
};

describe("ChallengeProgressScreen", () => {
    it("should match snapshot", () => {
        const actual = shallow(<ChallengeProgressScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
