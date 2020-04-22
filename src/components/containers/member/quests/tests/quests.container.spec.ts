import { getTheActiveLevel } from "../quests.container";
import { fakeFormattedData } from "./fakeFormatedData";

const LEVEL_10_INDEX = 9;

describe("Quest Container getTheActiveLevel", () => {
  it("Return active level when isActive and isNext are true at the same time", () => {
    const formattedData = fakeFormattedData.slice();
    formattedData[LEVEL_10_INDEX].isNext = true;
    formattedData[LEVEL_10_INDEX].isActive = true;
    const actual = getTheActiveLevel(formattedData);

    const expected = LEVEL_10_INDEX + 1;

    expect(actual).toEqual(expected);
  });
});
