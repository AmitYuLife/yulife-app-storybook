import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import NotificationItem from "../notifications-item";

const defaultProps = {
    active: true,
    available: false,
    id: "123456",
    name: "streak saver",
    onSwitchPress: jest.fn(),
    onTimePress: jest.fn(),
    time: "09:00"
};

describe("NotificationItem", () => {
    it("should render", () => {
        const actual = shallow(<NotificationItem {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render without time", () => {
        const actual = shallow(<NotificationItem {...defaultProps} time="" />);

        expect(actual).toMatchSnapshot();
    });
});
