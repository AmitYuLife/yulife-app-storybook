import { getImage, getImageStyle } from "../challenge-tile.helpers";
import { IMAGES } from "../challenge-tile.types";

describe("Challenge Tile styles", () => {
    describe("getImage", () => {
        it("should be null on unknown input", () => {
            const actual = getImage(undefined);

            expect(actual).toBeNull();
        });

        it("should be defined on known input", () => {
            const bird = getImage(IMAGES.BIRD);
            expect(bird).toBeDefined();

            const squirrel = getImage(IMAGES.SQUIRREL);
            expect(squirrel).toBeDefined();

            const elephant = getImageStyle(IMAGES.SNAIL);
            expect(elephant).toBeDefined();

            const ostrich = getImage(IMAGES.RABBIT);
            expect(ostrich).toBeDefined();
        });
    });

    describe("getImageStyle", () => {
        it("should always return typeof ImageStyle", () => {
            const actual = getImageStyle(undefined);
            expect(actual).toMatchSnapshot();

            const bird = getImageStyle(IMAGES.BIRD);
            expect(bird).toMatchSnapshot();

            const squirrel = getImageStyle(IMAGES.SQUIRREL);
            expect(squirrel).toMatchSnapshot();

            const elephant = getImageStyle(IMAGES.SNAIL);
            expect(elephant).toMatchSnapshot();

            const ostrich = getImageStyle(IMAGES.RABBIT);
            expect(ostrich).toMatchSnapshot();
        });
    });
});
