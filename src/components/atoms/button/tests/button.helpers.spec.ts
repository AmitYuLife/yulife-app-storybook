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
        const value = getWrapperStyle(
            BUTTON_TYPES.PRIMARY_SMALL
        );
        expect(value).toBeDefined();
    });

    it("should be defined when given a known input", () => {
        const value = getWrapperStyle(BUTTON_TYPES.PRIMARY);
        expect(value).toBeDefined();
    });

    it("should be defined when given a known input", () => {
        const value = getWrapperStyle(
            BUTTON_TYPES.PRIMARY_MEDIUM
        );
        expect(value).toBeDefined();
    });

    it("should be defined when given a known input", () => {
        const value = getWrapperStyle(
            BUTTON_TYPES.SECONDARY
        );
        expect(value).toBeDefined();
    });

    it("should be defined when given a known input", () => {
        const value = getWrapperStyle(BUTTON_TYPES.LINK);
        expect(value).toBeDefined();
    });
});

describe("getTextStyle", () => {
    it("should return null for an undefined input", () => {
        expect(getTextStyle(undefined)).toBeNull();
    });

    it("should be defined when given a known input", () => {
        const value = getTextStyle(BUTTON_TYPES.PRIMARY);
        expect(value).toBeDefined();
    });

    it("should be defined when given a known input", () => {
        const value = getTextStyle(
            BUTTON_TYPES.PRIMARY_SMALL
        );
        expect(value).toBeDefined();
    });

    it("should be defined when given a known input", () => {
        const value = getTextStyle(BUTTON_TYPES.SECONDARY);
        expect(value).toBeDefined();
    });

    it("should be defined when given a known input", () => {
        const value = getTextStyle(BUTTON_TYPES.LINK);
        expect(value).toBeDefined();
    });
});

describe("getShadowStyle", () => {
    it("should return null for an undefined input", () => {
        expect(getShadowStyle(undefined)).toBeNull();
    });
    it("should be defined when given a known input", () => {
        const value = getShadowStyle(BUTTON_TYPES.PRIMARY);
        expect(value).toBeDefined();
    });
    it("should be defined when given a known input", () => {
        const value = getShadowStyle(
            BUTTON_TYPES.PRIMARY_MEDIUM
        );
        expect(value).toBeDefined();
    });
    it("should be defined when given a known input", () => {
        const value = getShadowStyle(
            BUTTON_TYPES.PRIMARY_SMALL
        );
        expect(value).toBeDefined();
    });
});
