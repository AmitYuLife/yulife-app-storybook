import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Trophy from "../trophy";

const defaultProps = {
    colourScheme: { active: "#FFFFFF", inactive: "#DDDDDD", pressed: "#EEEEEE" },
    hasDismiss: false,
    hasHiddenIcons: false,
    isActive: false,
    isHighlighted: false,
    isPressed: false
};

describe("Trophy", () => {
    it("should render when inactive and not pressed", () => {
        const actual = shallow(<Trophy {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render when inactive and pressed", () => {
        const actual = shallow(<Trophy {...defaultProps} isPressed={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render when active and not pressed", () => {
        const actual = shallow(<Trophy {...defaultProps} isActive={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should hide icon", () => {
        const actual = shallow(<Trophy {...defaultProps} hasHiddenIcons={true} />);

        expect(actual).toMatchSnapshot();
    });
});
