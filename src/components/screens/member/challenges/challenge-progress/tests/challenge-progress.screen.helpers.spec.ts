import { getWorldStyle } from "../challenge-progress.screen.helpers";

describe("getWorldStyle", () => {
    it("should return null for an undefined input", () => {
        const actual = getWorldStyle(undefined);
        expect(actual.source).toBeNull();
        expect(getWorldStyle("brisk walk")).toMatchSnapshot();
        expect(getWorldStyle("short stroll")).toMatchSnapshot();
        expect(getWorldStyle("meditation")).toMatchSnapshot();
        expect(getWorldStyle("long walk")).toMatchSnapshot();
    });
});
