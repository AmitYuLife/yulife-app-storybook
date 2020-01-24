import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { IChallenge } from "../../../quests-screen";
import WorldSlices from "../../slices";
import Level from "../level";

const defaultProps = {
    currentLevel: 1,
    index: 0,
    slice: WorldSlices[0],
    level: {
        isActive: false,
        isDone: false,
        isNext: false,
        isChestLevel: false,
        nextAvailableAt: "30",
        onPress: jest.fn(),
        id: "123",
        level: 1,
        levelChestId: "123",
        name: "name",
        rating: 1,
        __typename: "Level",
        slots: [
            {
                availableAtLevel: 7,
                id: "YU_LEVEL_0151_0",
                milestones: [],
                passive: null,
                rating: null,
                subtype: "brisk walk",
                timeLimit: 600,
                type: "move",
                unit: "steps",
                yuCoinAwarded: null,
                challengesDetails: [],
                __typename: "LevelSlot"
            }
        ]
    } as IChallenge
};

describe("Level", () => {
    it("should render with a pulse", () => {
        const actual = shallow(<Level {...defaultProps} level={{ ...defaultProps.level, isActive: true }} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a lock button", () => {
        const actual = shallow(<Level {...defaultProps} level={{ ...defaultProps.level, level: 3 }} />);

        expect(actual).toMatchSnapshot();
    });
});
