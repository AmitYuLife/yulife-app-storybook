import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import GenericScreen from "../generic.screen";

const defaultProps = {
    onPress: jest.fn(),
    heading: "heading",
    subheading: "subheading",
    ctaLabel: "label",
    isPrimaryLoading: false
};

describe("GenericScreen", () => {
    it("should render", () => {
        const actual = shallow(<GenericScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
    it("should render with secondary button", () => {
        const actual = shallow(
            <GenericScreen {...defaultProps} ctaLabelSecondary={"label"} onPressSecondary={jest.fn()} />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with all buttons loading", () => {
        const actual = shallow(
            <GenericScreen
                {...defaultProps}
                ctaLabelSecondary={"label"}
                onPressSecondary={jest.fn()}
                isPrimaryLoading={true}
                isSecondaryLoading={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
