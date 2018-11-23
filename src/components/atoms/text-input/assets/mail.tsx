import * as React from "react";
import { SFC } from "react";
import Svg, { G, Path, Polyline } from "react-native-svg";
import { Colours } from "../../../../styles";

interface IProps {
    colour?: string;
    scale?: number;
}

const Mail: SFC<IProps> = ({ scale = 1, colour }) => (
    <Svg
        width={String(52 * scale)}
        height={String(38 * scale)}
        viewBox="0 0 52 38"
    >
        <G>
            <Path
                fill={colour || Colours.textInput.inactive}
                stroke={
                    colour || Colours.textInput.inactive
                }
                strokeWidth={1}
                d="M0,0v38h52V0H0z M46.1,3L26,19.5L5.9,3H46.1z M3,35V4.5l23,18.9L49,4.5V35H3z"
            />
        </G>
        <Polyline
            fill={"none"}
            stroke={colour || Colours.textInput.inactive}
            strokeWidth={1}
            points="2,1.7 26,21.4 50,1.7 "
        />
    </Svg>
);

export default Mail;
