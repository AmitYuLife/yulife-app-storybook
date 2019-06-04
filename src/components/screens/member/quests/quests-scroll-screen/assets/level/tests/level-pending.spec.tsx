import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import LevelPending from "../level-pending";

const defaultProps = {
    nextAvailableAt: "60 minutes",
    textFill: "blue"
};

describe("LevelPending", () => {
    it("should render", () => {
        const actual = shallow(<LevelPending {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
