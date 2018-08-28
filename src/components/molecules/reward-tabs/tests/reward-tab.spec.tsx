import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import RewardTab from "../reward-tab/reward-tab";

const defaultProps = {
    isActive: false,
    onPress: jest.fn()
};

describe("RewardTab", () => {

    it("inactive state should match snapshot", () => {
        const actual = shallow(
            <RewardTab
                {...defaultProps}
                label="purchased"
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("active state should match snapshot", () => {
        const actual = shallow(
            <RewardTab
                {...defaultProps}
                isActive={true}
                label="purchased"
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("flipped state should match snapshot", () => {
        const actual = shallow(
            <RewardTab
                {...defaultProps}
                isFlipped={true}
                label="purchased"
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
