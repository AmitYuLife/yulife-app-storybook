jest.useFakeTimers();
import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import AnimatedPlusPoints from "../animated-plus-points";

describe("AnimatedPlusPoints", () => {
    it("should mock an animation for challenge success screen", () => {
        const actual = shallow(<AnimatedPlusPoints type="challenge-success" coins={2000} />);

        expect(actual).toMatchSnapshot();
    });

    it("should mock an animation for collect reward screen", () => {
        const actual = shallow(<AnimatedPlusPoints type="collect-reward" coins={500} />);

        expect(actual).toMatchSnapshot();
    });
});
