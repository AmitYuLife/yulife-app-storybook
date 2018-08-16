import "react-native";
import * as React from "react";
import RewardTabs from "../reward-tabs";
import { shallow } from "enzyme";

const fillers = {
    onLeftTabPress: (): null => null,
    onRightTabPress: (): null => null,
};

describe("RewardTabs", () => {
    it("should match snapshot when left tab is active", () => {
        const actual = shallow(<RewardTabs activeTabIndex={0} {...fillers} />);
        expect(actual).toMatchSnapshot();
    });

    it("should match snapshot when right tab is active", () => {
        const actual = shallow(<RewardTabs activeTabIndex={0} {...fillers} />);
        expect(actual).toMatchSnapshot();
    });
});
