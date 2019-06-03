import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import SurgePopup from "../surge-pop-up";

const defaultProps = {
    hasPermission: true,
    hasWhiteGlow: true,
    isLoading: false,
    isOnline: true,
    copy: {
        surgeHeading: "surge heading test",
        surgeSubheading: "surge subheading test",
        leaderboardHeading: "leaderboard heading test",
        leaderboardSubheading: "leaderboard subheading test"
    },
    onCoinPress: jest.fn(),
    onUpdateSurgePopupVisibility: jest.fn()
};

describe("SurgePopup", () => {
    it("should render", () => {
        const actual = shallow(<SurgePopup {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a grayscale yucoin", () => {
        const actual = shallow(<SurgePopup {...defaultProps} isOnline={false} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render yucoin without white glow", () => {
        const actual = shallow(<SurgePopup {...defaultProps} hasWhiteGlow={false} />);

        expect(actual).toMatchSnapshot();
    });
});
