import { shallow } from "enzyme";
import * as React from "react";
import { Platform } from "react-native";
import ChallengesListBackground from "../challenges-background";

describe("ChallengeChallengesListBackgroundsListScreen", () => {

    it("should render", () => {
        const actual = shallow(
            <ChallengesListBackground />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render as Android", () => {
        Platform.OS = "android";
        const actual = shallow(
            <ChallengesListBackground />
        );

        expect(actual).toMatchSnapshot();
    });

});
