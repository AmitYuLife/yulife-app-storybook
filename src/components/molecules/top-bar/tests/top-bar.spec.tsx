import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import TopBar from "../top-bar";

const defaultProps = {
    coins: 1234,
    onPressLeftIcon: jest.fn()
};

describe("TopBar", () => {
    it("should render with default props", () => {
        const actual = shallow(<TopBar {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with menu label", () => {
        const actual = shallow(<TopBar {...defaultProps} menuLabel="Menu Label" leftIcon="Menu" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with timer", () => {
        const actual = shallow(<TopBar {...defaultProps} timer="11:58:00" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with back button", () => {
        const actual = shallow(<TopBar {...defaultProps} leftIcon="Back" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with name", () => {
        const actual = shallow(<TopBar {...defaultProps} name="name test" leftIcon="Back" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with name", () => {
        const actual = shallow(<TopBar {...defaultProps} name="name test" />);

        expect(actual).toMatchSnapshot();
    });
});
