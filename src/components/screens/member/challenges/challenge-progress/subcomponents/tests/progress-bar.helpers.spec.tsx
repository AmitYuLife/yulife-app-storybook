import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { View } from "react-native";
import { IProps } from "../progress-bar";
import { renderProgressBar, renderProgressLabel } from "../progress-bar.helpers";

const defaultProps = {
    amount: 0,
    styleType: "mountain-pink",
    type: "steps"
} as IProps;

describe("renderProgressBar", () => {
    it("should render a progress component", () => {
        const actual = shallow(<View>{renderProgressBar({ ...defaultProps, goals: [500, 700, 900] })}</View>);

        expect(actual).toMatchSnapshot();
    });

    it("should return null", () => {
        const actual = renderProgressBar({ ...defaultProps, goals: [0, 1, 2, 3, 4, 5, 6] });

        expect(actual).toBeNull();
    });
});

describe("renderProgressLabel", () => {
    it("should return a component with Counter", () => {
        const actual = shallow(<View>{renderProgressLabel({ ...defaultProps, showCounter: true })}</View>);

        expect(actual).toMatchSnapshot();
    });

    it("should return a component without counter", () => {
        const actual = shallow(<View>{renderProgressLabel({ ...defaultProps, showCounter: false })}</View>);

        expect(actual).toMatchSnapshot();
    });

    it("should return progress text for type minutes", () => {
        const actual = shallow(<View>{renderProgressLabel({ ...defaultProps, type: "minutes", amount: 500 })}</View>);

        expect(actual).toMatchSnapshot();
    });

    it("should return null", () => {
        const actual = renderProgressLabel({ ...defaultProps, type: "test" });

        expect(actual).toBeNull();
    });
});
