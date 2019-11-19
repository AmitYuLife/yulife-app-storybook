import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import DailyStepsOnline from "../daily-steps-online";

const defaultProps = {
    coinsToday: 5,
    hasWhiteText: false,
    onCtaPress: jest.fn(),
    steps: 123456,
    meditation: 333,
    isShowingPassiveMeditation: true
};

describe("DailyStepsOnline", () => {
    it("should render default values", () => {
        const actual = shallow(<DailyStepsOnline {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
