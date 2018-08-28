import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { Platform } from "react-native";
import CollectReward from "../collect-reward.modal";

describe("CollectReward", () => {

    it("should render on iOS", () => {
        const actual = shallow(
            <CollectReward onPress={jest.fn()} />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render on Android", () => {
        Platform.OS = "android";
        const actual = shallow(
            <CollectReward onPress={jest.fn()} />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with heading", () => {
        const actual = shallow(
            <CollectReward
                onPress={jest.fn()}
                date="12-15 Blerguary"
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
