import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Treasure from "../treasure";

const defaultProps = {
    colourScheme: { active: "#FFFFFF", inactive: "#DDDDDD", pressed: "#EEEEEE" },
    hasDismiss: false,
    hasHiddenIcons: false,
    isActive: false,
    isPressed: false
};

describe("Treasure", () => {
    it("should render when inactive and not pressed", () => {
        const actual = shallow(<Treasure {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render when inactive and pressed", () => {
        const actual = shallow(<Treasure {...defaultProps} isPressed={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render when active and not pressed", () => {
        const actual = shallow(<Treasure {...defaultProps} isActive={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should hide icon", () => {
        const actual = shallow(<Treasure {...defaultProps} hasHiddenIcons={true} />);

        expect(actual).toMatchSnapshot();
    });
});
