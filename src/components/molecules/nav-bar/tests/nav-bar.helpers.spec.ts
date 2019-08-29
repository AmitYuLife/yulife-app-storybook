import { NavBar } from "../..";
import { Colours } from "../../../../styles";
import { getIconColour, getNavBarColourScheme, getTextStyle } from "../nav-bar.helpers";

const colorScheme = {
    active: "rgba(255,255,255,1)",
    inactive: "rgba(255,255,255,0.4)",
    pressed: "rgba(255,255,255,0.2)"
};

describe("getIconColour", () => {
    it("should return active color of color scheme", () => {
        expect(getIconColour(colorScheme, true, false)).toEqual(colorScheme.active);
    });

    it("should return active color of color scheme even with isPressed true", () => {
        expect(getIconColour(colorScheme, true, true)).toEqual(colorScheme.active);
    });

    it("should return pressed color of color scheme", () => {
        expect(getIconColour(colorScheme, false, true)).toEqual(colorScheme.pressed);
    });

    it("should return inactive color ", () => {
        expect(getIconColour(colorScheme, false, false)).toEqual(colorScheme.inactive);
    });
});

describe("getNavBarColourScheme", () => {
    it("should return desert color scheme", () => {
        expect(getNavBarColourScheme(NavBar.Colours.DESERT)).toEqual(Colours.navBar.desert);
    });

    it("should return light color scheme", () => {
        expect(getNavBarColourScheme(NavBar.Colours.LIGHT)).toEqual(Colours.navBar.light);
    });

    it("should return the default color scheme", () => {
        expect(getNavBarColourScheme("what")).toEqual(Colours.navBar.darker);
    });
});

describe("getTextStyle", () => {
    it("should return active color", () => {
        expect(getTextStyle({ isActive: true, isPressed: true, colour: "desert" })).toEqual({
            color: Colours.navBar.desert.active
        });
    });

    it("should return pressed color", () => {
        expect(getTextStyle({ isActive: false, isPressed: true, colour: "desert" })).toEqual({
            color: Colours.navBar.desert.pressed
        });
    });

    it("should return inactive color", () => {
        expect(getTextStyle({ isActive: false, isPressed: false, colour: "light" })).toEqual({
            color: Colours.navBar.light.inactive
        });
    });

    it("should return null", () => {
        expect(getTextStyle({ isActive: true, isPressed: true, colour: "rgb(255,255,255)" })).toEqual(null);
    });
});
