import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ChalengesHistorySlot from "../challenges-history-slot";

const defaultProps = {
    duration: "30 minutes",
    type: "steps",
    availableAtLevel: 3,
    locked: false,
    level: {},
    challengesDetails: [{ rating: 0, yuCoinAwarded: 0 }]
};

describe("ChalengesHistorySlot", () => {
    it("should match snapshot", () => {
        const actual = shallow(<ChalengesHistorySlot {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should match snapshot with 0 rating", () => {
        const actual = shallow(<ChalengesHistorySlot {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should show locked", () => {
        const actual = shallow(<ChalengesHistorySlot {...defaultProps} locked={true} />);

        expect(actual).toMatchSnapshot();
    });
});
