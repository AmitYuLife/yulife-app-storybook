import { COLOURS, ILabel } from "@molecules/index";
import { StreakTypes } from "@molecules/streak/streak";
import { TopBarTypes } from "@molecules/top-bar/top-bar";
import copyData from "@redux/copy/copy.data";
import { ICentredScreen } from "@redux/theme/theme.reducer";
import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import IntroScreen from "../intro.screen";

const defaultProps = {
    coinsToday: 200,
    displayStreak: true,
    currentStreak: 0,
    isDoneToday: false,
    isLoading: false,
    labels: [] as ILabel[],
    maxStreak: 4,
    onCoinPress: jest.fn(),
    onCtaPress: jest.fn(),
    onStreakPress: jest.fn(),
    showCounter: false,
    steps: 2000,
    onSetOnboardingDone: jest.fn(),
    theme: {
        centredScreen: {
            offline: { image: "gray_forest", style: { backgroundColor: "#FFF" } } as ICentredScreen,
            online: { image: "large_forest", style: { backgroundColor: "#FFF" } } as ICentredScreen
        },
        hasWhiteGlow: false,
        isLight: false,
        navBar: {
            offline: COLOURS.LIGHT,
            online: COLOURS.DARKER
        },
        streakType: "forest" as StreakTypes,
        textStyle: { color: "#333333" },
        topBarType: "default" as TopBarTypes
    },
    copy: copyData.intro
};

describe("IntroScreen", () => {
    it("should render default values", () => {
        const actual = shallow(<IntroScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
