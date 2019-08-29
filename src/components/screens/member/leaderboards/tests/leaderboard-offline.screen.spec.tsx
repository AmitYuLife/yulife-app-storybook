import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { COLOURS } from "../../../../../components/molecules";
import LeaderboardOfflineScreen from "../leaderboard-offline.screen";

const defaultProps = {
    currentWorld: 0,
    labels: [
        {
            name: "yucoin",
            onPress: jest.fn()
        },
        {
            name: "quests",
            onPress: jest.fn()
        },
        {
            name: "leaderboard",
            onPress: jest.fn()
        },
        {
            name: "rewards",
            onPress: jest.fn()
        }
    ],
    hasNotification: false,
    totalCoins: 5,
    onLeftMenuPress: jest.fn(),
    navbarColour: COLOURS.DARKER
};

describe("LeaderboardOfflineScreen", () => {
    it("should render default values", () => {
        const actual = shallow(<LeaderboardOfflineScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
