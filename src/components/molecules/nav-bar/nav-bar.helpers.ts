import NavBar from "./nav-bar";
import { Colours } from "../../../styles";

interface IGetTextStyle {
    isActive: boolean;
    isPressed: boolean;
    colour: string;
}

export const getTextStyle = ({
    isActive,
    isPressed,
    colour,
}: IGetTextStyle) => {
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
    } else {
        return null;
    }
    return { color };
};
