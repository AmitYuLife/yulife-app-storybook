import { GetCurrentWorld_getCurrentWorld } from "@app/graphql/_core/schema";
import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ChalengesHistoryScreen from "../challenges-history.screen";

const defaultProps = {
    onLeftMenuPress: jest.fn(),
    totalCoins: 604,
    onPressActivityHistory: jest.fn(),
    onPressCta: jest.fn(),
    level: {
        __typename: "Level",
        id: "aasqweq",
        level: 1,
        levelChestId: null,
        name: "name",
        rating: 2,
        slots: [
            {
                __typename: "LevelSlot",
                availableAtLevel: 1,
                id: "asda2",
                milestones: [
                    {
                        XP: 100,
                        __typename: "LevelSlotMilestone",
                        coins: 123,
                        id: "dsadas",
                        target: {
                            __typename: "MilestoneTarget",
                            meditation: 0,
                            steps: 0
                        }
                    }
                ],
                passive: true,
                rating: 1,
                challengesDetails: [],
                subtype: "brisk walk",
                timeLimit: 600,
                type: "asdas",
                unit: "ssda",
                yuCoinAwarded: 3
            },
            {
                __typename: "LevelSlot",
                availableAtLevel: 1,
                id: "asda3",
                milestones: [
                    {
                        XP: 100,
                        __typename: "LevelSlotMilestone",
                        coins: 123,
                        id: "dsadas",
                        target: {
                            __typename: "MilestoneTarget",
                            meditation: 0,
                            steps: 0
                        }
                    }
                ],
                passive: true,
                rating: 3,
                challengesDetails: [],
                subtype: "short stroll",
                timeLimit: 300,
                type: "asdas",
                unit: "ssda",
                yuCoinAwarded: 1
            },
            {
                __typename: "LevelSlot",
                availableAtLevel: 1,
                id: "asda4",
                milestones: [
                    {
                        XP: 100,
                        __typename: "LevelSlotMilestone",
                        coins: 123,
                        id: "dsadas",
                        target: {
                            __typename: "MilestoneTarget",
                            meditation: 0,
                            steps: 0
                        }
                    }
                ],
                passive: true,
                rating: null,
                challengesDetails: [],
                subtype: "long walk",
                timeLimit: 1800,
                type: "asdas",
                unit: "ssda",
                yuCoinAwarded: 1
            },
            {
                __typename: "LevelSlot",
                availableAtLevel: 1,
                id: "asda5",
                milestones: [
                    {
                        XP: 100,
                        __typename: "LevelSlotMilestone",
                        coins: 123,
                        id: "dsadas",
                        target: {
                            __typename: "MilestoneTarget",
                            meditation: 180,
                            steps: 0
                        }
                    },
                    {
                        XP: 100,
                        __typename: "LevelSlotMilestone",
                        coins: 123,
                        id: "dsadas",
                        target: {
                            __typename: "MilestoneTarget",
                            meditation: 600,
                            steps: 0
                        }
                    }
                ],
                passive: true,
                rating: 0,
                challengesDetails: [],
                subtype: "meditation",
                timeLimit: 1800,
                type: "asdas",
                unit: "ssda",
                yuCoinAwarded: 0
            }
        ]
    } as GetCurrentWorld_getCurrentWorld
};

describe("ChalengesHistoryScreen", () => {
    it("should match snapshot", () => {
        const actual = shallow(<ChalengesHistoryScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
