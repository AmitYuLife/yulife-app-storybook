import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import LeaderboardPopup from "../leaderboard-pop-up";

const defaultProps = {
    hasNotification: false,
    labels: [
        { name: "yucoin", onPress: jest.fn() },
        { name: "quests", onPress: jest.fn() },
        {
            name: "leaderboard",
            onPress: jest.fn()
        },
        { name: "rewards", onPress: jest.fn() }
    ],
    copy: {
        surgeHeading: "surge heading test",
        surgeSubheading: "surge subheading test",
        leaderboardHeading: "leaderboard heading test",
        leaderboardSubheading: "leaderboard subheading test"
    },
    onUpdateLeaderboardPopupVisibility: jest.fn()
};

describe("LeaderboardPopup", () => {
    it("should render", () => {
        const actual = shallow(<LeaderboardPopup {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render navbar with notificaiton", () => {
        const actual = shallow(<LeaderboardPopup {...defaultProps} hasNotification={true} />);

        expect(actual).toMatchSnapshot();
    });
});
