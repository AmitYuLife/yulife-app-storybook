import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import LeaderboardItem from "../leaderboard-item";

const defaultProps = {
    coins: 1,
    isCurrentUser: false,
    name: "test",
    rank: 1,
    steps: 5,
    sortBy: "coins"
};

describe("Leaderboard Item", () => {
    it("should render default values", () => {
        const actual = shallow(<LeaderboardItem {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render only rank text instead of image", () => {
        const actual = shallow(<LeaderboardItem {...defaultProps} rank={4} />);

        expect(actual).toMatchSnapshot();
    });

    it("should show steps instead of yucoin", () => {
        const actual = shallow(<LeaderboardItem {...defaultProps} sortBy={"steps"} />);

        expect(actual).toMatchSnapshot();
    });
});
