import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import copy from "../../../../../redux/copy/copy.data";
import LeaderboardConsent from "../leaderboard-consent/leaderboard-consent";

const defaultProps = {
    onAllowLeaderboard: jest.fn(),
    isLoading: false,
    onPrivacyPolicyPress: jest.fn(),
    onRefuseConsent: jest.fn(),
    copy: copy.leaderboards.turnBoardOn
};

describe("LeaderboardConsent", () => {
    it("should render default values", () => {
        const actual = shallow(<LeaderboardConsent {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render consent with loading button", () => {
        const actual = shallow(<LeaderboardConsent {...defaultProps} isLoading={true} />);

        expect(actual).toMatchSnapshot();
    });
});
