import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import InfoScreen from "../info.screen";

type InfoType = "fitbit" | "garmin";

const defaultProps = {
    onPress: jest.fn(),
    type: "fitbit" as InfoType,
    heading: "heading",
    subheading: "subheading",
    ctaLabel: "label"
};

describe("InfoScreen", () => {
    it("should render", () => {
        const actual = shallow(<InfoScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with garmin logo", () => {
        const actual = shallow(<InfoScreen {...defaultProps} type={"garmin"} />);

        expect(actual).toMatchSnapshot();
    });
});
