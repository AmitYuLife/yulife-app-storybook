import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import MenuScreen from "../menu.screen";

const defaultProps = {
    links: [
        {
            onPress: jest.fn(),
            label: "debug",
            condition: true,
        },
        {
            onPress: jest.fn(),
            label: "activity history",
            condition: true,
        },
        {
            onPress: jest.fn(),
            label: "leaderboard",
            condition: true,
        },
        {
            onPress: jest.fn(),
            label: "member zone",
            condition: true,
        }],
        onPressClose: jest.fn()
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
                links={[]}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
