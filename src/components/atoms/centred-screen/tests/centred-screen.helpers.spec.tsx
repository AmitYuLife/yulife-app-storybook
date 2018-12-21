import "react-native";
import { getImageAndStyle } from "../centred-screen.helpers";

describe("getImageAndStyle", () => {
    it("should return null with an undefined argument", () => {
        const actual = getImageAndStyle(undefined);

        expect(actual.source).toBeNull();
        expect(actual.style).toBeNull();
    });

    it("should return a mocked image for forest", () => {
        const actual = getImageAndStyle("forest");

        expect(actual.source).toBeDefined();
        expect(actual.style).toBeDefined();
    });

    it("should return a mocked image for large forest", () => {
        const actual = getImageAndStyle("large_forest");

        expect(actual.source).toBeDefined();
        expect(actual.style).toBeDefined();
    });

    it("should return a mocked image for mountains", () => {
        const actual = getImageAndStyle("challenge_failed_forest");

        expect(actual.source).toBeDefined();
        expect(actual.style).toBeDefined();
    });
});
