import assets from "../assets";
import { getCardBackgroundColor, getImageAndStyle } from "../challenge-details.helpers";
import styles from "../challenge-details.styles";

describe("getImageAndStyle", () => {
    it("should return with image & style for brisk walk ", () => {
        const actual = getImageAndStyle("brisk walk", 0);
        expect(actual).toEqual({
            source: assets.squirrel,
            style: styles.image
        });
    });

    it("should return with image & style for brisk walk ", () => {
        const actual = getImageAndStyle("running", 0);
        expect(actual).toEqual({
            source: null,
            style: styles.image
        });
    });
});

describe("getCardBackgroundColor", () => {
    it("should return pink color for mountain world", () => {
        const actual = getCardBackgroundColor(3);
        expect(actual).toEqual("rgb(255, 239, 239)");
    });

    it("should return yellowish color for desert world", () => {
        const actual = getCardBackgroundColor(2);
        expect(actual).toEqual("rgb(255, 253, 231)");
    });

    it("should return a default white color for other worlds", () => {
        const actual = getCardBackgroundColor(0);
        expect(actual).toEqual("rgb(237, 251, 248)");
    });
});
