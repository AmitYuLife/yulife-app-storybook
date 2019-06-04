import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { ILeaderboardSectionItem } from "../../settings.screen";
import LeaderboardItem from "../leaderboard-item";

const defaultProps = {
    name: "leaderboard",
    status: "active" as ILeaderboardSectionItem["status"],
    isLoading: false,
    onPress: jest.fn()
};

describe("LeaderboardItem", () => {
    it("should render", () => {
        const actual = shallow(<LeaderboardItem {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render & slice leaderboard name", () => {
        const actual = shallow(<LeaderboardItem {...defaultProps} name="leaderboardleaderboardleaderboard" />);

        expect(actual).toMatchSnapshot();
    });
});
