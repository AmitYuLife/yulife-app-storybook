import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Coupon from "../coupon";

const defaultProps = {
    fill: "#abcdef",
    hasCheckmark: false
};

describe("Coupon", () => {

    it("should render without checkmark", () => {
        const actual = shallow(
            <Coupon
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with checkmark", () => {
        const actual = shallow(
            <Coupon
                {...defaultProps}
                hasCheckmark={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
