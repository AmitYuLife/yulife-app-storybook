import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ChallengeCompleteScreen from "../challenge-complete.screen";

const defaultProps = {
    onCtaPress: jest.fn(),
    isLoading: false,
    copy: {
        ctaLabel: "",
        heading: ""
    }
};

describe("ChallengeCompleteScreen", () => {
    it("should render", () => {
        const actual = shallow(<ChallengeCompleteScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with the priamry button loading", () => {
        const actual = shallow(<ChallengeCompleteScreen {...defaultProps} isLoading={true} />);

        expect(actual).toMatchSnapshot();
    });
});
