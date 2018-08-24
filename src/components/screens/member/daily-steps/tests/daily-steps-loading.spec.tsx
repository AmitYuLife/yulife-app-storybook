import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import DailyStepsLoading from "../daily-steps-loading";

describe("DailyStepsLoading", () => {

    it("should render default values", () => {
        const actual = shallow(
            <DailyStepsLoading />
        );

        expect(actual).toMatchSnapshot();
    });
});
