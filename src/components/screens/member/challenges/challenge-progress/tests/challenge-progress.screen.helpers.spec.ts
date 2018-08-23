import { getBackgroundImage, getBackgroundImageHeight } from "../challenge-progress.screen.helpers";

describe("getBackgroundImage", () => {

    it("should return null for an undefined input", () => {
        expect(getBackgroundImage(undefined)).toBeNull();
        expect(getBackgroundImage("brisk walk")).toMatchSnapshot();
        expect(getBackgroundImage("short stroll")).toMatchSnapshot();
        expect(getBackgroundImage("meditation")).toMatchSnapshot();
        expect(getBackgroundImage("long walk")).toMatchSnapshot();
    });
});

describe("getBackgroundImageHeight", () => {

    it("should return null for an undefined input", () => {
        expect(getBackgroundImageHeight(undefined)).toMatchSnapshot();
        expect(getBackgroundImageHeight("brisk walk")).toMatchSnapshot();
        expect(getBackgroundImageHeight("short stroll")).toMatchSnapshot();
        expect(getBackgroundImageHeight("meditation")).toMatchSnapshot();
        expect(getBackgroundImageHeight("long walk")).toMatchSnapshot();
    });
});
