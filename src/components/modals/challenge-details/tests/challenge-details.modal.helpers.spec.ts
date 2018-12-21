import { getImageAndStyle } from "../challenge-details.modal.helpers";

describe("ChallengeDetails helpers", () => {

    describe("getImageAndStyle helper", () => {

        it("should return an image for each challenge type", () => {

            let actual = getImageAndStyle("brisk walk");
            expect(actual).toMatchSnapshot();

            actual = getImageAndStyle("long walk");
            expect(actual).toMatchSnapshot();

            actual = getImageAndStyle("meditation");
            expect(actual).toMatchSnapshot();

            actual = getImageAndStyle("short stroll");
            expect(actual).toMatchSnapshot();

            actual = getImageAndStyle("day walk");
            expect(actual).toMatchSnapshot();

            actual = getImageAndStyle("nothing");
            expect(actual).toMatchSnapshot();
        });
    });
});
