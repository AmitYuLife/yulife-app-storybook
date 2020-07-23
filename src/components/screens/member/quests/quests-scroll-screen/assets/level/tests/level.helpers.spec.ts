import { Style } from "../../../../../../../../styles";
import { IChallenge } from "../../../quests-screen";
import WorldSlices from "../../slices";
import { getBackgroundColor, getButtonPosition, getShadowColor, getShadowPosition, getTime } from "../level.helpers";

const nextAvailable = 0;

const level = {
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
      subtype: "brisk walk",
      timeLimit: 600,
      type: "move",
      unit: "steps",
      challengesDetails: [],
      __typename: "LevelSlot",
    },
  ],
} as IChallenge;

describe("getBackgroundColor", () => {
  it("should return pink if active/done/next for unity levels", () => {
    expect(getBackgroundColor(nextAvailable, { ...level, isActive: true })).toBe("rgb(226, 1, 119)");
  });

  it("should return pink if active/done/next for unity levels", () => {
    expect(getBackgroundColor(nextAvailable, { ...level, isDone: true })).toBe("rgb(226, 1, 119)");
  });

  it("should return white if not active/done/next for unity levels", () => {
    expect(getBackgroundColor(nextAvailable, level)).toBe("white");
  });

  it("should return dark hot pink for active non-unity available levels", () => {
    expect(getBackgroundColor(nextAvailable, { ...level, level: 49, isActive: true })).toBe("rgb(226, 1, 119)");
  });

  it("should return different shade of pink for active non-unity unavailable levels", () => {
    expect(getBackgroundColor(-24050, { ...level, level: 49, isActive: true })).toBe("rgb(145,0,76)");
  });

  it("should return white", () => {
    expect(getBackgroundColor(nextAvailable, { ...level, level: 49 })).toBe("white");
  });

  it("should return color for unavailable level of first world of first episode", () => {
    expect(getBackgroundColor(nextAvailable, { ...level, level: 1, isDone: true })).toBe("rgb(93, 182, 138)");
  });
});

describe("getButtonPosition", () => {
  it("should return bottom position", () => {
    expect(getButtonPosition(WorldSlices[0], 0)).toHaveProperty("top", Style.SCALE_UP_AND_DOWN(8));
  });

  it("should return scaled top & left values", () => {
    expect(getButtonPosition(WorldSlices[0], 0)).toEqual({
      top: Style.SCALE_UP_AND_DOWN(8),
      left: Style.SCALE_UP_AND_DOWN(187),
    });
  });
});

describe("getTime", () => {
  it("should return bottom position", () => {
    expect(getTime(3630)).toEqual("01:00:30");
  });

  it("should return bottom position", () => {
    expect(getTime(61)).toEqual("01:01");
  });
  it("should return bottom position", () => {
    expect(getTime(59)).toEqual(":59");
  });
});

describe("getShadowPosition and getShadowPosition", () => {
  it("should return bottom position", () => {
    const actual = getShadowPosition({ top: 0 });
    expect(actual).toHaveProperty("top", -4);
  });

  it("should return null", () => {
    const actual = getShadowColor(17);
    expect(actual).toHaveProperty("backgroundColor", "rgb(253, 236, 75)");
  });
});
