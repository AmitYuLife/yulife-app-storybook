import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Picker, { Icon } from "../picker";

const defaultProps = {
    onPress: jest.fn(),
    label: "",
    icon: "heart" as Icon,
    placeholder: "test"
};

describe("Picker", () => {
    it("should render with the placeholder", () => {
        const actual = shallow(<Picker {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with overlay & label ", () => {
        const actual = shallow(<Picker {...defaultProps} label="test label" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render picker with coins icon", () => {
        const actual = shallow(<Picker {...defaultProps} icon="coins" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render without overlay", () => {
        const actual = shallow(<Picker {...defaultProps} label="" />);

        expect(actual).toMatchSnapshot();
    });
});
