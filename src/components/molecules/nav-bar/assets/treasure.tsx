// tslint:disable:max-line-length
import * as React from "react";
import { Circle, G, Path, Rect } from "react-native-svg";
import { getIconColour, IIconProps } from "../nav-bar.helpers";

export default function Treasure({
    colourScheme,
    isActive,
    isPressed,
    hasHiddenIcons,
    hasWhiteBackground
}: IIconProps) {
    if (hasHiddenIcons) {
        return null;
    }

    const fill = getIconColour(colourScheme, isActive, isPressed);

    if (isActive) {
        return (
            <G>
                <Circle
                    fill={hasWhiteBackground ? "#AAAAAA" : "#FFFFFF"}
                    cx="444"
                    cy="62"
                    r="60"
                    fillOpacity={hasWhiteBackground ? "0.1" : "0.5"}
                />
                <Rect
                    x="408.9"
                    y="37.4"
                    transform="matrix(0.8651 -0.5015 0.5015 0.8651 34.5754 211.3933)"
                    width="3"
                    height="8"
                    fill={fill}
                />
                <Rect
                    x="400.3"
                    y="45.8"
                    transform="matrix(0.3987 -0.9171 0.9171 0.3987 196.2158 398.2996)"
                    width="3"
                    height="7.5"
                    fill={fill}
                />
                <Rect x="394.6" y="60.2" width="8" height="3" fill={fill} />
                <Path
                    d="M483.4,36.3c-1.9-3.3-4.9-5.6-8.5-6.6c-1.7-0.5-3.5-0.6-5.3-0.4H431c-2.4,0.1-4.6,0.8-6.6,1.9l-7.8,4.6l11.9,20.6h-2.3
                h-16.5v37h39.5h2h21V59l6.2-3.5C485,51.5,487.3,42.9,483.4,36.3z M426,33.8c1.5-0.9,3.3-1.4,5.1-1.5h31.2l-4.2,2.5h-33.8L426,33.8z
                 M429.1,59.4h5v2.5c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5V59.4z M412.6,90.4v-31h13.5v2.5c0,3,2.5,5.5,5.5,5.5s5.5-2.5,5.5-5.5
                v-2.5h12v31H412.6z M449.1,56.4h-12h-5l-10.8-18.6h36.3l10.9,18.6h-17.4H449.1z M469.1,90.4h-17v-31h17V90.4z M482,46.1
                c-0.8,2.8-2.6,5.2-5.2,6.7l-5.2,3l-11-19l5.3-3.1c1.4-0.8,3-1.3,4.5-1.4h0.8l0,0c3.8,0,7.6,1.9,9.7,5.5
                C482.4,40.3,482.8,43.3,482,46.1z"
                    fill={fill}
                />
            </G>
        );
    }

    return (
        <G>
            <Rect
                x="408.9"
                y="62.4"
                transform="matrix(0.8651 -0.5015 0.5015 0.8651 22.0488 214.7955)"
                width="3"
                height="8"
                fill={fill}
            />
            <Rect
                x="400.3"
                y="70.7"
                transform="matrix(0.3987 -0.9171 0.9171 0.3987 173.3256 413.3168)"
                width="3"
                height="7.5"
                fill={fill}
            />
            <Rect x="394.6" y="85.2" width="8" height="3" fill={fill} />
            <Path
                d="M483.4,61.3c-1.9-3.3-4.9-5.6-8.5-6.6c-1.7-0.5-3.5-0.6-5.3-0.4H431c-2.4,0.1-4.6,0.8-6.6,1.9l-7.8,4.6l11.9,20.6h-2.3
            h-16.5v37h39.5h2h21V84l6.2-3.5C485,76.5,487.3,67.9,483.4,61.3z M426,58.8c1.5-0.9,3.3-1.4,5.1-1.5h31.2l-4.2,2.5h-33.8L426,58.8z
             M429.1,84.4h5v2.5c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5V84.4z M412.6,115.4v-31h13.5v2.5c0,3,2.5,5.5,5.5,5.5s5.5-2.5,5.5-5.5
            v-2.5h12v31H412.6z M449.1,81.4h-12h-5l-10.8-18.6h36.3l10.9,18.6h-17.4H449.1z M469.1,115.4h-17v-31h17V115.4z M482,71.1
            c-0.8,2.8-2.6,5.2-5.2,6.7l-5.2,3l-11-19l5.3-3.1c1.4-0.8,3-1.3,4.5-1.4h0.8l0,0c3.8,0,7.6,1.9,9.7,5.5
            C482.4,65.3,482.8,68.3,482,71.1z"
                fill={fill}
            />
        </G>
    );
}
