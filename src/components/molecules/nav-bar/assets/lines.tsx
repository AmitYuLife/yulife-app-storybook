import * as React from "react";
import { SFC } from "react";
import { G, Rect } from "react-native-svg";
import { COLOURS, IColours } from "../nav-bar";
import { getColour } from "./helpers";

interface IProps {
    isExtended: boolean;
    colour?: IColours;
}

const Lines: SFC<IProps> = ({ isExtended, colour = COLOURS.LIGHT }) => {
    const fill = getColour({
        colour,
        isActive: false,
        isPressed: false
    });

    return (
        <G>
            <Rect x="46.1" y="16.5" fill={fill} width={isExtended ? "168" : "161"} height="3" />
            <Rect
                x="239.9"
                y="16.5"
                transform="matrix(-1 -4.489887e-11 4.489887e-11 -1 640.7099 36)"
                fill={fill}
                width={isExtended ? "168" : "161"}
                height="3"
            />
        </G>
    );
};

export default Lines;
