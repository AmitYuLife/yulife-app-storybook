import { shallow } from "enzyme";
import * as React from "react";
import { Platform } from "react-native";
import ChallengesListScreen from "../challenges-list-screen";

describe("ChallengesListScreen", () => {

    it("should render", () => {

        const actual = shallow(
            <ChallengesListScreen challenges={[]} />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render as Android", () => {

        Platform.OS = "android";
        const actual = shallow(
            <ChallengesListScreen challenges={[]} />
        );

        expect(actual).toMatchSnapshot();
    });
});
