import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import RewardTabs from "../reward-tabs";

const defaultProps = {
    activeTabIndex: 0,
    onLeftTabPress: jest.fn(),
    onRightTabPress: jest.fn()
};

describe("RewardTabs", () => {

    it("should match snapshot when left tab is active", () => {
        const actual = shallow(
            <RewardTabs
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should match snapshot when right tab is active", () => {
        const actual = shallow(
            <RewardTabs
                {...defaultProps}
                activeTabIndex={1}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
