/* tslint:disable */
import React, { SFC } from "react";
import Svg, { G, Path } from "react-native-svg";
import { Colours } from "../../../../styles";

interface Props {
    scale?: number;
    colour?: string;
}

const Card: SFC<Props> = ({ scale = 1, colour }) => (
    <Svg
        width={52 * scale}
        height={41 * scale}
        viewBox="0 0 55 41">
        <G>
            <Path fill={colour || Colours.textInput.inactive} d="M47,29.5v-26C47,1.6,45.4,0,43.5,0h-40C1.6,0,0,1.6,0,3.5v26C0,31.4,1.6,33,3.5,33h40C45.4,33,47,31.4,47,29.5z M3.5,3h40C43.8,3,44,3.2,44,3.5V8H3V3.5C3,3.2,3.2,3,3.5,3z M3,29.5V11h41v18.5c0,0.3-0.2,0.5-0.5,0.5h-40C3.2,30,3,29.8,3,29.5z" />
            <Path fill={colour || Colours.textInput.inactive} d="M51.5,8h-2v3h2c0.3,0,0.5,0.2,0.5,0.5v26c0,0.3-0.2,0.5-0.5,0.5h-40c-0.3,0-0.5-0.2-0.5-0.5v-2H8v2c0,1.9,1.6,3.5,3.5,3.5h40c1.9,0,3.5-1.6,3.5-3.5v-26C55,9.6,53.4,8,51.5,8z" />
        </G>
    </Svg>
);

export default Card;
