import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Progress from "../progress";
import { ProgressBarTypes } from "../progress-bar";

const defaultProps = {
    amount: 0,
    goal: 900,
    previousGoal: 1100,
    styleType: "ocean-white" as ProgressBarTypes,
    width: 50,
    type: "steps"
};

describe("Progress", () => {
    it("should render", () => {
        const actual = shallow(<Progress {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
