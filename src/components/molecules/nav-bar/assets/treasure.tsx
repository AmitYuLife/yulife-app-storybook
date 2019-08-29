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

    const fill = getIconColour(colourScheme, isActive, isPressed, true);

    if (isActive) {
        return (
            <G>
                <Circle
                    fill={hasWhiteBackground ? "#AAAAAA" : "#FFFFFF"}
                    cx="520"
                    cy="55"
                    r="55"
                    fillOpacity={hasWhiteBackground ? "0.2" : "0.5"}
                />
                <Rect
                    fill={fill}
                    x="486.9"
                    y="30.7"
                    transform="matrix(0.8651 -0.5015 0.5015 0.8651 48.4717 249.6345)"
                    width="3"
                    height="8"
                />
                <Rect
                    fill={fill}
                    x="478.4"
                    y="39.1"
                    transform="matrix(0.3987 -0.9171 0.9171 0.3987 249.214 465.8611)"
                    width="3"
                    height="7.5"
                />
                <Rect fill={fill} x="472.6" y="53.5" width="8" height="3" />
                <Path
                    fill={fill}
                    d="M561.4,29.6c-1.9-3.3-4.9-5.6-8.5-6.6c-1.7-0.5-3.5-0.6-5.3-0.4H509c-2.4,0.1-4.6,0.8-6.6,1.9l-7.8,4.6l11.9,20.6h-2.3
                    h-16.5v37h39.5h2h21V52.3l6.2-3.5C563,44.8,565.3,36.2,561.4,29.6z M504,27.1c1.5-0.9,3.3-1.4,5.1-1.5h31.2l-4.2,2.5h-33.8
                    L504,27.1z M507.1,52.7h5v2.5c0,1.4-1.1,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5L507.1,52.7L507.1,52.7z M490.6,83.7v-31h13.5v2.5
                    c0,3,2.5,5.5,5.5,5.5c3,0,5.5-2.5,5.5-5.5v-2.5h12v31H490.6z M527.1,49.7h-12h-5l-10.8-18.6h36.3l10.9,18.6h-17.4H527.1z
                     M547.1,83.7h-17v-31h17V83.7z M560,39.4c-0.8,2.8-2.6,5.2-5.2,6.7l-5.2,3l-11-19l5.3-3.1c1.4-0.8,3-1.3,4.5-1.4h0.8l0,0
                    c3.8,0,7.6,1.9,9.7,5.5C560.4,33.6,560.8,36.6,560,39.4z"
                />
            </G>
        );
    }

    return (
        <G>
            <Rect
                x="488.7"
                y="55.4"
                transform="matrix(0.8651 -0.5015 0.5015 0.8651 36.3194 253.8443)"
                width="3"
                height="8"
                fill={fill}
            />
            <Rect
                x="480.1"
                y="63.8"
                transform="matrix(0.3987 -0.9171 0.9171 0.3987 227.6139 482.321)"
                width="3"
                height="7.5"
                fill={fill}
            />
            <Rect x="474.4" y="78.2" width="8" height="3" fill={fill} />
            <Path
                fill={fill}
                d="M563.2,54.3c-1.9-3.3-4.9-5.6-8.5-6.6c-1.7-0.5-3.5-0.6-5.3-0.4h-38.6c-2.4,0.1-4.6,0.8-6.6,1.9l-7.8,4.6l11.9,20.6H506
            h-16.5v37H529h2h21V77l6.2-3.5C564.8,69.5,567.1,60.9,563.2,54.3z M505.8,51.8c1.5-0.9,3.3-1.4,5.1-1.5h31.2l-4.2,2.5h-33.8
            L505.8,51.8z M508.9,77.4h5v2.5c0,1.4-1.1,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5L508.9,77.4L508.9,77.4z M492.4,108.4v-31h13.5v2.5
            c0,3,2.5,5.5,5.5,5.5c3,0,5.5-2.5,5.5-5.5v-2.5h12v31H492.4z M528.9,74.4h-12h-5l-10.8-18.6h36.3l10.9,18.6h-17.4H528.9z
             M548.9,108.4h-17v-31h17V108.4z M561.8,64.1c-0.8,2.8-2.6,5.2-5.2,6.7l-5.2,3l-11-19l5.3-3.1c1.4-0.8,3-1.3,4.5-1.4h0.8l0,0
            c3.8,0,7.6,1.9,9.7,5.5C562.2,58.3,562.6,61.3,561.8,64.1z"
            />
        </G>
    );
}
