import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import FitKitAvailable from "../fitkit-available";

const defaultProps = {
    connecting: false,
    onConnectPress: jest.fn()
};

describe("FitKitAvailable", () => {

    it("should render default values", () => {
        const actual = shallow(
            <FitKitAvailable
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render when connecting", () => {
        const actual = shallow(
            <FitKitAvailable
                {...defaultProps}
                connecting={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
