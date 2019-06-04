jest.useFakeTimers();
import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import getUnity from "../unity";

describe("getUnity", () => {
    it("should render world1movie", () => {
        const Unity = getUnity(0);
        const actual = shallow(<Unity onSkip={jest.fn()} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render world2movie", () => {
        const Unity = getUnity(1);
        const actual = shallow(<Unity onSkip={jest.fn()} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render world3movie", () => {
        const Unity = getUnity(2);
        const actual = shallow(<Unity onSkip={jest.fn()} />);

        expect(actual).toMatchSnapshot();
    });
    it("should render world4movie", () => {
        const Unity = getUnity(3);
        const actual = shallow(<Unity onSkip={jest.fn()} />);

        expect(actual).toMatchSnapshot();
    });
});
