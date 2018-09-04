import * as React from "react";
import { SFC } from "react";
import { G, Rect } from "react-native-svg";
import { Colours } from "../../../../styles";
import { COLOURS } from "../nav-bar";

interface IProps {
    isExtended: boolean;
    colour?: string;
}

const Lines: SFC<IProps> = ({ isExtended, colour = COLOURS.LIGHT }) => (
    <G>
        <Rect
            x="46.1"
            y="16.5"
            fill={
                colour && (colour.startsWith("dark") || colour.startsWith("pink"))
                    ? Colours.navBar.dark.inactive
                    : Colours.navBar.light.inactive
            }
            width={isExtended ? 168 : 161}
            height="3"
        />
        <Rect
            x={239.9}
            y="16.5"
            transform="matrix(-1 -4.489887e-11 4.489887e-11 -1 640.7099 36)"
            fill={
                colour && (colour.startsWith("dark") || colour.startsWith("pink"))
                    ? Colours.navBar.dark.inactive
                    : Colours.navBar.light.inactive
            }
            width={isExtended ? 168 : 161}
            height="3"
        />
    </G>
);

export default Lines;
