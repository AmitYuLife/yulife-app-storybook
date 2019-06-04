import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import CollectRewardScreen from "../collect-reward.screen";

const defaultProps = {
    onPress: jest.fn(),
    yucoin: 5
};

describe("ChalengesHistoryScreen", () => {
    it("should match snapshot", () => {
        const actual = shallow(<CollectRewardScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
    it("should match snapshot with date", () => {
        const actual = shallow(<CollectRewardScreen {...defaultProps} date={"May 21-26"} />);

        expect(actual).toMatchSnapshot();
    });
});
