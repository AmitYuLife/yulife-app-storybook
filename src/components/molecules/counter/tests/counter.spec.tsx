jest.useFakeTimers();
import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Counter from "../counter";

const defaultProps = {
    textAfterValue: "steps",
    value: 100
};

describe("Counter", () => {
    it("should render", () => {
        const actual = shallow(<Counter {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should ", () => {
        const actual = shallow(<Counter {...defaultProps} />);

        actual.setProps({ value: 2000 });

        expect(actual).toMatchSnapshot();
    });
});
