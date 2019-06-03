import { shallow } from "enzyme";
import * as React from "react";
import { COLOURS, ILabel } from "../../../../../molecules";
import RewardsListScreen from "../rewards-list.screen";

const defaultProps = {
    data: [
        {
            cost: "123",
            day: "Monday",
            id: "id",
            month: "April",
            onPress: jest.fn(),
            reward: "string",
            status: "pending"
        } as any
    ],
    labels: [] as ILabel[],
    onItemPress: jest.fn(),
    onLeftMenuPress: jest.fn(),
    onLeftTabPress: jest.fn(),
    onRefresh: jest.fn(),
    onRightTabPress: jest.fn(),
    loading: false,
    totalCoins: 1234,
    navbarColour: COLOURS.DARKER
};

describe("RewardsListScreen", () => {
    it("should render without data", () => {
        const actual = shallow(<RewardsListScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render without data", () => {
        const actual = shallow(<RewardsListScreen {...defaultProps} data={[]} />);

        expect(actual).toMatchSnapshot();
    });
});
