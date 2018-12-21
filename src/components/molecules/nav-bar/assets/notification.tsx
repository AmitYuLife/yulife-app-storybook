import * as React from "react";
import { SFC } from "react";
import { Path } from "react-native-svg";
import { COLOURS, IColours } from "../nav-bar";
import { getColour } from "./helpers";

interface IProps {
    isVisible: boolean;
    isActive: boolean;
    isPressed: boolean;
    colour?: IColours;
}

const Notification: SFC<IProps> = ({ isVisible, isActive, isPressed, colour = COLOURS.LIGHT }) =>
    !isVisible ? null : (
        <Path
            fill={getColour({
                colour,
                isActive,
                isPressed
            })}
            /*tslint:disable-next-line*/
            d="M223.5,4c7.7,0,14,6.3,14,14s-6.3,14-14,14s-14-6.3-14-14S215.8,4,223.5,4 M223.5,1c-9.4,0-17,7.6-17,17 s7.6,17,17,17s17-7.6,17-17S232.9,1,223.5,1L223.5,1z"
        />
    );

export default Notification;
