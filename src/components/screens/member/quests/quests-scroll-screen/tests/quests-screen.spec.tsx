import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { IChallenge } from "../quests-screen";
import QuestsScreen from "../quests-screen";

const defaultProps = {
    onLeftMenuPress: jest.fn(),
    totalCoins: 200,
    currentLevel: 1,
    activeLevel: 1,
    unity: 50,
    componentId: "yulife.member.Quests",
    data: [
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

describe("QuestsScreen", () => {
    it("should render unity", () => {
        const actual = shallow(<QuestsScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render scrolly quest", () => {
        const actual = shallow(<QuestsScreen {...defaultProps} unity={null} />);

        expect(actual).toMatchSnapshot();
    });
});
