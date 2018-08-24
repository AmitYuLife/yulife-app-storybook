import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import DailyStepsFitKitUnavailable from "../daily-steps-fitkit-unavailable";

describe("DailyStepsFitKitUnavailable", () => {

    it("should render default values", () => {
        const actual = shallow(
            <DailyStepsFitKitUnavailable />
        );

        expect(actual).toMatchSnapshot();
    });
});
