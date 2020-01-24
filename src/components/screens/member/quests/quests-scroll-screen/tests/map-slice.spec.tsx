import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import WorldSlices from "../assets/slices";
import MapSlice from "../map-slice";
import { IChallenge } from "../quests-screen";

const defaultProps = {
    currentLevel: 1,
    activeLevel: 1,
    slice: WorldSlices[0],
    levels: [
        {
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
    ]
};

describe("MapSlice", () => {
    it("should render", () => {
        const actual = shallow(<MapSlice {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
