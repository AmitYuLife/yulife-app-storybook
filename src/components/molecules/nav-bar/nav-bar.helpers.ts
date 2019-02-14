import { Colours } from "../../../styles";
import NavBar from "./nav-bar";

interface IGetTextStyle {
    isActive: boolean;
    isPressed: boolean;
    colour: string;
}

export const getTextStyle = ({ isActive, isPressed, colour }: IGetTextStyle) => {
    let color;
    if (colour === NavBar.Colours.LIGHT) {
        if (isActive) {
            color = Colours.navBar.light.active;
        } else if (isPressed) {
            color = Colours.navBar.light.pressed;
        } else {
            color = Colours.navBar.light.inactive;
        }
    } else if (colour === NavBar.Colours.DARKER) {
        if (isActive) {
            color = Colours.navBar.darker.active;
        } else if (isPressed) {
            color = Colours.navBar.dark.active;
        } else {
            color = Colours.navBar.dark.active;
        }
    } else if (colour === NavBar.Colours.DARK) {
        if (isActive) {
            color = Colours.navBar.dark.active;
        } else if (isPressed) {
            color = Colours.navBar.dark.pressed;
        } else {
            color = Colours.navBar.dark.inactive;
        }
    } else if (colour === NavBar.Colours.DESERT) {
        if (isActive) {
            color = Colours.navBar.desert.active;
        } else if (isPressed) {
            color = Colours.navBar.desert.pressed;
        } else {
            color = Colours.navBar.desert.inactive;
        }
    } else {
        return null;
    }
    return { color };
};

export interface INavBarColourScheme {
    active: string;
    inactive: string;
    pressed: string;
}

export interface IIconProps {
    isActive: boolean;
    isPressed: boolean;
    colourScheme: INavBarColourScheme;
    hasDismiss?: boolean;
    hasHiddenIcons?: boolean;
    hasWhiteBackground?: boolean;
}

export function getNavBarColourScheme(colour: string): INavBarColourScheme {
    switch (colour) {
        case NavBar.Colours.DESERT:
            return Colours.navBar.desert;
        case NavBar.Colours.DARK:
            return Colours.navBar.dark;
        case NavBar.Colours.DARKER:
            return Colours.navBar.darker;
        case NavBar.Colours.LIGHT:
        default:
            return Colours.navBar.light;
    }
}

export function getIconColour(scheme: INavBarColourScheme, isActive: boolean, isPressed: boolean) {
    if (isActive) {
        return scheme.active;
    } else if (isPressed) {
        return scheme.pressed;
    } else {
        return scheme.inactive;
    }
}
