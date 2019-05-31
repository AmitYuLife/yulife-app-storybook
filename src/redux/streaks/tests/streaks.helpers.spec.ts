import { calculateStreak } from "../streaks.helpers";

describe("Streaks helpers", () => {
    it("calculates the current streak length correctly", () => {
        expect(calculateStreak(0)).toEqual(0);
        expect(calculateStreak(1)).toEqual(1);
        expect(calculateStreak(2)).toEqual(2);
        expect(calculateStreak(3)).toEqual(3);
        expect(calculateStreak(4)).toEqual(0);

        // The default maximum is four
        expect(calculateStreak(5)).toEqual(1);
        expect(calculateStreak(6)).toEqual(2);
    });

    it("calculates the current streak length with different max", () => {
        expect(calculateStreak(4, 5)).toEqual(4);
        expect(calculateStreak(5, 5)).toEqual(0);
        expect(calculateStreak(6, 5)).toEqual(1);
    });
});
