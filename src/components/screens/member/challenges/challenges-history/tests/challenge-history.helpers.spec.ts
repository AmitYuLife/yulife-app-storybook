import { getSlotImageProps } from "../challenges-history.helpers";

describe("getSlotImageProps", () => {
    it("should return with specific keys", () => {
        const actual = getSlotImageProps("brisk walk", 0);

        expect(actual.style).toHaveProperty("position", "absolute");
        expect(actual).toHaveProperty("width");
        expect(actual).toHaveProperty("source");
    });
});
