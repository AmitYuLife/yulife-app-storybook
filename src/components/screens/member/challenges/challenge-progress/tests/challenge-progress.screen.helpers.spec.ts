import { getBackgroundImageAndStyle } from "../challenge-progress.screen.helpers";

describe("getBackgroundImageAndStyle", () => {

    it("should return null for an undefined input", () => {
        const actual = getBackgroundImageAndStyle(undefined);
        expect(actual.source).toBeNull();
        expect(getBackgroundImageAndStyle("brisk walk")).toMatchSnapshot();
        expect(getBackgroundImageAndStyle("short stroll")).toMatchSnapshot();
        expect(getBackgroundImageAndStyle("meditation")).toMatchSnapshot();
        expect(getBackgroundImageAndStyle("long walk")).toMatchSnapshot();
    });
});
