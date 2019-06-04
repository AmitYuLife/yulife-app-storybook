import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { GetRewards_getRewards_uiSettings } from "../../../../../../graphql/_core/schema";
import WegiftDetailsScreen from "../wegift-details.screen";

const defaultProps = {
    code: "1234",
    coins: 123,
    cost: 1234,
    data: [
        {
            cost: "123",
            day: "Monday",
            id: "id",
            month: "April",
            onPress: jest.fn(),
            reward: "string",
            status: "pending"
        }
    ],
    description: "A thing that does stuff",
    instructions: ["These", "are", "instructions"],
    labelCtaPrimary: "CTA Primary",
    onItemPress: jest.fn(),
    onLeftTabPress: jest.fn(),
    onPressCtaPrimary: jest.fn(),
    onPressPolicy: jest.fn(),
    onPressTerms: jest.fn(),
    onPressTopBar: jest.fn(),
    onRightTabPress: jest.fn(),
    rewardCurrency: "AVIOS",
    rewardValue: 123,
    uiSettings: {
        __typename: "RewardUiSettings",
        logoHeight: 1234,
        logoWidth: 1234
    } as GetRewards_getRewards_uiSettings
};

describe("RewardsListScreen", () => {
    it("should render without data", () => {
        const actual = shallow(<WegiftDetailsScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
