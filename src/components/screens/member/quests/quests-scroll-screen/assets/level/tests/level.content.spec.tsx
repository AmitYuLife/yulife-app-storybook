import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { View } from "react-native";
import { IChallenge } from "../../../quests-screen";
import getLevelButton from "../level.content";

const defaultProps = {
    nextAvailable: 0,
    currentLevel: 5,
    level: {
        isActive: false,
        isDone: false,
        isNext: false,
        isChestLevel: false,
        nextAvailableAt: "30",
        onPress: jest.fn(),
        id: "123",
        level: 50,
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
                __typename: "LevelSlot"
            }
        ]
    } as IChallenge
};

describe("LevelContent", () => {
    it("should render Lock", () => {
        const actual = shallow(
            <View>{getLevelButton(defaultProps.nextAvailable, defaultProps.currentLevel, defaultProps.level)}</View>
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render text", () => {
        const actual = shallow(<View>{getLevelButton(defaultProps.nextAvailable, 60, defaultProps.level)}</View>);

        expect(actual).toMatchSnapshot();
    });

    it("should render LevelPending", () => {
        const actual = shallow(<View>{getLevelButton(-25029, 2, { ...defaultProps.level, level: 2 })}</View>);

        expect(actual).toMatchSnapshot();
    });

    it("should render text with level", () => {
        const actual = shallow(<View>{getLevelButton(0, 2, { ...defaultProps.level, level: 2 })}</View>);

        expect(actual).toMatchSnapshot();
    });

    it("should render 1 active star", () => {
        const actual = shallow(<View>{getLevelButton(0, 48, { ...defaultProps.level, level: 21 })}</View>);

        expect(actual).toMatchSnapshot();
    });

    it("should render a chest", () => {
        const actual = shallow(
            <View>{getLevelButton(0, 151, { ...defaultProps.level, level: 157, isChestLevel: true })}</View>
        );

        expect(actual).toMatchSnapshot();
    });
    it("should render a chest", () => {
        const actual = shallow(
            <View>{getLevelButton(0, 151, { ...defaultProps.level, level: 157, isChestLevel: true })}</View>
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render a level lock", () => {
        const actual = shallow(
            <View>{getLevelButton(0, 1, { ...defaultProps.level, level: 48, isChestLevel: true })}</View>
        );

        expect(actual).toMatchSnapshot();
    });
});
