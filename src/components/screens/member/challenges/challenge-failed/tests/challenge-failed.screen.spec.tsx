import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ChallengeFailedScreen from "../challenge-failed.screen";

describe("ChallengeFailedScreen", () => {
    it("should match snapshot", () => {
        const actual = shallow(
            <ChallengeFailedScreen
                onPress={jest.fn()}
                copy={{
                    ctaLabel: "",
                    footer: "",
                    heading: ""
                }}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
