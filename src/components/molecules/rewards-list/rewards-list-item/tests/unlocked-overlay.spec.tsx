import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import UnlockedOverlay from "../unlocked-overlay";

const defaultProps = {
    code: "abcdefg",
    cost: 20,
    rewardCurrency: "GBP",
    rewardValue: 10
};

describe("UnlockedOverlay", () => {

    it("should render with default props", () => {
        const actual = shallow(
            <UnlockedOverlay
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with settings", () => {
        const actual = shallow(
            <UnlockedOverlay
                {...defaultProps}
                settings={{
                    __typename: "RewardUiSettings",
                    alertCancelLabel: null,
                    alertHeading: null,
                    alertOkLabel: null,
                    alertSubheading: null,
                    ctaLabel: null,
                    logoHeight: 1234,
                    logoWidth: 1234
                }}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
