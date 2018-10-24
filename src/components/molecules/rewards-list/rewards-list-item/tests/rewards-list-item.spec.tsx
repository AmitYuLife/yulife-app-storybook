import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { GetRewards_getRewards_uiSettings } from "../../../../../graphql/_core/schema";
import RewardsListItem from "../rewards-list-item";

const defaultProps = {
    code: "abcdefg",
    cost: 20,
    isLocked: false,
    linkType: "",
    onPress: jest.fn(),
    rewardCurrency: "GBP",
    rewardValue: 10,
    settings: {
        __typename: "RewardUiSettings",
        logoHeight: 1234,
        logoWidth: 1234
    } as GetRewards_getRewards_uiSettings
};

describe("RewardsListItem", () => {

    it("should render with default props", () => {
        const actual = shallow(
            <RewardsListItem
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
