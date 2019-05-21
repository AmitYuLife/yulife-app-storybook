import { getPositionName } from "../leaderboard-position.helpers";

describe("getPositionName", () => {
    it("should return first", () => {
        expect(getPositionName(1)).toBe("first");
    });
    it("should return second", () => {
        expect(getPositionName(2)).toBe("second");
    });
    it("should return third", () => {
        expect(getPositionName(3)).toBe("third");
    });
    it("should return null", () => {
        expect(getPositionName(4)).toBe(null);
    });
});
