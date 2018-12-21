import { getColour } from "../streak.styles";

describe("getColour", () => {

    it("should be defined when unfinished and not pressed", () => {
        expect(getColour("forest", false, false));
    });

    it("should be defined when finished and pressed", () => {
        expect(getColour("forest", true, true));
    });

    it("should be defined when finished and not pressed", () => {
        expect(getColour("forest", true, false));
    });

    it("should be defined when unfinished and pressed", () => {
        expect(getColour("forest", false, true));
    });
});
