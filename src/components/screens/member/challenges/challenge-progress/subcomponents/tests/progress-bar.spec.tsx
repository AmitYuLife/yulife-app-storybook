import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ProgressBar, { ProgressBarTypes } from "../progress-bar";

const defaultProps = {
    amount: 0,
    goals: [500, 700, 900],
    showCounter: true,
    styleType: "ocean-white" as ProgressBarTypes,
    type: "steps"
};

describe("ProgressBar", () => {
    it("should render", () => {
        const actual = shallow(<ProgressBar {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
