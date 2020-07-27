import { getShadowStyle, getTextStyle, getWrapperOverlayStyle, getWrapperStyle } from "../button.helpers";
import { BUTTON_TYPES, Types } from "../button.types";

describe("getWrapperStyle", () => {
    it("should return null for an undefined input", () => {
        expect(getWrapperStyle(undefined)).toBeNull();
    });

    it("should return null for an undefined input", () => {
        expect(getWrapperStyle({ type: "nothing" as Types })).toBeNull();
    });

    it("should be defined when given a known input", () => {
        const actual = getWrapperStyle({
            type: BUTTON_TYPES.PRIMARY_SMALL
        });

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input pressed in", () => {
        const actual = getWrapperStyle({
            isPressedIn: true,
            type: BUTTON_TYPES.PRIMARY_SMALL
        });

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {
        const actual = getWrapperStyle({ type: BUTTON_TYPES.PRIMARY });

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {
        const actual = getWrapperStyle({ type: BUTTON_TYPES.PRIMARY_GREYSCALE_SMALL });

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {
        const actual = getWrapperStyle({
            type: BUTTON_TYPES.PRIMARY_MEDIUM
        });

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {
        const actual = getWrapperStyle({
            type: BUTTON_TYPES.SECONDARY
        });

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {
        const actual = getWrapperStyle({
            type: BUTTON_TYPES.SECONDARY_MEDIUM
        });

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {
        const actual = getWrapperStyle({ type: BUTTON_TYPES.LINK });

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
        const actual = getTextStyle(BUTTON_TYPES.PRIMARY_GREYSCALE_SMALL);

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {
        const actual = getTextStyle(BUTTON_TYPES.SECONDARY);

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {
        const actual = getTextStyle(BUTTON_TYPES.SECONDARY_MEDIUM);

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

    it("should be defined when given an unknown input", () => {
        const actual = getShadowStyle({ type: "nothing" });

        expect(actual).toBeNull();
    });

    it("should be defined when given a known input", () => {
        const actual = getShadowStyle({ type: BUTTON_TYPES.PRIMARY });

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input pressed in", () => {
        const actual = getShadowStyle({ type: BUTTON_TYPES.PRIMARY, isPressedIn: true });

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {
        const actual = getShadowStyle({
            type: BUTTON_TYPES.PRIMARY_MEDIUM
        });

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {
        const actual = getShadowStyle({
            type: BUTTON_TYPES.PRIMARY_GREYSCALE_SMALL
        });

        expect(actual).toBeDefined();
    });

    it("should be defined when given a known input", () => {
        const actual = getShadowStyle({
            type: BUTTON_TYPES.PRIMARY_SMALL
        });

        expect(actual).toBeDefined();
    });
});

describe("getWrapperOverlayStyle", () => {
    it("should return null for an undefined input", () => {
        expect(getWrapperOverlayStyle(undefined)).toBeNull();
    });

    it("should be defined when disabled", () => {
        const actual = getWrapperOverlayStyle({ disabled: true });

        expect(actual).toBeDefined();
    });

    it("should be defined when given not disabled", () => {
        const actual = getWrapperOverlayStyle({ disabled: false });

        expect(actual).not.toBeDefined();
    });
});
