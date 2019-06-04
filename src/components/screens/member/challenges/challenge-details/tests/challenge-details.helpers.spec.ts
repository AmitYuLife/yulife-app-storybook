import assets from "../assets";
import { getImageAndStyle } from "../challenge-details.helpers";
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
