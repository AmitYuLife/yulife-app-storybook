import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { ImageRequireSource } from "react-native";
import MenuScreen from "../menu.screen";

const defaultProps = {
    links: [
        {
            condition: true,
            label: "debug",
            onPress: jest.fn(),
            source: 1234 as ImageRequireSource
        },
        {
            label: "activity history",
            onPress: jest.fn()
        },
        {
            condition: true,
            label: "leaderboard",
            onPress: jest.fn()
        },
        {
            label: "member zone",
            onPress: jest.fn()
        }],
        onPressClose: jest.fn(),
        onDebugPress: jest.fn(),
        version: "1.0.0"
};

describe("MenuScreen", () => {

    it("should render default values", () => {
        const actual = shallow(
            <MenuScreen
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render without links", () => {
        const actual = shallow(
            <MenuScreen
                {...defaultProps}
                links={null}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
