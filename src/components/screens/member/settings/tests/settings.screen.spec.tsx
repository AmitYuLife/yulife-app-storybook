import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import SettingsScreen, { ILeaderboardSectionItem } from "../settings.screen";

const defaultProps = {
    onCreateLeaderboard: jest.fn(),
    onPressClose: jest.fn(),
    sections: [
        {
            isVisible: true,
            items: [
                {
                    active: false,
                    available: true,
                    id: "99999904",
                    key: "streakSaver",
                    name: "Streak saver",
                    onSwitchPress: jest.fn(),
                    onTimePress: jest.fn(),
                    time: "17:00"
                }
            ],
            name: "notifications"
        },
        {
            isVisible: true,
            items: [
                {
                    isConnected: false,
                    name: "fitbit",
                    onPress: jest.fn(),
                    onPressInfo: jest.fn(),
                    isLoading: false
                }
            ],
            name: "connections"
        },
        {
            isVisible: true,
            items: [
                {
                    isLoading: false,
                    name: "klsdfjlaskdjf",
                    onPress: jest.fn(),
                    onPressInfo: jest.fn(),
                    status: "active" as ILeaderboardSectionItem["status"]
                }
            ],
            name: "leaderboard"
        }
    ]
};

describe("SettingsScreen", () => {
    it("should render", () => {
        const actual = shallow(<SettingsScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render without leaderboard section", () => {
        const newSections = defaultProps.sections;
        newSections[2].isVisible = false;
        const actual = shallow(<SettingsScreen {...defaultProps} sections={newSections} />);

        expect(actual).toMatchSnapshot();
    });
});
