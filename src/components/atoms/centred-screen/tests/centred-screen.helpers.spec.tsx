import { IMAGES } from "../centred-screen";
import {
    getImage,
    getImageStyle,
} from "../centred-screen.helpers";

describe("getImage", () => {

    it("should return null with an undefined argument", () => {

        const actual = getImage(undefined);

        expect(actual).toBeNull();
    });

    it("should return a mocked image for forest", () => {

        const actual = getImage(IMAGES.FOREST);
        expect(actual).toBeDefined();
    });

    it("should return a mocked image for large forest", () => {

        const actual = getImage(IMAGES.LARGE_FOREST);

        expect(actual).toBeDefined();
    });
});

describe("getImageStyle", () => {

    it("should return null with an undefined argument", () => {

        const actual = getImageStyle(undefined);

        expect(actual).toBeNull();
    });

    it("should be defined for a known argument", () => {

        const actual = getImageStyle(IMAGES.FOREST);

        expect(actual).toBeDefined();
    });

    it("should be defined for a known argument", () => {

        const actual = getImageStyle(IMAGES.LARGE_FOREST);

        expect(actual).toBeDefined();
    });
});
