import { getStyleFromCaretPosition } from "../pop-up.helpers";

describe("getStyleFromCaretPosition", () => {
    it("should return styles ƒor left caret position", () => {
        expect(getStyleFromCaretPosition("left")).toHaveProperty("top", 0);
        expect(getStyleFromCaretPosition("left")).toHaveProperty("bottom", 0);
    });

    it("should return styles ƒor top caret position on null value", () => {
        expect(getStyleFromCaretPosition(null)).toHaveProperty("left", 0);
        expect(getStyleFromCaretPosition(null)).toHaveProperty("right", 0);
    });
});
