import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import NavBar from "../nav-bar";

const defaultProps = {
    activeIndex: 0,
    hasNotification: false,
    labels: [
        { name: "yucoin", onPress: jest.fn() },
        { name: "quests", onPress: jest.fn() },
        { name: "rewards", onPress: jest.fn() }
    ]
};

describe("NavBar", () => {

    it("should render activeIndex 0 without notification", () => {
        const actual = shallow(
            <NavBar
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render activeIndex 1 without notification", () => {
        const actual = shallow(
            <NavBar
                {...defaultProps}
                activeIndex={1}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render activeIndex 2 without notification", () => {
        const actual = shallow(
            <NavBar
                {...defaultProps}
                activeIndex={2}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render activeIndex 0 with notification", () => {
        const actual = shallow(
            <NavBar
                {...defaultProps}
                hasNotification={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render activeIndex 1 with notification", () => {
        const actual = shallow(
            <NavBar
                {...defaultProps}
                activeIndex={1}
                hasNotification={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render activeIndex 2 with notification", () => {
        const actual = shallow(
            <NavBar
                {...defaultProps}
                activeIndex={2}
                hasNotification={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
