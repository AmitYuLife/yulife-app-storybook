import { shallow } from "enzyme";
import * as React from "react";
import RewardsList from "../rewards-list";

const defaultProps = {
    data: [{}],
    onItemPress: jest.fn(),
    onRefresh: jest.fn(),
    refreshing: false
};

describe("RewardsList", () => {

    it("should render with default props", () => {
        const actual = shallow(
            <RewardsList
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
