import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ConnectionItem from "../connections-item";

const defaultProps = {
    name: "fitbit",
    isConnected: true,
    isLoading: false,
    onPress: jest.fn()
};

describe("ConnectionItem", () => {
    it("should render", () => {
        const actual = shallow(<ConnectionItem {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render item a loading indicator", () => {
        const actual = shallow(<ConnectionItem {...defaultProps} isLoading={true} />);

        expect(actual).toMatchSnapshot();
    });
});
