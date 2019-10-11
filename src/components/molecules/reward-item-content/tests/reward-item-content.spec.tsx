import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import RewardItemContent from "../reward-item-content";

const defaultProps = {
    labelCtaPrimary: "Label 1",
    onPressCtaPrimary: jest.fn(),
    onPressPicker: jest.fn(),
    rewardValue: 0
};

describe("RewardItemContent", () => {

    it("should render with default props", () => {
        const actual = shallow(
            <RewardItemContent
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with a description and instructions", () => {
        const actual = shallow(
            <RewardItemContent
                {...defaultProps}
                description="This is a description"
                instructions={["These", "are", "the", "instructions"]}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with additional buttons", () => {
        const actual = shallow(
            <RewardItemContent
                {...defaultProps}
                labelCtaSecondary="Label 2"
                labelCtaTertiary="Label 3"
                onPressCtaSecondary={jest.fn()}
                onPressCtaTertiary={jest.fn()}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
