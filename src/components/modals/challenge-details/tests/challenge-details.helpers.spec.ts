import { getImage, getImageStyle } from "../challenge-details.helpers";

describe("ChallengeDetails helpers", () => {

    describe("getImage helper", () => {

        it("should return an image for each challenge type", () => {

            let actual = getImage("brisk walk");
            expect(actual).toMatchSnapshot();

            actual = getImage("long walk");
            expect(actual).toMatchSnapshot();

            actual = getImage("meditation");
            expect(actual).toMatchSnapshot();

            actual = getImage("short stroll");
            expect(actual).toMatchSnapshot();
        });
    });

    describe("getImageStyle helper", () => {

        it("should return a view style for each challenge type", () => {

            let actual = getImageStyle("brisk walk");
            expect(actual).toMatchSnapshot();

            actual = getImageStyle("long walk");
            expect(actual).toMatchSnapshot();

            actual = getImageStyle("meditation");
            expect(actual).toMatchSnapshot();

            actual = getImageStyle("short stroll");
            expect(actual).toMatchSnapshot();
        });
    });
});
