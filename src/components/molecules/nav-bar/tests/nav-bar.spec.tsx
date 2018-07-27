import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import NavBar from "../nav-bar";

const fillers = {
    labels: [
        { name: "yucoin", onPress: (): null => null },
        { name: "quest", onPress: (): null => null },
        { name: "rewards", onPress: (): null => null },
    ],
};

describe("NavBar", () => {

    it("should render activeIndex 0 without notification", () => {

        const actual = shallow(
            <NavBar
                activeIndex={0}
                hasNotification={false}
                {...fillers}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render activeIndex 1 without notification", () => {

        const actual = shallow(
            <NavBar
                activeIndex={1}
                hasNotification={false}
                {...fillers}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render activeIndex 2 without notification", () => {

        const actual = shallow(
            <NavBar
                activeIndex={2}
                hasNotification={false}
                {...fillers}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render activeIndex 0 with notification", () => {

        const actual = shallow(
            <NavBar
                activeIndex={0}
                hasNotification={true}
                {...fillers}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render activeIndex 1 with notification", () => {

        const actual = shallow(
            <NavBar
                activeIndex={1}
                hasNotification={true}
                {...fillers}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render activeIndex 2 with notification", () => {

        const actual = shallow(
            <NavBar
                activeIndex={2}
                hasNotification={true}
                {...fillers}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
