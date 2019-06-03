import { shallow } from "enzyme";
import * as React from "react";
import { COLOURS, ILabel } from "../../../../../molecules";
import RewardsPurchasedScreen from "../rewards-purchased.screen";

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
    onLeftMenuPress: jest.fn(),
    onLeftTabPress: jest.fn(),
    onRightTabPress: jest.fn(),
    loading: false,
    totalCoins: 1234,
    copy: {
        empty: { heading: "", subheading: "", ctaLabel: "" },
        lockedReward: { heading: "", subheading: "", ctaLabel: "" },
        voucherNotAvailable: { heading: "", subheading: "", ctaLabel: "" },
        offline: { heading: "", subheading: "", ctaLabel: "" },
        notEnoughCoins: { heading: "", subheading: "", ctaLabel: "" },
        aviosConfirmed: { title: "", message: "", cancelButtonText: "" }
    },
    navbarColour: COLOURS.LIGHT
};

describe("RewardsPurchasedScreen", () => {
    it("should render with data", () => {
        const actual = shallow(<RewardsPurchasedScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render without data", () => {
        const actual = shallow(<RewardsPurchasedScreen {...defaultProps} data={[]} />);

        expect(actual).toMatchSnapshot();
    });
});
