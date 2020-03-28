import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Giraffe from "../giraffe";

const defaultProps = {
    colourScheme: { active: "#FFFFFF", inactive: "#DDDDDD", pressed: "#EEEEEE" },
    hasDismiss: false,
    hasHiddenIcons: false,
    isActive: false,
    isHighlighted: false,
    isPressed: false
};

describe("Giraffe", () => {
    it("should render when inactive and not pressed", () => {
        const actual = shallow(<Giraffe {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render when inactive and pressed", () => {
        const actual = shallow(<Giraffe {...defaultProps} isPressed={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render when active and not pressed", () => {
        const actual = shallow(<Giraffe {...defaultProps} isActive={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should hide icon", () => {
        const actual = shallow(<Giraffe {...defaultProps} hasHiddenIcons={true} />);

        expect(actual).toMatchSnapshot();
    });
});
