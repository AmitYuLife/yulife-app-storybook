import { shallow } from "enzyme";
import * as React from "react";
import { ILabel } from "../../../../../molecules";
import RewardsPurchasedScreen from "../rewards-purchased.screen";

const defaultProps = {
    data: [{
        cost: "123",
        day: "Monday",
        id: "id",
        month: "April",
        onPress: jest.fn(),
        reward: "string",
        status: "pending"
    }],
    labels: [] as ILabel[],
    onLeftMenuPress: jest.fn(),
    onLeftTabPress: jest.fn(),
    onRightTabPress: jest.fn(),
    refreshing: false,
    totalCoins: 1234
};

describe("RewardsPurchasedScreen", () => {

    it("should render with data", () => {
        const actual = shallow(
            <RewardsPurchasedScreen
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render without data", () => {
        const actual = shallow(
            <RewardsPurchasedScreen
                {...defaultProps}
                data={[]}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
