jest.useFakeTimers();

import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import SplashScreen from "../splash.screen";

describe("SplashScreen", () => {
    it("should render", () => {
        const actual = shallow(<SplashScreen onAnimationEnd={jest.fn()} onAnimationStart={jest.fn()} />);

        expect(actual).toMatchSnapshot();
    });
});
