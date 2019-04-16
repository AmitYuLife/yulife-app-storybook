import { shallow } from "enzyme";
import * as React from "react";
import { Platform } from "react-native";
import { NavBar } from "../../../../../molecules";
import { TopBarTypes } from "../../../../../molecules/top-bar/top-bar";
import ChallengesListScreen from "../challenges-list.screen";

describe("ChallengesListScreen", () => {
    it("should render", () => {
        const actual = shallow(
            <ChallengesListScreen
                challenges={[]}
                labels={[]}
                name="level 1"
                onPressLeftIcon={() => null}
                totalCoins={1234}
                theme={{
                    backgroundImage: "forest",
                    backgroundWrapperStyle: { backgroundColor: "rgb(154, 231, 216)" },
                    navBarType: NavBar.Colours.LIGHT,
                    topBarType: "default" as TopBarTypes
                }}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render as Android", () => {
        Platform.OS = "android";
        const actual = shallow(
            <ChallengesListScreen
                challenges={[]}
                labels={[]}
                name="level 1"
                onPressLeftIcon={() => null}
                totalCoins={1234}
                theme={{
                    backgroundImage: "forest",
                    backgroundWrapperStyle: { backgroundColor: "rgb(154, 231, 216)" },
                    navBarType: NavBar.Colours.LIGHT,
                    topBarType: "default" as TopBarTypes
                }}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
