import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import PurchasedItem from "../purchased-item";

const defaultProps = {
    cost: "775 yucoin",
    day: "29",
    id: "5cee812364d64600283a7f83",
    month: "May",
    onPress: jest.fn(),
    reward: "£10 Nike VOUCHER",
    status: "approved"
};

describe("PurchasedItem", () => {
    it("should render with details & tabs", () => {
        const actual = shallow(<PurchasedItem {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render a failed status", () => {
        const actual = shallow(<PurchasedItem {...defaultProps} status="failed" />);

        expect(actual).toMatchSnapshot();
    });
});
