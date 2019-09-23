import { shallow } from "enzyme";
import * as React from "react";
import { Animated, Text } from "react-native";
import LoadingFooter from "../loading-footer";

describe("LoadingFooter", () => {
    it("should render", () => {
        const actual = shallow(<LoadingFooter maxHeight={1000} offset={new Animated.Value(0)} bottomOffset={0} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with text Drag up to load", () => {
        const actual = shallow(<LoadingFooter maxHeight={1000} offset={new Animated.Value(0)} bottomOffset={0} />);

        actual.setState({ status: "dragging" });

        expect(actual.find(Text).prop("children")).toEqual("Drag up to load");
    });

    it("should render when Give up loading cancelling load", () => {
        const actual = shallow(<LoadingFooter maxHeight={1000} offset={new Animated.Value(0)} bottomOffset={0} />);

        actual.setState({ status: "draggingCancel" });

        expect(actual.find(Text).prop("children")).toEqual("Give up loading");
    });

    it("should render Release to load", () => {
        const actual = shallow(<LoadingFooter maxHeight={1000} offset={new Animated.Value(0)} bottomOffset={0} />);

        actual.setState({ status: "draggingEnough" });

        expect(actual.find(Text).prop("children")).toEqual("Release to load");
    });

    it("should render Refreshing when pulling to refresh", () => {
        const actual = shallow(<LoadingFooter maxHeight={1000} offset={new Animated.Value(0)} bottomOffset={0} />);

        actual.setState({ status: "draggingEnough" });

        expect(actual.find(Text).prop("children")).toEqual("Release to load");
    });

    it("should render with Loading completed on completed refresh", () => {
        const actual = shallow(<LoadingFooter maxHeight={1000} offset={new Animated.Value(0)} bottomOffset={0} />);

        actual.setState({ status: "rebound" });

        expect(actual.find(Text).prop("children")).toEqual("Loading completed");
    });

    it("should not render any text & icon when allLoaded", () => {
        const actual = shallow(<LoadingFooter maxHeight={1000} offset={new Animated.Value(0)} bottomOffset={0} />);

        actual.setState({ status: "allLoaded" });

        expect(actual.find(Text).prop("children")).toEqual(undefined);
    });
});
