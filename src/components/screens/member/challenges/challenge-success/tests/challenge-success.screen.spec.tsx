import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ChallengeSuccessScreen from "../challenge-success.screen";

describe("ChallengeSuccessScreen", () => {

    it("should render steps as expected", () => {

        const actual = shallow(
            <ChallengeSuccessScreen
                score={1180}
                unit="steps"
                rating={2}
                reward={2}
                onPressCta={jest.fn()}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render minutes as expected", () => {

        const actual = shallow(
            <ChallengeSuccessScreen
                score={360}
                unit="minutes"
                rating={2}
                reward={2}
                onPressCta={jest.fn()}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
