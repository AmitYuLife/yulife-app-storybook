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
        {
            name: "leaderboard",
            onPress: jest.fn()
        },
        { name: "rewards", onPress: jest.fn() }
    ],
    hasImage: false
};

describe("NavBar", () => {
    it("should render activeIndex 0 without notification", () => {
        const actual = shallow(<NavBar {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render activeIndex 1 without notification", () => {
        const actual = shallow(<NavBar {...defaultProps} activeIndex={1} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render activeIndex 2 without notification", () => {
        const actual = shallow(<NavBar {...defaultProps} activeIndex={2} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render activeIndex 0 with notification", () => {
        const actual = shallow(<NavBar {...defaultProps} hasNotification={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render activeIndex 1 with notification", () => {
        const actual = shallow(<NavBar {...defaultProps} activeIndex={1} hasNotification={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render activeIndex 2 with notification", () => {
        const actual = shallow(<NavBar {...defaultProps} activeIndex={2} hasNotification={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render activeIndex 3 with notification", () => {
        const actual = shallow(<NavBar {...defaultProps} activeIndex={3} hasNotification={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render an image background for navbar", () => {
        const actual = shallow(<NavBar {...defaultProps} activeIndex={2} hasNotification={true} hasImage={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render an image for forest on navbar", () => {
        const actual = shallow(<NavBar {...defaultProps} hasImage={true} currentWorld={0} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render an image for ocean on navbar", () => {
        const actual = shallow(<NavBar {...defaultProps} hasImage={true} currentWorld={1} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render an image for desert on navbar", () => {
        const actual = shallow(<NavBar {...defaultProps} hasImage={true} currentWorld={2} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render an image for mountain on navbar", () => {
        const actual = shallow(<NavBar {...defaultProps} hasImage={true} currentWorld={3} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render an forest image if no currentWorld is given", () => {
        const actual = shallow(<NavBar {...defaultProps} hasImage={true} />);

        expect(actual).toMatchSnapshot();
    });
});
