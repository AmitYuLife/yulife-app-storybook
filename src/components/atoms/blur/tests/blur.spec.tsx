import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { Animated, Platform } from "react-native";
import Blur from "../blur";

const defaultProps = {
    blurRef: 0,
    wrapperOpacity: new Animated.Value(0),
    wrapperPosition: new Animated.Value(0)
};

describe("Blur", () => {

    it("should render on iOS", () => {
        const actual = shallow(
            <Blur
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render on Android", () => {
        Platform.OS = "android";
        const actual = shallow(
            <Blur
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
