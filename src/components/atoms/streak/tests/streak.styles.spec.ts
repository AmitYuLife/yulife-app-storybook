import { getColour } from "../streak.styles";

describe("getColour", () => {

    it("should be defined when unfinished and not pressed", () => {
        expect(getColour(false, false));
    });

    it("should be defined when finished and pressed", () => {
        expect(getColour(true, true));
    });

    it("should be defined when finished and not pressed", () => {
        expect(getColour(true, false));
    });

    it("should be defined when unfinished and pressed", () => {
        expect(getColour(false, true));
    });
});
