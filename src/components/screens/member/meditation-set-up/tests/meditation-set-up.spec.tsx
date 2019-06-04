import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import MeditationSetupScreen from "../meditation-set-up.screen";

const defaultProps = {
    onPressBack: jest.fn(),
    onPressClose: jest.fn(),
    onPressCta: jest.fn(),
    onMomentumScrollEnd: jest.fn(),
    ctaLabel: "",
    scrollViewRef: jest.fn(),
    screens: [
        {
            heading: "",
            subheading: "",
            backgroundImage: require("../../../../../../assets/meditation-set-up/ios1.png")
        }
    ]
};

describe("MeditationSetupScreen", () => {
    it("should render", () => {
        const actual = shallow(<MeditationSetupScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
