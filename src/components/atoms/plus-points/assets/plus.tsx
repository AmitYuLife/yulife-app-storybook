import * as React from "react";
import { SFC } from "react";
import Svg, { Path } from "react-native-svg";
import { Colours } from "../../../../styles";

interface IProps {
    scale?: number;
    colour?: string;
}

const path =
    /* tslint:disable-next-line */
    "M17.5,8H11V1.5C11,0.7,10.3,0,9.5,0C8.7,0,8,0.7,8,1.5V8H1.5C0.7,8,0,8.7,0,9.5S0.7,11,1.5,11H8v6.5 C8,18.3,8.7,19,9.5,19c0.8,0,1.5-0.7,1.5-1.5V11h6.5c0.8,0,1.5-0.7,1.5-1.5S18.3,8,17.5,8z";

const Plus: SFC<IProps> = ({ scale = 1, colour }) => (
    <Svg
        width={19 * scale}
        height={19 * scale}
        viewBox="0 0 19 19"
    >
        <Path
            fill={colour || Colours.darkHotPink}
            stroke={colour || Colours.darkHotPink}
            d={path}
        />
    </Svg>
);

export default Plus;
