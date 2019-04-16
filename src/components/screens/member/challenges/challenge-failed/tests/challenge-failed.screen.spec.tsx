import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ChallengeFailedScreen from "../challenge-failed.screen";

describe("ChallengeFailedScreen", () => {
    it("should match snapshot", () => {
        const actual = shallow(
            <ChallengeFailedScreen
                onPress={jest.fn()}
                theme={{
                    backgroundImage: "challenge_failed_forest",
                    backgroundStyle: null,
                    footerStyle: {
                        color: "rgb(170,170,170)"
                    }
                }}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
