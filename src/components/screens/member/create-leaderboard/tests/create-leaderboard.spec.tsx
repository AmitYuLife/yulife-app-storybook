import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import CreateLeaderboardScreen from "../create-leaderboard.screen";

const defaultProps = {
    isLoading: false,
    onCreateLeaderboard: jest.fn(),
    onPressClose: jest.fn()
};

describe("ChalengesHistoryScreen", () => {
    it("should match snapshot", () => {
        const actual = shallow(<CreateLeaderboardScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
