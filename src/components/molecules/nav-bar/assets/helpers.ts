import { Colours } from "../../../../styles";
import NavBar from "../nav-bar";

interface IGetIconFill {
    isActive: boolean;
    isPressed: boolean;
    colour: string;
}

export const getIconFill = ({ isActive, isPressed, colour }: IGetIconFill) => {
    if (isActive) {
        if (colour === NavBar.Colours.LIGHT) {
            return Colours.navBar.light.active;
        } else if (colour === NavBar.Colours.DARKER) {
            return Colours.navBar.darker.active;
        } else {
            return Colours.navBar.dark.active;
        }
    } else if (isPressed) {
        if (colour === NavBar.Colours.LIGHT) {
            return Colours.navBar.light.pressed;
        } else {
            return Colours.navBar.dark.pressed;
        }
    } else {
        if (colour === NavBar.Colours.LIGHT) {
            return Colours.navBar.light.inactive;
        } else {
            return Colours.navBar.dark.inactive;
        }
    }
};

export const getNotificationFill = ({ isPressed, isActive, colour }: IGetIconFill) => {
    if (isPressed) {
        if (colour === NavBar.Colours.LIGHT) {
            return Colours.navBar.light.pressed;
        } else {
            return Colours.navBar.dark.pressed;
        }
    } else if (isActive) {
        if (colour === NavBar.Colours.LIGHT) {
            return Colours.navBar.light.active;
        } else {
            return Colours.navBar.dark.active;
        }
    } else {
        if (colour === NavBar.Colours.LIGHT) {
            return Colours.navBar.light.inactive;
        } else {
            return Colours.navBar.dark.inactive;
        }
    }
};
