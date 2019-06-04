import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import LevelLockedScreen from "../level-locked.screen";

const defaultProps = {
    level: 56,
    onPressCta: jest.fn()
};

describe("ChalengesHistoryScreen", () => {
    it("should match snapshot", () => {
        const actual = shallow(<LevelLockedScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
