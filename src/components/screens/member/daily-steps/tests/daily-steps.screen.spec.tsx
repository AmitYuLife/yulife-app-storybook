import { StreakTypes } from "@app/components/molecules/streak/streak";
import { TopBarTypes } from "@app/components/molecules/top-bar/top-bar";
import { ICentredScreen } from "@app/redux/theme/theme.reducer";
import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { COLOURS, ILabel } from "../../../../molecules";
import DailyStepsScreen from "../daily-steps.screen";

const defaultProps = {
    coinsToday: 0,
    currentStreak: 0,
    fitKitAvailable: true,
    hasPermission: true,
    isDoneToday: false,
    isLoading: false,
    isOnline: true,
    labels: [] as ILabel[],
    lastUpdate: "thing",
    maxStreak: 4,
    onAuthoriseFitKitPress: jest.fn(),
    onCoinPress: jest.fn(),
    onCtaPress: jest.fn(),
    onLeftMenuPress: jest.fn(),
    onStreakPress: jest.fn(),
    steps: 0,
    totalCoins: 1234,
    theme: {
        centredScreen: {
            offline: { image: "gray_forest", style: { backgroundColor: "#FFF" } } as ICentredScreen,
            online: { image: "large_forest", style: { backgroundColor: "#FFF" } } as ICentredScreen
        },
        hasWhiteGlow: false,
        isLight: false,
        navBar: {
            offline: COLOURS.LIGHT,
            online: COLOURS.LIGHT
        },
        streakType: "forest" as StreakTypes,
        textStyle: { color: "#333333" },
        topBarType: "default" as TopBarTypes
    }
};

describe("DailyStepsScreen", () => {
    it("should render default values", () => {
        const actual = shallow(
            <DailyStepsScreen
                {...defaultProps}
                copy={{
                    permission: "",
                    permissionCta: ""
                }}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render daily streak", () => {
        const actual = shallow(
            <DailyStepsScreen
                {...defaultProps}
                displayStreak={true}
                copy={{
                    permission: "",
                    permissionCta: ""
                }}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render loading screen", () => {
        const actual = shallow(
            <DailyStepsScreen
                {...defaultProps}
                isLoading={true}
                copy={{
                    permission: "",
                    permissionCta: ""
                }}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render FitKit permissions screen", () => {
        const actual = shallow(
            <DailyStepsScreen
                {...defaultProps}
                hasPermission={false}
                copy={{
                    permission: "",
                    permissionCta: ""
                }}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render FitKit unavailable screen", () => {
        const actual = shallow(
            <DailyStepsScreen
                {...defaultProps}
                fitKitAvailable={false}
                copy={{
                    permission: "",
                    permissionCta: ""
                }}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render offline screen", () => {
        const actual = shallow(
            <DailyStepsScreen
                {...defaultProps}
                isOnline={false}
                copy={{
                    permission: "",
                    permissionCta: ""
                }}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
