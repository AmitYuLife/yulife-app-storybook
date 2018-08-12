import { BUTTON_TYPES } from "../button";
import {
    getShadowStyle,
    getTextStyle,
    getWrapperStyle,
} from "../button.helpers";

describe("getWrapperStyle", () => {

    it("should return null for an undefined input", () => {
        expect(getWrapperStyle(undefined)).toBeNull();
    });

    it("should be defined when given a known input", () => {

        const actual = getWrapperStyle(BUTTON_TYPES.PRIMARY_SMALL);

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {

        const actual = getWrapperStyle(BUTTON_TYPES.PRIMARY);

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {

        const actual = getWrapperStyle(BUTTON_TYPES.PRIMARY_MEDIUM);

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {

        const actual = getWrapperStyle(BUTTON_TYPES.SECONDARY);

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {

        const actual = getWrapperStyle(BUTTON_TYPES.PRIMARY_GREYSCALE_SMALL);

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {

        const actual = getWrapperStyle(BUTTON_TYPES.LINK);

        expect(actual).toBeDefined();
    });
});

describe("getTextStyle", () => {

    it("should return null for an undefined input", () => {
        expect(getTextStyle(undefined)).toBeNull();
    });

    it("should be defined when given a known input", () => {

        const actual = getTextStyle(BUTTON_TYPES.PRIMARY);

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {

        const actual = getTextStyle(BUTTON_TYPES.PRIMARY_SMALL);

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {

        const actual = getTextStyle(BUTTON_TYPES.SECONDARY);

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {

        const actual = getTextStyle(BUTTON_TYPES.PRIMARY_GREYSCALE_SMALL);

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {

        const actual = getTextStyle(BUTTON_TYPES.LINK);

        expect(actual).toBeDefined();
    });
});

describe("getShadowStyle", () => {

    it("should return null for an undefined input", () => {
        expect(getShadowStyle(undefined)).toBeNull();
    });

    it("should be defined when given a known input", () => {

        const actual = getShadowStyle(BUTTON_TYPES.PRIMARY);

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {

        const actual = getShadowStyle(BUTTON_TYPES.PRIMARY_MEDIUM);

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {

        const actual = getShadowStyle(BUTTON_TYPES.PRIMARY_GREYSCALE_SMALL);

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {

        const actual = getShadowStyle(BUTTON_TYPES.PRIMARY_SMALL);

        expect(actual).toBeDefined();
    });
});
