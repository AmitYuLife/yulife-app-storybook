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

    it("should return a mocked image for gray forest", () => {
        const actual = getImageAndStyle("gray_forest");

        expect(actual.source).toBeDefined();
        expect(actual.style).toBeDefined();
    });

    it("should return a mocked image for large forest", () => {
        const actual = getImageAndStyle("large_forest");

        expect(actual.source).toBeDefined();
        expect(actual.style).toBeDefined();
    });

    it("should return a mocked image for challenge failed forest image", () => {
        const actual = getImageAndStyle("challenge_failed_forest");

        expect(actual.source).toBeDefined();
        expect(actual.style).toBeDefined();
    });

    it("should return a mocked image for ocean", () => {
        const actual = getImageAndStyle("ocean");

        expect(actual.source).toBeDefined();
        expect(actual.style).toBeDefined();
    });

    it("should return a mocked image for gray ocean", () => {
        const actual = getImageAndStyle("gray_ocean");

        expect(actual.source).toBeDefined();
        expect(actual.style).toBeDefined();
    });

    it("should return a mocked image for challenge failed ocean image ", () => {
        const actual = getImageAndStyle("challenge_failed_ocean");

        expect(actual.source).toBeDefined();
        expect(actual.style).toBeDefined();
    });

    it("should return a mocked image for desert", () => {
        const actual = getImageAndStyle("desert");

        expect(actual.source).toBeDefined();
        expect(actual.style).toBeDefined();
    });

    it("should return a mocked image for gray desert", () => {
        const actual = getImageAndStyle("gray_desert");

        expect(actual.source).toBeDefined();
        expect(actual.style).toBeDefined();
    });

    it("should return a mocked image for challenge failed desert image", () => {
        const actual = getImageAndStyle("challenge_failed_desert");

        expect(actual.source).toBeDefined();
        expect(actual.style).toBeDefined();
    });

    it("should return a mocked image for mountain", () => {
        const actual = getImageAndStyle("mountain");

        expect(actual.source).toBeDefined();
        expect(actual.style).toBeDefined();
    });

    it("should return a mocked image for gray mountain", () => {
        const actual = getImageAndStyle("gray_mountain");

        expect(actual.source).toBeDefined();
        expect(actual.style).toBeDefined();
    });

    it("should return a mocked image for challenge failed mountain image ", () => {
        const actual = getImageAndStyle("challenge_failed_mountain");

        expect(actual.source).toBeDefined();
        expect(actual.style).toBeDefined();
    });
});
