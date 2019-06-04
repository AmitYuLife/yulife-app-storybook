import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ChallengeUnavailableScreen from "../challenge-unavailable.screen";

describe("ChallengeFailedScreen", () => {
    it("should match snapshot", () => {
        const actual = shallow(<ChallengeUnavailableScreen onPressCta={jest.fn()} timeRemaining="6 mins 30 secs" />);

        expect(actual).toMatchSnapshot();
    });
});
