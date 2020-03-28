import { getIconColour } from "../nav-bar.helpers";

const colorScheme = {
    active: "rgb(227,13,118)",
    inactive: "#6E6E70"
};

describe("getIconColour", () => {
    it("should return active color of color scheme", () => {
        expect(getIconColour(true)).toEqual(colorScheme.active);
    });

    it("should return inactive color ", () => {
        expect(getIconColour(false)).toEqual(colorScheme.inactive);
    });
});
