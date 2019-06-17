import { getStyle } from "../challenge-success.helpers";

describe("getStyle", () => {
    it("should return with image & style for mountain world ", () => {
        const actual = getStyle(160);
        expect(actual).toEqual({
            backgroundImage: "challenge_mountain",
            backgroundStyle: { backgroundColor: "rgb(255, 226, 230)" },
            starType: "mountain"
        });
    });

    it("should return star type of null", () => {
        const actual = getStyle(1);
        expect(actual).toHaveProperty("starType", null);
    });
});
