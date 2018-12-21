import { Colours } from "../../../../styles";
import { COLOURS, IColours } from "../nav-bar";

interface IGetIconFill {
    isActive: boolean;
    isPressed: boolean;
    colour: IColours;
}

export const getColour = ({ isActive, isPressed, colour }: IGetIconFill) => {

    if (isActive) {
        return Colours.navBar[colour || COLOURS.LIGHT].active;
    } else if (isPressed) {
        return Colours.navBar[colour || COLOURS.LIGHT].pressed;
    }

    return Colours.navBar[colour || COLOURS.LIGHT].inactive;
};
