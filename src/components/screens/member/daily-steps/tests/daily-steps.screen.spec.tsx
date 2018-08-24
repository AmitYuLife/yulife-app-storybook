import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import DailyStepsScreen from "../daily-steps.screen";

const defaultProps = {
    coinsToday: 0,
    currentStreak: 0,
    fitKitAvailable: true,
    hasPermission: true,
    isDoneToday: false,
    isLoading: false,
    isOnline: true,
    lastUpdate: "thing",
    maxStreak: 4,
    onAuthoriseFitKitPress: jest.fn(),
    onCoinPress: jest.fn(),
    onCtaPress: jest.fn(),
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

    it("should render loading screen", () => {
        const actual = shallow(
            <DailyStepsScreen
                {...defaultProps}
                isLoading={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render FitKit permissions screen", () => {
        const actual = shallow(
            <DailyStepsScreen
                {...defaultProps}
                hasPermission={false}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render FitKit unavailable screen", () => {
        const actual = shallow(
            <DailyStepsScreen
                {...defaultProps}
                fitKitAvailable={false}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render offline screen", () => {
        const actual = shallow(
            <DailyStepsScreen
                {...defaultProps}
                isOnline={false}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
