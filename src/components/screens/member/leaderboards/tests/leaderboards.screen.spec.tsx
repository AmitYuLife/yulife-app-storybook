import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { AppStateStatus } from "react-native";
import { COLOURS } from "../../../../../components/molecules";
import copy from "../../../../../redux/copy/copy.data";
import LeaderboardsScreen from "../leaderboards.screen";

const defaultProps = {
    componentId: "1",
    activeLeaderboardIndex: 0,
    currentWorld: 0,
    initialScrollIndex: 0,
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
    leaderboards: [
        {
            leaderboardId: "123456789123456789123456789000000",
            name: "first leaderboard",
            consent: true,
            hasAccepted: true,
            inviteFrom: "friend",
            isLoading: false
        }
    ],
    hasNotification: false,
    items: [
        {
            id: "12345678910",
            coins: 50,
            firstName: "test",
            lastName: "test",
            name: "test test",
            steps: 5000
        }
    ],
    isLoading: false,
    onHandleCoinsRefetch: jest.fn(),
    onHandleStepsRefetch: jest.fn(),
    onHandleMindfulMinsRefetch: jest.fn(),
    onLeaderboardChange: jest.fn(),
    onRefetch: jest.fn(),
    sortBy: "coins",
    totalCoins: 5,
    onLeftMenuPress: jest.fn(),
    onAllowLeaderboard: jest.fn(),
    onPrivacyPolicyPress: jest.fn(),
    onRefuseConsent: jest.fn(),
    copy: copy.leaderboards.turnBoardOn,
    isMindfulAvailable: false,
    navbarColour: COLOURS.LIGHT,
    appState: "active" as AppStateStatus
};

describe("LeaderboardsScreen", () => {
    it("should render default values", () => {
        const actual = shallow(<LeaderboardsScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render consent leaderboard screen & not render leaderboard tabs", () => {
        const actual = shallow(
            <LeaderboardsScreen
                {...defaultProps}
                leaderboards={[{ ...defaultProps.leaderboards[0], consent: false }]}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render loading of leaderboard", () => {
        const actual = shallow(<LeaderboardsScreen {...defaultProps} isLoading={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render mindful mins tab with leaderboard screen", () => {
        const actual = shallow(<LeaderboardsScreen {...defaultProps} isMindfulAvailable={true} sortBy="mindful" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render steps tab with leaderboard screen", () => {
        const actual = shallow(<LeaderboardsScreen {...defaultProps} sortBy={"steps"} />);
        expect(actual).toMatchSnapshot();
    });

    it("should show dropdown of leaderboards", () => {
        const actual = shallow(<LeaderboardsScreen {...defaultProps} sortBy={"steps"} />);
        actual.setState({
            isShowingDropdown: true
        });
        expect(actual.state("isShowingDropdown")).toBe(true);
        expect(actual).toMatchSnapshot();
    });

    it("should render leaderboard screen without any available leaderboards ", () => {
        const actual = shallow(<LeaderboardsScreen {...defaultProps} leaderboards={[]} />);

        expect(actual).toMatchSnapshot();
    });
});
