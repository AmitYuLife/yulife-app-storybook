import { IChallenge } from "../quests-screen";
import { shouldScrollyQuestUpdate } from "../subcomponents/scrolly-quest";
import { TOP_BAR_TYPES } from "@components/organisms/top-bar/top-bar.helpers";

const currentProps = {
  currentLevel: 1,
  activeLevel: 1,
  setFlatListRef: jest.fn(),
  offsets: [100],
  initialScrollIndex: 1,
  data: [
    {
      id: "1241241",
      image: 25,
      slots: [] as any,
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
  ],
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
    },
    {
      isActive: false,
      isDone: false,
      isNext: false,
      isChestLevel: false,
      nextAvailableAt: "30",
      onPress: jest.fn(),
      id: "123",
      level: 2,
      levelChest: "123",
      rating: 0,
      __typename: "QuestMapLevelListItem",
    },
  ] as IChallenge[],
};

describe("shouldScrollyQuestUpdate", () => {
  it("should return true on different initialScrollIndex", () => {
    const nextProps = {
      ...currentProps,
      initialScrollIndex: 0,
    };

    const actual = shouldScrollyQuestUpdate(currentProps, nextProps);

    expect(actual).toBe(true);
  });

  it("should return true if currentLevel becomes active ", () => {
    const nextProps = {
      ...currentProps,
      levels: [{ ...currentProps.levels[0], isActive: true }, currentProps.levels[1]],
    };

    const actual = shouldScrollyQuestUpdate(currentProps, nextProps);

    expect(actual).toBe(true);
  });

  it("should return true if currentLevel becomes done ", () => {
    const nextProps = {
      ...currentProps,
      levels: [{ ...currentProps.levels[0], isDone: true }, currentProps.levels[1]],
    };

    const actual = shouldScrollyQuestUpdate(currentProps, nextProps);

    expect(actual).toBe(true);
  });

  it("should return true if currentLevel becomes next", () => {
    const nextProps = {
      ...currentProps,
      levels: [{ ...currentProps.levels[0], isNext: true }, currentProps.levels[1]],
    };

    const actual = shouldScrollyQuestUpdate(currentProps, nextProps);

    expect(actual).toBe(true);
  });

  it("should return true if currentLevel nextAvailableAt changes valu ", () => {
    const nextProps = {
      ...currentProps,
      levels: [{ ...currentProps.levels[0], nextAvailableAt: "29" }, currentProps.levels[1]],
    };

    const actual = shouldScrollyQuestUpdate(currentProps, nextProps);

    expect(actual).toBe(true);
  });

  it("should return true if currentLevel rating changes", () => {
    const nextProps = {
      ...currentProps,
      levels: [{ ...currentProps.levels[0], rating: 3 }, currentProps.levels[1]],
    };

    const actual = shouldScrollyQuestUpdate(currentProps, nextProps);

    expect(actual).toBe(true);
  });

  it("should return true if offsets length change", () => {
    const nextProps = {
      ...currentProps,
      offsets: [100, 200],
    };

    const actual = shouldScrollyQuestUpdate(currentProps, nextProps);

    expect(actual).toBe(true);
  });

  it("should return true if levels length change", () => {
    const nextProps = {
      ...currentProps,
      levels: [{ ...currentProps.levels[0], isNext: true }, currentProps.levels[1], currentProps.levels[1]],
    };

    const actual = shouldScrollyQuestUpdate(currentProps, nextProps);

    expect(actual).toBe(true);
  });

  it("should return true if currentLevel changes", () => {
    const nextProps = {
      ...currentProps,
      currentLevel: 10,
    };

    const actual = shouldScrollyQuestUpdate(currentProps, nextProps);

    expect(actual).toBe(true);
  });
});
