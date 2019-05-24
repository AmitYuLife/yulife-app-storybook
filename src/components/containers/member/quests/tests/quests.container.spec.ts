import { getTheActiveLevel } from "../quests.container";
const NOT_FIRST_WORLD_LEVEL = 51;
const FIRST_WORLD_LEVEL = 7;

describe("Quest Container getTheActiveLevel", () => {
    it("Return current level if user is world 1", () => {
        const actual = getTheActiveLevel({ hasDone: true, isAvailable: true }, FIRST_WORLD_LEVEL);

        const expected = FIRST_WORLD_LEVEL;

        expect(actual).toEqual(expected);
    });

    it("Return current level if challenge has NOT Done", () => {
        const actual = getTheActiveLevel({ hasDone: false, isAvailable: true }, NOT_FIRST_WORLD_LEVEL);

        const expected = NOT_FIRST_WORLD_LEVEL;

        expect(actual).toEqual(expected);
    });

    it("Return current level if challenge is NOT available", () => {
        const actual = getTheActiveLevel({ hasDone: true, isAvailable: false }, NOT_FIRST_WORLD_LEVEL);

        const expected = NOT_FIRST_WORLD_LEVEL;

        expect(actual).toEqual(expected);
    });

    it(
        "Decrement current level and return it in case:" +
            " the use is not in the first world, challenge was done and it's available",
        () => {
            const actual = getTheActiveLevel({ hasDone: true, isAvailable: true }, NOT_FIRST_WORLD_LEVEL);

            const expected = NOT_FIRST_WORLD_LEVEL - 1;

            expect(actual).toEqual(expected);
        }
    );
});
