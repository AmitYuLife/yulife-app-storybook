import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import MenuScreen from "../menu.screen";

const defaultProps = {
    links: [
        {
            condition: true,
            label: "debug",
            onPress: jest.fn()
        },
        {
            condition: true,
            label: "activity history",
            onPress: jest.fn()
        },
        {
            condition: true,
            label: "leaderboard",
            onPress: jest.fn()
        },
        {
            condition: true,
            label: "member zone",
            onPress: jest.fn()
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
