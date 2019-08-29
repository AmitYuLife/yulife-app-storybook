// tslint:disable:max-line-length
import * as React from "react";
import { Circle, G, Path } from "react-native-svg";
import { getIconColour, IIconProps } from "../nav-bar.helpers";

export default function Trophy({ colourScheme, isActive, isPressed, hasHiddenIcons, hasWhiteBackground }: IIconProps) {
    if (hasHiddenIcons) {
        return null;
    }

    const fill = getIconColour(colourScheme, isActive, isPressed, true);

    if (isActive) {
        return (
            <G>
                <Circle
                    fill={hasWhiteBackground ? "#AAAAAA" : "#FFFFFF"}
                    cx="363"
                    cy="55"
                    r="55"
                    fillOpacity={hasWhiteBackground ? "0.2" : "0.5"}
                />
                <Path
                    fill={fill}
                    d="M384,26.6v-4h-41v4h-10v18.5c0,5.9,4.4,10.7,10.1,11.4c0.6,9.1,7.2,16.6,15.9,18.6v4.5h-9.5c-2.5,0-4.5,2-4.5,4.5
	s2,4.5,4.5,4.5h28c2.5,0,4.5-2,4.5-4.5s-2-4.5-4.5-4.5H368v-4.5c8.7-2,15.3-9.5,15.9-18.6c5.7-0.7,10.1-5.5,10.1-11.4V26.6H384z
	 M336,45.1V29.6h7v23.9C339,52.8,336,49.3,336,45.1z M379,84.1c0,0.8-0.7,1.5-1.5,1.5h-28c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5
	h28C378.3,82.6,379,83.3,379,84.1z M365,75.6v4.1h-3v-4.1c0.5,0,1,0.1,1.5,0.1c0,0,0,0,0,0c0,0,0,0,0,0
	C364,75.6,364.5,75.6,365,75.6z M381,55.1c0,9.6-7.9,17.5-17.5,17.5c-9.6,0-17.5-7.9-17.5-17.5V25.6h35V55.1z M391,45.1
	c0,4.2-3,7.7-7,8.4V29.6h7V45.1z"
                />
            </G>
        );
    }

    return (
        <G>
            <Path
                fill={fill}
                d="M385.7,50.6v-4h-41v4h-10v18.5c0,5.9,4.4,10.7,10.1,11.4c0.6,9.1,7.2,16.6,15.9,18.6v4.5h-9.5c-2.5,0-4.5,2-4.5,4.5
	s2,4.5,4.5,4.5h28c2.5,0,4.5-2,4.5-4.5s-2-4.5-4.5-4.5h-9.5v-4.5c8.7-2,15.3-9.5,15.9-18.6c5.7-0.7,10.1-5.5,10.1-11.4V50.6H385.7z
	 M337.7,69.1V53.6h7v23.9C340.7,76.8,337.7,73.3,337.7,69.1z M380.7,108.1c0,0.8-0.7,1.5-1.5,1.5h-28c-0.8,0-1.5-0.7-1.5-1.5
	s0.7-1.5,1.5-1.5h28C380,106.6,380.7,107.3,380.7,108.1z M366.7,99.6v4.1h-3v-4.1c0.5,0,1,0.1,1.5,0.1l0,0l0,0
	C365.7,99.6,366.2,99.6,366.7,99.6z M382.7,79.1c0,9.6-7.9,17.5-17.5,17.5s-17.5-7.9-17.5-17.5V49.6h35V79.1z M392.7,69.1
	c0,4.2-3,7.7-7,8.4V53.6h7V69.1z"
            />
        </G>
    );
}
