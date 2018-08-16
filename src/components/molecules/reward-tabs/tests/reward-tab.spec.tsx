import "react-native";
import * as React from "react";
import RewardTab from "../reward-tab/reward-tab";
import { shallow } from "enzyme";

const fillers = {
    onPress: (): null => null,
    isActive: false,
};

describe("RewardTab", () => {
    it("inactive state should match snapshot", () => {
        const actual = shallow(<RewardTab {...fillers} label="purchased" />);
        expect(actual).toMatchSnapshot();
    });

    it("active state should match snapshot", () => {
        const actual = shallow(<RewardTab {...fillers} isActive={true} label="purchased" />);
        expect(actual).toMatchSnapshot();
    });

    it("flipped state should match snapshot", () => {
        const actual = shallow(<RewardTab {...fillers} isFlipped={true} label="purchased" />);
        expect(actual).toMatchSnapshot();
    });
});
