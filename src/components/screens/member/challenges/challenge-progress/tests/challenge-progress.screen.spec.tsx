import { TopBarTypes } from "@app/components/molecules/top-bar/top-bar";
// tslint:disable-next-line
import { ProgressBarTypes } from "@app/components/screens/member/challenges/challenge-progress/subcomponents/progress-bar";
import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { IColours, ILabel } from "../../../../../molecules";
import ChallengeProgressScreen, { ChallengeType } from "../challenge-progress.screen";

const defaultProps = {
    challengeType: "brisk walk" as ChallengeType,
    endDateTime: "2020-12-31T23:59:59",
    labels: [] as ILabel[],
    onDismissPress: jest.fn(),
    onLeftMenuPress: jest.fn(),
    progressTargets: [2000, 4000, 6000],
    totalCoins: 1234,
    unit: "steps" as "steps",
    userProgress: 1000,
    theme: {
        backgroundColour: "rgb(255,255,255)",
        navBarType: "light" as IColours,
        progressBarType: "black" as ProgressBarTypes,
        source: "squirrel",
        style: { height: 450 },
        topBarType: "default" as TopBarTypes
    }
};

describe("ChallengeProgressScreen", () => {
    it("should match snapshot", () => {
        const actual = shallow(<ChallengeProgressScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
