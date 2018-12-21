import * as React from "react";
import { SFC } from "react";
import { Circle, G, Path, Rect } from "react-native-svg";
import { COLOURS } from "../nav-bar";
import { getColour } from "./helpers";
import { IconProps } from "./icon.model";

const Treasure: SFC<IconProps> = ({ isActive, isPressed, colour = COLOURS.LIGHT, isIconHidden }) => {
    const fill = getColour({
        colour,
        isActive,
        isPressed
    });

    return (
        <G>
            {isIconHidden ? null : (
                <G>
                    <Rect
                        x="380.2"
                        y="62.7"
                        transform="matrix(0.866 -0.5 0.5 0.866 17.8102 199.7843)"
                        fill={fill}
                        width="3"
                        height="8"
                    />
                    <Rect
                        x="371.6"
                        y="71.3"
                        transform="matrix(0.5 -0.866 0.866 0.5 121.3991 360.7773)"
                        fill={fill}
                        width="3"
                        height="8"
                    />
                    <Rect x="366" y="85.5" fill={fill} width="8" height="3" />
                    <Path
                        fill={fill}
                        /*tslint:disable-next-line*/
                        d="M454.6,63.3c-2.6-4.6-7.5-7.1-12.4-7v0l-40.1,0c-2.3,0-4.5,0.6-6.6,1.9l-7.8,4.5l12,20.7h-2.4h-16.5v37h40h1.5 h21.5V85.7l5.7-3.3C456.2,78.5,458.5,70,454.6,63.3z M397,60.7c1.7-1,3.4-1.5,5.1-1.5l31.4,0l-4.2,2.4h-34L397,60.7z M400.3,86.3h5 v2.5c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5V86.3z M383.8,117.3v-31h13.5v2.5c0,3,2.5,5.5,5.5,5.5s5.5-2.5,5.5-5.5v-2.5h12.5v31 H383.8z M420.8,83.3h-12.5h-5.1l-10.8-18.7h36.5l10.8,18.7h-17.4H420.8z M440.8,117.3h-17v-31h17V117.3z M448,79.8l-5.2,3l-11-19.1 l5.2-3c5.3-3,12-1.2,15,4C455.1,70,453.3,76.8,448,79.8z"
                    />
                </G>
            )}
            <Circle fill={fill} cx="410.5" cy="18" r="10" />
        </G>
    );
};

export default Treasure;
