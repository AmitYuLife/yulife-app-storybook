import { shallow } from "enzyme";
import * as React from "react";
import { Animated, Text } from "react-native";
import RefreshHeader from "../refresh-header";

describe("RefreshHeader", () => {
    it("should render", () => {
        const actual = shallow(<RefreshHeader maxHeight={1000} offset={new Animated.Value(0)} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with text Pull down to refresh", () => {
        const actual = shallow(<RefreshHeader maxHeight={1000} offset={new Animated.Value(0)} />);

        actual.setState({ status: "pulling" });

        expect(actual.find(Text).prop("children")).toEqual("Pull down to refresh");
    });

    it("should render when cancelling refresh", () => {
        const actual = shallow(<RefreshHeader maxHeight={1000} offset={new Animated.Value(0)} />);

        actual.setState({ status: "pullingCancel" });

        expect(actual.find(Text).prop("children")).toEqual("Give up refreshing");
    });

    it("should render Refreshing when pulling to refresh", () => {
        const actual = shallow(<RefreshHeader maxHeight={1000} offset={new Animated.Value(0)} />);

        actual.setState({ status: "refreshing" });

        expect(actual.find(Text).prop("children")).toEqual("Refreshing ...");
    });

    it("should render with Refresh completed on completed refresh", () => {
        const actual = shallow(<RefreshHeader maxHeight={1000} offset={new Animated.Value(0)} />);

        actual.setState({ status: "rebound" });

        expect(actual.find(Text).prop("children")).toEqual("Refresh completed");
    });
});
