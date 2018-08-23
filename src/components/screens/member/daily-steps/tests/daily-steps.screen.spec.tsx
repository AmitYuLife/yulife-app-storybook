import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import DailyStepsScreen from "../daily-steps.screen";

const defaultProps = {
    coinsToday: 0,
    coinsTotal: 0,
    currentStreak: 0,
    hasNotification: false,
    isDoneToday: false,
    labels: [
        {
            name: "yucoin",
            onPress: jest.fn(),
        },
        {
            name: "quest",
            onPress: jest.fn(),
        },
        {
            name: "rewards",
            onPress: jest.fn(),
        },
    ],
    maxStreak: 4,
    onCtaPress: jest.fn(),
    onMenuPress: jest.fn(),
    onStreakPress: jest.fn(),
    steps: 0,
};

describe("DailyStepsScreen", () => {

    it("should render default values", () => {

        const actual = shallow(
            <DailyStepsScreen
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render daily streak", () => {

        const actual = shallow(
            <DailyStepsScreen
                {...defaultProps}
                displayStreak={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });

});
