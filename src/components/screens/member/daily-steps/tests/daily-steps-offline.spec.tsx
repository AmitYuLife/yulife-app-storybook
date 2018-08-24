import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import DailyStepsOffline from "../daily-steps-offline";

describe("DailyStepsOffline", () => {

    it("should render default values", () => {
        const actual = shallow(
            <DailyStepsOffline />
        );

        expect(actual).toMatchSnapshot();
    });
});
