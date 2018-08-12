import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ChallengeSuccessScreen from "../challenge-success";

describe("ChallengeSuccessScreen", () => {

    it("should match snapshot", () => {

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
});
